import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface OnlineDeal {
  id: string;
  name: string;
  price: number;
  original_price: number;
  image: string;
  marketplace: string;
  discount: number;
  free_shipping: boolean;
}

export function useOnlineDeals(marketplace: string | null = null) {
  return useQuery({
    queryKey: ['online_deals', marketplace],
    queryFn: async () => {
      let query = supabase.from('online_deals').select('*');
      
      if (marketplace && marketplace !== 'Todos') {
        query = query.eq('marketplace', marketplace);
      }
      
      const { data, error } = await query.order('discount', { ascending: false });

      if (error) throw error;
      return data as OnlineDeal[];
    },
  });
}

export function useMarketplaces() {
  return useQuery({
    queryKey: ['online_deals', 'marketplaces'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('online_deals')
        .select('marketplace');

      if (error) throw error;
      
      const uniqueMarketplaces = [...new Set(data.map(d => d.marketplace))];
      return ['Todos', ...uniqueMarketplaces];
    },
  });
}
