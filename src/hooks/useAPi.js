import { useState, useEffect } from 'react';
import { fetchForrestActivities, fetchForrestNews, fetchForrestProfile} from '../helpers/services';

export const useForrestActivities = (page = 1, limit = 10) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('ini adalah aktivitas desa', activities)

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const data = await fetchForrestActivities(page, limit);
                setActivities(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadActivities();
    }, [page, limit]);

    return { activities, loading, error };
};

export const useForrestNews = (page = 1, limit = 10) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log ("Berikut merupakan berita dari Polisi Kehutanan", news)
    
    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchForrestNews(page, limit);
                setNews(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, [page, limit]);

    return { news, loading, error };
};

export const useForrestProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('ini adalah ', profile);
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchForrestProfile();
                setProfile(data.vaillage);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, []);

    return { profile, loading, error };
};


export const useForrestTeam = () => {
    const [aparatus, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log("ini adalah para Team Polisi Kehutanan", aparatus)

    useEffect(() => {
        const loadTeam = async () => {
            try {
                const data = await fetchForrestProfile();
                setTeam(data.vaillage.organizationalStructure);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadTeam();
    }, []);

    return { aparatus, loading, error };
};

