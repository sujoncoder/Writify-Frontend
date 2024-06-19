import Banner from "@/pages/Banner";
import FeaturedPosts from "@/pages/FeaturesPost";
import PhotoGallery from "@/pages/PhotoGallery";

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
      </div>
      <div>
        <FeaturedPosts/>
      </div>
      <div>
        <PhotoGallery/>
      </div>
    </main>
  );
}
