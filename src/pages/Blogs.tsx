
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blogs = () => {
  const headerRef = useRef(null);
  const postsRef = useRef(null);

  // Extended blog posts data
  const allBlogPosts = [
    {
      id: 1,
      title: "10 Essential Slides Every Pitch Deck Must Have",
      excerpt: "Learn about the fundamental slides that investors expect to see in every successful pitch deck, from problem statement to financial projections. We'll walk through each slide and explain why it's crucial for your funding success.",
      date: "2024-12-15",
      thumbnail: "📊"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Startup Presentations",
      excerpt: "Discover how artificial intelligence is transforming the way entrepreneurs create compelling pitch decks and connect with investors. From content generation to design optimization, AI is changing the game.",
      date: "2024-12-12",
      thumbnail: "🤖"
    },
    {
      id: 3,
      title: "Common Pitch Deck Mistakes That Kill Funding",
      excerpt: "Avoid these critical errors that cause investors to lose interest in your startup before you even finish your presentation. Learn from real examples and expert insights.",
      date: "2024-12-10",
      thumbnail: "⚠️"
    },
    {
      id: 4,
      title: "The Psychology of Investor Decision Making",
      excerpt: "Understanding how investors think and make decisions can dramatically improve your pitch success rate. Learn the psychological triggers that influence funding decisions.",
      date: "2024-12-08",
      thumbnail: "🧠"
    },
    {
      id: 5,
      title: "Building a Compelling Business Model Slide",
      excerpt: "Your business model slide can make or break your pitch. Learn how to clearly communicate how your startup will make money and scale effectively.",
      date: "2024-12-05",
      thumbnail: "💼"
    },
    {
      id: 6,
      title: "Storytelling Techniques for Pitch Decks",
      excerpt: "Master the art of storytelling in your pitch deck. Learn how to create an emotional connection with investors while presenting hard facts and data.",
      date: "2024-12-03",
      thumbnail: "📖"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );

      gsap.fromTo(postsRef.current?.children, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3
        }
      );
    });

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-dark-900 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you create pitch decks that win funding and grow your startup
            </p>
          </div>

          <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <Card key={post.id} className="hover-lift transition-all duration-300 hover:shadow-xl border border-dark-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-5xl mb-6 text-center">{post.thumbnail}</div>
                  <h2 className="text-xl font-space-grotesk font-bold text-dark-900 mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-dark-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(post.date)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
