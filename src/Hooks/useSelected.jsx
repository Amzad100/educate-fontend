import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useSelected = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selecteds', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selecteds?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [selected, refetch]
};
export default useSelected;