import HeroSlider from '@/components/home/HeroSlider';
import Highlights from '@/components/home/Highlights';
import PromoBanner from '@/components/home/PromoBanner';
import ShopByCategory from '@/components/home/ShopByCategory';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <ShopByCategory />
            <Highlights />
            <Testimonials />
            <PromoBanner />
        </>
    );
}
