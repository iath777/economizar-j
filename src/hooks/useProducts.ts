import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number | null;
  image: string;
  store: string;
  distance: number;
  discount: number | null;
  category: string;
  is_featured: boolean;
  is_bestseller: boolean;
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useBestSellers() {
  return useQuery({
    queryKey: ['products', 'bestsellers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_bestseller', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useProductsByCategory(category: string | null) {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      let query = supabase.from('products').select('*');
      
      if (category) {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
    enabled: true,
  });
}

export function useSearchProducts(searchTerm: string) {
  return useQuery({
    queryKey: ['products', 'search', searchTerm],
    queryFn: async () => {
      if (!searchTerm.trim()) return [];
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('name', `%${searchTerm}%`)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      return data as Product[];
    },
    enabled: searchTerm.length > 0,
  });
}
