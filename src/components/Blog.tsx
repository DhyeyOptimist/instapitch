
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  // Sample blog posts data with images
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Slides Every Pitch Deck Must Have",
      excerpt: "Learn about the fundamental slides that investors expect to see in every successful pitch deck, from problem statement to financial projections.",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Startup Presentations",
      excerpt: "Discover how artificial intelligence is transforming the way entrepreneurs create compelling pitch decks and connect with investors.",
      date: "2024-12-12",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Common Pitch Deck Mistakes That Kill Funding",
      excerpt: "Avoid these critical errors that cause investors to lose interest in your startup before you even finish your presentation.",
      date: "2024-12-10",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current?.children, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBlogClick = (blogId: number) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-dark-900 mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Stay updated with the latest tips, trends, and strategies for creating successful pitch decks
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="hover-lift transition-all duration-300 hover:shadow-xl border border-dark-200 cursor-pointer group"
              onClick={() => handleBlogClick(post.id)}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-space-grotesk font-bold text-dark-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-dark-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(post.date)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/blogs')}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Blogs
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
