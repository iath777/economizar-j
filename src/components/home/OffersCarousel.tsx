import { ChevronRight, Tag } from 'lucide-react';
import { featuredProducts } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function OffersCarousel() {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Ofertas para Você</h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Ver todas
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "flex-shrink-0 w-40 bg-card rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-slide-up",
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-28 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-gold shadow-gold">
                  <span className="text-[10px] font-bold text-primary-foreground">
                    -{product.discount}%
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-3">
              <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-base font-bold text-primary">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {product.originalPrice && (
                <span className="text-[10px] text-muted-foreground line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[10px] text-muted-foreground">{product.store}</span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] text-primary font-medium">{product.distance} km</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
