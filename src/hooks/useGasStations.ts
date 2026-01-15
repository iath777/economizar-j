import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface GasStation {
  id: string;
  name: string;
  brand: string;
  distance: number;
  gasoline: number;
  ethanol: number;
  diesel: number;
  updated_at: string;
}

export function useGasStations() {
  return useQuery({
    queryKey: ['gas_stations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gas_stations')
        .select('*')
        .order('gasoline', { ascending: true });

      if (error) throw error;
      return data as GasStation[];
    },
  });
}

export function useCheapestGasStation() {
  return useQuery({
    queryKey: ['gas_stations', 'cheapest'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gas_stations')
        .select('*')
        .order('gasoline', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      return data as GasStation | null;
    },
  });
}
