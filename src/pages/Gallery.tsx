import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Каюм Насыйри яшәгән йорт',
    image: 'https://cdn.poehali.dev/files/Без заголовка.jpg',
  },
  {
    id: '2',
    title: 'Бакый Урманче ясаган К. Насыйри скульптура образы',
    image: 'https://cdn.poehali.dev/files/PHOTO-2025-03-30-18-08-48.jpg',
  },
  {
    id: '3',
    title: 'Каюм Насыйри музеендагы скульптура',
    image: 'https://cdn.poehali.dev/files/Снимок экрана 2026-01-07 в 09.49.09.png',
  },
  {
    id: '4',
    title: 'Каюм Насыйри хезмәтләре',
    image: 'https://cdn.poehali.dev/files/Снимок экрана 2026-01-07 в 08.45.32.png',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-12 animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/')}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Артка кайту
          </Button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Каюм Насыйри исеме мәңгелек
          </h1>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed">
              Каюм Насыйри – энциклопедист галим. Аның эшчәнлеге – милләткә фидакарьләрчә хезмәт итүнең бөек үрнәге. Китаплары – хәзерге милли тормышыбыз өчен дә аваздаш булган бай хәзинә ул. Ул үз халкының дөньяви белемен булдыруга зур өлеш кертә, реформачыл агымның беренче новаторларыннан берсе була һәм татар халкы арасында фән һәм белем, мәдәниятне таратуны тормышының максаты итеп күрә.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <CardContent className="p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
                />
                <h3 className="text-xl md:text-2xl font-bold text-center text-primary">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </section>

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm md:text-base">
            © 2026 - Татар мәдәниятен саклау һәм үстерү проекты. Лилия Кәримова
          </p>
        </footer>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;