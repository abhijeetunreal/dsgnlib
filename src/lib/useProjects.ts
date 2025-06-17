
import { useQuery } from '@tanstack/react-query';
import Papa from 'papaparse';

// IMPORTANT: Replace this with your actual Google Sheet public CSV URL
// How to get this URL: In Google Sheets, go to File > Share > Publish to web,
// select your sheet, choose "Comma-separated values (.csv)", and click Publish.
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRn21VF_uohD9GNPQL1FjRhh-WtxIwlSrWLrzL9cyJelEsFrBW0FhZmqGsKOLVOCKvtF9Fbs-qLgKAV/pub?gid=1369882750&single=true&output=csv';

export interface Project {
  id: number;
  studentName: string;
  email: string;
  projectName: string;
  imageUrls: string[]; // Changed from imageUrl to imageUrls array
  description: string;
  tags: string[];
  uploadDate: string; 
  publishDate: Date; // Added parsed date for sorting
  rowIndex: number; // Add row index for fallback sorting
}

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(GOOGLE_SHEET_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok while fetching Google Sheet data.');
  }
  const csvText = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          console.error("CSV Parsing Errors:", results.errors);
          reject(new Error("Error parsing CSV data."));
          return;
        }

        console.log("Parsed CSV rows:", results.data);

        const projects: Project[] = results.data
          .map((row: any, index: number) => {
            // Skip empty rows which might be parsed from the sheet
            if (!row.id) return null;

            // Parse multiple image URLs separated by commas
            const imageUrlsString = row.imageUrl || row.imageUrls || '';
            const imageUrls = imageUrlsString
              .split(',')
              .map((url: string) => url.trim())
              .filter((url: string) => url.length > 0);

            // Parse upload date for proper sorting - handle various date formats
            const uploadDateString = row.uploadDate || row.timestamp || '';
            let publishDate: Date;
            
            try {
              if (!uploadDateString) {
                // If no date, use a very old date so it appears last
                publishDate = new Date('1970-01-01');
              } else {
                // Try multiple date formats
                publishDate = new Date(uploadDateString);
                
                // If date parsing failed, try other common formats
                if (isNaN(publishDate.getTime())) {
                  // Try MM/DD/YYYY format
                  const parts = uploadDateString.split('/');
                  if (parts.length === 3) {
                    publishDate = new Date(parts[2], parseInt(parts[0]) - 1, parts[1]);
                  }
                }
                
                // If still invalid, use row index as fallback (newer entries have higher index)
                if (isNaN(publishDate.getTime())) {
                  // Use a base date plus the row index to simulate chronological order
                  publishDate = new Date(Date.now() - (1000 - index) * 24 * 60 * 60 * 1000);
                }
              }
            } catch (error) {
              console.warn('Date parsing failed for:', uploadDateString, 'using row index fallback');
              // Use row index as chronological fallback (higher index = more recent)
              publishDate = new Date(Date.now() - (1000 - index) * 24 * 60 * 60 * 1000);
            }

            console.log(`Row ${index}: ${uploadDateString} -> ${publishDate}`);

            return {
              id: Number(row.id) || index + 1,
              studentName: row.studentName || 'N/A',
              email: row['Email address'] || '',
              projectName: row.projectName || 'Untitled Project',
              imageUrls: imageUrls.length > 0 ? imageUrls : [''],
              description: row.description || '',
              tags: row.tags ? row.tags.split(',').map((tag: string) => tag.trim()) : [],
              uploadDate: uploadDateString,
              publishDate: publishDate,
              rowIndex: index, // Store original row index
            };
          })
          .filter((project): project is Project => project !== null)
          // Sort by publishDate descending (most recent first), with rowIndex as fallback
          .sort((a, b) => {
            const dateDiff = b.publishDate.getTime() - a.publishDate.getTime();
            // If dates are the same, use rowIndex (higher index = more recent)
            return dateDiff !== 0 ? dateDiff : b.rowIndex - a.rowIndex;
          });
          
        console.log('Final sorted projects:', projects.map(p => ({ name: p.projectName, date: p.publishDate, index: p.rowIndex })));
        resolve(projects);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
};
