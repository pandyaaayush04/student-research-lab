const Gallery = () => {
  const galleryItems = [
    {
      title: "Faculty-Led Research Sessions",
      description:
        "Guided research discussions and mentoring sessions conducted by experienced faculty members.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Hands-on Technical Workshops",
      description:
        "Practical workshops that help students apply theoretical concepts using tools and experiments.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Collaborative Group Activities",
      description:
        "Team-based activities designed to promote collaboration and problem-solving skills.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Fun & Competitive Challenges",
      description:
        "Engaging challenges that make engineering learning enjoyable.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section id="gallery" className="bg-white rounded-xl shadow-sm max-w-5xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-2xl font-semibold">Learning in Action</h2>
        <p className="text-sm text-gray-600 max-w-xl">
          Experiential learning through workshops, sessions, and collaborative activities.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {galleryItems.map((item, i) => (
          <div key={i} className="space-y-3">
            
            {/* Image (no card) */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Text floats freely */}
            <div className="px-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;
