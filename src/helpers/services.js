import API from './api';

// GUID 
const GUID = '2305e536-0ef6-48e7-9aac-79ca236433fa';

// Ambil data berita 
export const fetchForrestNews = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'report' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Forrest news:', error);
    throw error;
  }
};

export const fetchForrestActivities = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'activity' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village activities:', error);
    throw error;
  }
};

export const fetchForrestProfile = async () => {
  try {
    const response = await API.get('/api/village/profile', {
      params: { guid: GUID },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village profile:', error);
    throw error;
  }
};

// Fungsi untuk mengambil data team
export const fetchForrestTeam = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'aparatus' }, // Menggunakan GUID dan parameter lainnya
    });
    
    return response.data; // Mengembalikan data yang diterima dari respons
  } catch (error) {
    console.error('Error fetching Forrest Team:', error);
    throw error; // Melempar error untuk penanganan lebih lanjut
  }
};