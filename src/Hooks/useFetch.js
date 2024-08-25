import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useFetch = (url, param) => {
    const newUrl = `${url}${param}`;
    const fetchData = () =>
        axios.get(newUrl, {
            headers: {
                'x-rapidapi-key': 'fc339f17aamshc00f6a140b3d498p1911eejsn3f9eee9dffc0',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            },
            params: {
                maxResults: '50',
            }
        }).then((resp) => {
            return (resp.data);
        })
    const { data, isLoading } = useQuery({ queryKey: [newUrl], queryFn: fetchData, refetchOnWindowFocus: false });

    return { data, isLoading }
}