import Gallery from '../sections/Gallery'

const GalleryPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-terracotta/10 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-terracotta mb-4">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto">
            A glimpse into the flavors and atmosphere that make Las Tapas special
          </p>
        </div>
      </section>

      <Gallery />
    </div>
  )
}

export default GalleryPage

