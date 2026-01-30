import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'EcoNatura Basic',
    price: 4500,
    size: 'Средний',
    material: 'Бамбук',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Компактный лоток из натурального бамбука'
  },
  {
    id: 2,
    name: 'EcoNatura Premium',
    price: 7800,
    size: 'Большой',
    material: 'Бамбук',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Просторный лоток премиум класса'
  },
  {
    id: 3,
    name: 'EcoNatura Ceramic',
    price: 9500,
    size: 'Средний',
    material: 'Керамика',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Элегантный керамический лоток'
  },
  {
    id: 4,
    name: 'EcoNatura Wood',
    price: 6200,
    size: 'Большой',
    material: 'Дерево',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Лоток из массива дерева'
  },
  {
    id: 5,
    name: 'EcoNatura Mini',
    price: 3800,
    size: 'Маленький',
    material: 'Бамбук',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Компактный лоток для котят'
  },
  {
    id: 6,
    name: 'EcoNatura Deluxe',
    price: 12000,
    size: 'Большой',
    material: 'Керамика',
    image: 'https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/caeb8f77-bc16-4b84-84d2-457f787953e9.jpg',
    description: 'Роскошный лоток с автоочисткой'
  }
];

export default function Index() {
  const [selectedSize, setSelectedSize] = useState<string>('Все');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Все');
  const [priceRange, setPriceRange] = useState<number[]>([0, 15000]);
  const [activeSection, setActiveSection] = useState<string>('catalog');

  const filteredProducts = products.filter(product => {
    const sizeMatch = selectedSize === 'Все' || product.size === selectedSize;
    const materialMatch = selectedMaterial === 'Все' || product.material === selectedMaterial;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return sizeMatch && materialMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-[0.2em] text-primary uppercase">EcoNatura</h1>
            <div className="hidden md:flex gap-10 text-sm">
              <button 
                onClick={() => setActiveSection('catalog')} 
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase font-light"
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('about')} 
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase font-light"
              >
                О бренде
              </button>
              <button 
                onClick={() => setActiveSection('ecology')} 
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase font-light"
              >
                Экология
              </button>
              <button 
                onClick={() => setActiveSection('blog')} 
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase font-light"
              >
                Блог
              </button>
              <button 
                onClick={() => setActiveSection('contacts')} 
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase font-light"
              >
                Контакты
              </button>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-primary/20 hover:bg-primary hover:text-primary-foreground">
              <Icon name="ShoppingCart" size={18} />
              <span className="text-sm tracking-wide">Корзина</span>
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'catalog' && (
        <>
          {/* Hero Section */}
          <section className="relative h-[700px] overflow-hidden animate-fade-in bg-gradient-to-br from-background via-muted/30 to-secondary/20">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/246330aa-00b7-42cf-a61c-0671093a7a72/files/7de9a4ce-2f70-486a-b6fe-3289eeca6b31.jpg')`
              }}
            />
            <div className="relative container mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <div className="w-16 h-[1px] bg-accent mb-6"></div>
                  <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4">
                    Premium Collection
                  </p>
                </div>
                <h2 className="text-7xl md:text-8xl font-light text-foreground mb-8 leading-[1.1] tracking-tight">
                  Ваш кот<br />достоен лучшего
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl font-light leading-relaxed">
                  Эксклюзивные лотки из благородных материалов, созданные для истинных ценителей качества и комфорта
                </p>
                <Button size="lg" className="text-sm tracking-widest uppercase px-10 py-7 font-light">
                  Исследовать коллекцию
                </Button>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 text-right">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
                Ручная работа
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
                Натуральные материалы
              </p>
            </div>
          </section>

          {/* Catalog Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 animate-scale-in border-border/50 shadow-sm">
                    <CardHeader>
                      <h3 className="text-xl font-light tracking-wide uppercase">Фильтры</h3>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Size Filter */}
                      <div>
                        <h4 className="text-xs font-light mb-4 flex items-center gap-2 tracking-widest uppercase text-muted-foreground">
                          <Icon name="Ruler" size={16} />
                          Размер
                        </h4>
                        <div className="flex flex-col gap-2">
                          {['Все', 'Маленький', 'Средний', 'Большой'].map((size) => (
                            <Button
                              key={size}
                              variant={selectedSize === size ? 'default' : 'ghost'}
                              className="justify-start font-light text-sm hover:bg-muted"
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Material Filter */}
                      <div>
                        <h4 className="text-xs font-light mb-4 flex items-center gap-2 tracking-widest uppercase text-muted-foreground">
                          <Icon name="Leaf" size={16} />
                          Материал
                        </h4>
                        <div className="flex flex-col gap-2">
                          {['Все', 'Бамбук', 'Дерево', 'Керамика'].map((material) => (
                            <Button
                              key={material}
                              variant={selectedMaterial === material ? 'default' : 'ghost'}
                              className="justify-start font-light text-sm hover:bg-muted"
                              onClick={() => setSelectedMaterial(material)}
                            >
                              {material}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Price Range */}
                      <div>
                        <h4 className="text-xs font-light mb-4 flex items-center gap-2 tracking-widest uppercase text-muted-foreground">
                          <Icon name="DollarSign" size={16} />
                          Цена
                        </h4>
                        <div className="space-y-4">
                          <Slider
                            min={0}
                            max={15000}
                            step={500}
                            value={priceRange}
                            onValueChange={setPriceRange}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground font-light">
                            <span>{priceRange[0]} ₽</span>
                            <span>{priceRange[1]} ₽</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <div className="mb-10">
                    <h3 className="text-3xl font-light tracking-wide mb-3">Коллекция</h3>
                    <p className="text-sm text-muted-foreground font-light tracking-wide">
                      {filteredProducts.length} изделий
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                      <Card 
                        key={product.id} 
                        className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in border-border/30 bg-card"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="aspect-square overflow-hidden bg-muted/30">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-xl font-light tracking-wide">{product.name}</h4>
                            <Badge variant="secondary" className="text-xs font-light tracking-wider">{product.material}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed">{product.description}</p>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                            <Icon name="Ruler" size={14} />
                            <span>{product.size}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center pt-4 border-t border-border/30">
                          <span className="text-2xl font-light text-primary tracking-wide">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Icon name="ShoppingCart" size={18} />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 text-center">О бренде EcoNatura</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    EcoNatura — это философия гармонии с природой, воплощённая в каждом изделии. 
                    Мы создаём лотки для кошек премиум-класса из экологически чистых материалов.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Наша миссия — доказать, что забота о питомце может быть стильной и 
                    не наносить вред окружающей среде.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Премиум качество</h4>
                      <p className="text-muted-foreground">Тщательный контроль на каждом этапе производства</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Leaf" size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Эко-материалы</h4>
                      <p className="text-muted-foreground">100% натуральные и возобновляемые ресурсы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Heart" size={32} className="text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Забота о питомцах</h4>
                      <p className="text-muted-foreground">Безопасность и комфорт на первом месте</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ecology Section */}
      {activeSection === 'ecology' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 text-center">Наш вклад в экологию</h2>
              <div className="prose prose-lg max-w-none space-y-8">
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Icon name="Sprout" size={28} className="text-accent" />
                      Устойчивое производство
                    </h3>
                  </CardHeader>
                  <CardContent className="text-lg space-y-4">
                    <p>
                      Мы используем только возобновляемые материалы: бамбук растёт в 30 раз быстрее 
                      обычного дерева, а керамика производится из природной глины без синтетических добавок.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>0% пластика в составе продукции</li>
                      <li>Биоразлагаемая упаковка</li>
                      <li>Углеродно-нейтральная доставка</li>
                      <li>1% выручки направляется на защиту лесов</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Icon name="Recycle" size={28} className="text-accent" />
                      Программа переработки
                    </h3>
                  </CardHeader>
                  <CardContent className="text-lg">
                    <p>
                      Верните старый лоток — получите скидку 20% на новый. Мы переработаем материалы 
                      и дадим им вторую жизнь.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {activeSection === 'blog' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">Блог</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Как выбрать правильный размер лотка',
                  date: '15 января 2026',
                  excerpt: 'Советы по выбору идеального лотка для вашей кошки'
                },
                {
                  title: 'Уход за бамбуковыми изделиями',
                  date: '10 января 2026',
                  excerpt: 'Простые правила для долгой службы эко-лотков'
                },
                {
                  title: 'Почему эко-материалы важны',
                  date: '5 января 2026',
                  excerpt: 'Разбираем влияние пластика на окружающую среду'
                }
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.date}</Badge>
                    <h3 className="text-2xl font-bold">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="outline">
                      Читать далее
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <section className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold">Свяжитесь с нами</h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@econatura.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Экологическая, д. 15
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold">Напишите нам</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    />
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none"
                    />
                    <Button className="w-full">Отправить</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 mt-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-light tracking-[0.2em] uppercase mb-6">EcoNatura</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Эксклюзивные лотки для кошек из благородных материалов
              </p>
            </div>
            <div>
              <h4 className="text-xs font-light mb-6 tracking-widest uppercase text-foreground">Коллекция</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-light">
                <li className="hover:text-foreground transition-colors cursor-pointer">Бамбуковые лотки</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Керамические лотки</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Деревянные лотки</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-light mb-6 tracking-widest uppercase text-foreground">Информация</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-light">
                <li className="hover:text-foreground transition-colors cursor-pointer">О компании</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Доставка и оплата</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Возврат товара</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-light mb-6 tracking-widest uppercase text-foreground">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-12 bg-border/30" />
          <p className="text-center text-xs text-muted-foreground font-light tracking-wide">
            © 2026 EcoNatura. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}