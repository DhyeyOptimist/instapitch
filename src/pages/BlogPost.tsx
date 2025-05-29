import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  // Blog posts data with images
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Slides Every Pitch Deck Must Have",
      excerpt: "Learn about the fundamental slides that investors expect to see in every successful pitch deck, from problem statement to financial projections.",
      content: `Creating a compelling pitch deck is crucial for securing funding for your startup. Investors see hundreds of pitch decks, so yours needs to stand out while covering all the essential elements they expect to see.

## The Problem Statement
Start with a clear, compelling problem that your target market faces. This slide should resonate with investors and make them think "Yes, this is a real pain point that needs solving."

## Your Solution
Present your solution clearly and concisely. Explain how your product or service addresses the problem you've identified. Focus on the unique value proposition that sets you apart.

## Market Opportunity
Show the size of the market you're targeting. Use credible data sources and break down your Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM).

## Business Model
Clearly explain how your company will make money. Whether it's subscription-based, freemium, or one-time purchases, investors need to understand your revenue streams.

## Traction and Validation
Provide evidence that your solution works. This could include user growth, revenue figures, partnerships, or customer testimonials.

## Financial Projections
Present realistic financial forecasts for the next 3-5 years. Include revenue projections, key metrics, and your path to profitability.

## Competition Analysis
Acknowledge your competition and explain your competitive advantages. Show that you understand the market landscape.

## Team
Introduce your founding team and key employees. Highlight relevant experience and expertise that gives you an edge.

## Funding Request
Clearly state how much funding you're seeking and how you plan to use the money. Be specific about allocation across different areas.

## Next Steps
End with clear next steps and a strong call to action. Make it easy for investors to follow up with you.`,
      date: "2024-12-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Startup Presentations",
      excerpt: "Discover how artificial intelligence is transforming the way entrepreneurs create compelling pitch decks and connect with investors.",
      content: `Artificial Intelligence is reshaping every industry, and the world of startup presentations is no exception. From content generation to design optimization, AI tools are helping entrepreneurs create more compelling and effective pitch decks.

## Automated Content Generation
AI can help generate compelling content for your pitch deck by analyzing successful presentations and industry trends. This includes crafting problem statements, value propositions, and market analysis that resonate with investors.

## Design Intelligence
Modern AI tools can automatically suggest layouts, color schemes, and visual elements that enhance the impact of your presentation. They analyze what works best for different types of content and audience preferences.

## Data-Driven Insights
AI can analyze investor preferences and presentation performance to provide recommendations on slide order, content emphasis, and presentation timing.

## Personalization at Scale
With AI, you can easily customize your pitch deck for different investors or presentation contexts while maintaining consistency in your core message.

## Real-time Feedback
Some AI tools can provide real-time feedback on your presentation delivery, helping you improve your pitch performance before the actual investor meeting.

The future of pitch deck creation is becoming increasingly intelligent, allowing entrepreneurs to focus more on their business strategy while AI handles the optimization of their presentation.`,
      date: "2024-12-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 3,
      title: "Common Pitch Deck Mistakes That Kill Funding",
      excerpt: "Avoid these critical errors that cause investors to lose interest in your startup before you even finish your presentation.",
      content: `Even the most innovative startups can fail to secure funding due to preventable mistakes in their pitch decks. Here are the most common errors that can derail your funding efforts.

## Too Much Text
One of the biggest mistakes is cramming too much information onto each slide. Investors want to hear you present, not read a novel. Keep text minimal and use visuals to support your narrative.

## Unrealistic Financial Projections
Hockey stick growth projections without solid justification are a red flag. Be realistic about your growth potential and back up your numbers with market research and validation.

## Ignoring the Competition
Claiming you have no competition shows a lack of market understanding. Every product has alternatives, even if indirect. Acknowledge competitors and clearly articulate your advantages.

## Weak Problem Definition
If investors don't understand or relate to the problem you're solving, they won't invest. Make the problem tangible and urgent.

## Poor Team Presentation
Investors invest in people as much as ideas. Failing to showcase your team's relevant experience and expertise can be fatal to your funding chances.

## No Clear Ask
Being vague about how much funding you need and how you'll use it shows poor planning. Be specific about your funding requirements and use of funds.

## Lack of Traction
Not showing evidence that your solution works or that there's market demand makes it hard for investors to believe in your potential.

Avoiding these common mistakes can significantly improve your chances of securing the funding your startup needs to grow.`,
      date: "2024-12-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 4,
      title: "The Psychology of Investor Decision Making",
      excerpt: "Understanding how investors think and make decisions can dramatically improve your pitch success rate.",
      content: `Understanding the psychology behind investor decision-making can give you a significant advantage when presenting your startup. Investors are human, and their decisions are influenced by both rational analysis and emotional factors.

## The Power of First Impressions
You have less than 30 seconds to capture an investor's attention. Your opening slide and first few words set the tone for the entire presentation. Make them count.

## Cognitive Biases in Investment Decisions
Investors are subject to various cognitive biases, including confirmation bias, anchoring bias, and the halo effect. Understanding these can help you frame your presentation more effectively.

## Building Trust and Credibility
Investors need to trust you before they'll invest in your company. Demonstrate credibility through team credentials, customer validation, and transparent communication about challenges.

## The Role of Storytelling
Humans are wired for stories. A compelling narrative about your startup's journey, the problem you're solving, and your vision for the future can be more persuasive than data alone.

## Creating Urgency Without Pressure
Investors need to feel that this is an opportunity they can't afford to miss, but applying too much pressure can backfire. Create genuine urgency through market timing and competitive advantages.

## The Follow-up Factor
Most investment decisions aren't made in the room. Design your pitch to be memorable and provide clear next steps for continued engagement.

By understanding these psychological factors, you can craft a pitch that not only informs but also persuades and motivates investors to take action.`,
      date: "2024-12-08",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 5,
      title: "Building a Compelling Business Model Slide",
      excerpt: "Your business model slide can make or break your pitch. Learn how to clearly communicate how your startup will make money and scale effectively.",
      content: `The business model slide is often the most scrutinized part of your pitch deck. Investors need to understand exactly how your company will generate revenue and achieve profitability.

## Revenue Streams
Clearly identify all your potential revenue streams. Whether it's subscriptions, one-time purchases, advertising, or transaction fees, be specific about how money flows into your business.

## Pricing Strategy
Explain your pricing model and the reasoning behind it. Show that you've researched competitor pricing and understand your customer's willingness to pay.

## Unit Economics
Break down the fundamental economics of your business on a per-customer or per-transaction basis. Include customer acquisition cost (CAC), lifetime value (LTV), and contribution margins.

## Scalability Factors
Demonstrate how your business model becomes more profitable as you scale. Show economies of scale, network effects, or other factors that improve margins over time.

## Market Validation
Provide evidence that customers are willing to pay for your solution at your proposed price point. This could include pre-orders, pilot customers, or market research.

## Path to Profitability
Clearly show when and how your company will become profitable. Include assumptions about growth rates, cost structure, and investment requirements.

A well-crafted business model slide demonstrates that you have a clear path to building a sustainable, profitable business that can generate returns for investors.`,
      date: "2024-12-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 6,
      title: "Storytelling Techniques for Pitch Decks",
      excerpt: "Master the art of storytelling in your pitch deck. Learn how to create an emotional connection with investors while presenting hard facts and data.",
      content: `Great pitch decks don't just present information—they tell a compelling story that engages investors emotionally while delivering the facts they need to make investment decisions.

## The Hero's Journey Framework
Structure your pitch like a classic story: your customers are the heroes facing a challenge (the problem), your product is the guide that helps them overcome it (the solution), and success metrics show the transformation (the results).

## Opening with Impact
Start with a hook that immediately draws investors into your story. This could be a surprising statistic, a personal anecdote, or a compelling vision of the future you're creating.

## Building Emotional Connection
While data is important, emotions drive decisions. Help investors understand the human impact of the problem you're solving and the transformation your solution enables.

## The Problem-Solution Narrative
Create a clear narrative arc that flows naturally from problem identification through solution development to market success. Each slide should build on the previous one.

## Using Data to Support the Story
Weave data and metrics throughout your narrative to support your claims. The key is to use data to enhance your story, not replace it.

## Creating Memorable Moments
Include specific details, customer stories, or demonstrations that make your presentation memorable. Investors see many pitches—you need yours to stick.

## Ending with Vision
Conclude with a compelling vision of the future that your company is working to create. This should inspire investors to want to be part of your journey.

Master storytelling can transform a good pitch deck into an unforgettable presentation that motivates investors to act.`,
      date: "2024-12-03",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      author: "Editorial Team"
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id || ''));

  useEffect(() => {
    if (!currentPost) {
      navigate('/blogs');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, [currentPost, navigate]);

  if (!currentPost) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="py-6">
            <Button
              onClick={() => navigate('/blogs')}
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 p-2"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Articles
            </Button>
          </div>

          <article ref={contentRef} className="pb-16">
            {/* Article Header */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {currentPost.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <User size={14} />
                  <span>{currentPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{new Date(currentPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>

              {/* Hero Image - Smaller and cleaner */}
              <div className="rounded-lg overflow-hidden shadow-sm mb-8">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>

              {/* Excerpt */}
              <div className="text-lg text-slate-700 leading-relaxed mb-8 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                {currentPost.excerpt}
              </div>
            </header>

            {/* Article Content - Clean Typography */}
            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-800 leading-relaxed">
                {currentPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-xl md:text-2xl font-semibold text-slate-900 mt-8 mb-4 border-b border-slate-200 pb-2">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-base leading-7 text-slate-700">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Article Footer - Clean CTA */}
            <footer className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Ready to Create Your Perfect Pitch Deck?
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Join thousands of entrepreneurs who have successfully raised funding with our platform.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium transition-all duration-200"
                >
                  Get Started Today
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
