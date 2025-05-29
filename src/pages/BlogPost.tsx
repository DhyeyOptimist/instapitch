import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { gsap } from 'gsap';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contentRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Slides Every Pitch Deck Must Have",
      excerpt: "Learn about the fundamental slides that investors expect to see in every successful pitch deck, from problem statement to financial projections.",
      content: `

## The Problem Statement
Start with a clear, compelling problem that your target market faces — something they deeply feel but may not have clearly expressed. This slide should immediately capture attention and create emotional connection, making investors think “Yes, this is a real and urgent pain point that genuinely needs a solution.”

## Your Solution
Present your solution clearly and concisely, making it easy to understand at a glance. Explain how your product or service directly tackles the problem you’ve outlined, showing the connection between need and solution. Highlight the unique value proposition — the specific advantage or innovation that makes your approach different, more effective, or more desirable than existing alternatives.

## Market Opportunity
Show the size of the market you’re targeting with clear numbers that support your opportunity. Use credible data sources to build trust and provide context. Break down the market into Total Addressable Market (TAM) — the full demand for your product, Serviceable Addressable Market (SAM) — the portion you can realistically serve, and Serviceable Obtainable Market (SOM) — the share you expect to capture in the near term. This helps investors gauge both potential and practicality.

## Business Model
Clearly explain how your company will generate revenue and sustain growth over time. Whether it’s through subscriptions, freemium upgrades, one-time purchases, transaction fees, or a mix of models, lay out each stream in a simple, understandable way. Investors need to see not just how you’ll make money, but why your model is scalable, repeatable, and aligned with customer behavior.

## Traction and Validation
Provide evidence that your solution is effective and gaining traction in the real world. This can include metrics like user growth, monthly revenue, engagement rates, strategic partnerships, or powerful customer testimonials. The goal is to build credibility and show that there’s real demand, real users, and real validation behind what you’ve built.

## Financial Projections
Present realistic financial forecasts covering the next 3 to 5 years, giving investors a clear picture of your expected growth. Include revenue projections, operating costs, customer acquisition costs, and other key metrics that matter for your business model. Most importantly, outline your path to profitability — showing when and how your company plans to break even and scale sustainably.

## Competition Analysis
Acknowledge your competition honestly and show that you’ve done your homework on who else is solving this problem. Identify key players in the space and explain how your approach is different — whether through better technology, stronger brand, unique partnerships, or a more focused niche. Demonstrating a clear understanding of the market landscape builds investor confidence in your strategy and execution.

## Team Introduce your founding team and key employees by sharing their backgrounds, skills, and relevant experience. Highlight what each person brings to the table that gives your startup an edge — whether it’s deep industry knowledge, technical expertise, business acumen, or proven success in previous ventures. This helps investors trust that your team can execute the vision and overcome challenges.

## Funding Request
Clearly state the total amount of funding you’re seeking and break down how you plan to use the capital. Be specific about how the money will be allocated across key areas such as product development, marketing, hiring, operations, and scaling. This transparency shows investors that you have a well-thought-out plan for efficiently deploying funds to maximize growth and impact.

## Next Steps
End with clear next steps and a strong call to action. Make it easy for investors to follow up with you.`,
      date: "2025-3-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Startup Presentations",
      excerpt: "Discover how artificial intelligence is transforming the way entrepreneurs create compelling pitch decks and connect with investors.",
      content: `

## Automated Content Generation
AI can assist in creating powerful content for your pitch deck by learning from high-performing presentations and current industry trends. It can help you craft clear problem statements, sharp value propositions, and data-backed market analyses that align with what investors are looking for. This streamlines your storytelling and ensures your message is both persuasive and strategically aligned.

## Design Intelligence
Modern AI tools can intelligently recommend layouts, color palettes, and visual components that elevate the quality and clarity of your presentation. By analyzing design patterns, content structure, and audience behavior, they tailor suggestions to match the tone and goals of your pitch, helping you deliver a more engaging and visually impactful experience.

## Data-Driven Insights
AI can evaluate investor preferences and how presentations typically perform to offer smart recommendations on slide sequence, content prioritization, and optimal timing. By learning what captures attention and maintains engagement, it helps you structure your pitch for maximum clarity and persuasion, making each part of your deck work more effectively.

## Personalization at Scale
With AI, you can quickly tailor your pitch deck to suit different investors or presentation settings without losing the core message’s consistency. It helps adjust tone, highlight relevant points, and tweak visuals based on the audience’s interests, making your pitch more personalized and impactful every time you present.

## Real-time Feedback
Some AI tools offer real-time feedback on your presentation delivery, analyzing factors like your tone, pace, body language, and clarity. This helps you refine and polish your pitch before facing investors, boosting your confidence and ensuring your message comes across clearly and convincingly during the actual meeting.

The future of pitch deck creation is becoming increasingly intelligent, allowing entrepreneurs to focus more on their business strategy while AI handles the optimization of their presentation.`,
      date: "2025-3-3",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 3,
      title: "Common Pitch Deck Mistakes That Kill Funding",
      excerpt: "Avoid these critical errors that cause investors to lose interest in your startup before you even finish your presentation.",
      content: `

## Too Much Text
One of the biggest mistakes founders make is cramming too much information onto each slide. Investors are there to listen to your story, not to read a wall of text or a dense report. Keeping your slides clean with minimal text and using visuals like charts, icons, or images to support your points makes your presentation clearer, more engaging, and easier to follow. This balance helps maintain focus and keeps your audience’s attention where it belongs—on you.

## Unrealistic Financial Projections
Hockey stick growth projections that lack solid evidence are a major red flag for investors. Unrealistic or overly optimistic forecasts can damage your credibility and make investors skeptical. Instead, be honest and grounded about your growth potential, and support your numbers with thorough market research, customer validation, and clear assumptions. This approach builds trust and shows you understand the challenges ahead.

## Ignoring the Competition
Claiming you have no competition signals a lack of deep market understanding and can raise doubts among investors. Every product or service faces alternatives—whether direct competitors or indirect substitutes—that address similar needs. Acknowledging these competitors honestly and clearly explaining what sets you apart demonstrates that you’ve thoroughly analyzed the landscape and have a strategic plan to stand out and succeed despite competition.

## Weak Problem Definition
If investors don’t understand or connect with the problem you’re addressing, they won’t see the value in investing. It’s crucial to make the problem tangible, relatable, and urgent—showing why it matters now and how it impacts real people or businesses. When the problem feels immediate and important, investors are much more likely to engage and back your solution.

## Poor Team Presentation
Investors bet on both the idea and the people behind it. If you fail to showcase your team’s relevant experience, skills, and track record, you risk losing their confidence. Highlighting your team’s strengths and expertise reassures investors that you have the capability and determination to turn your vision into reality, which is often as important as the idea itself.

## No Clear Ask
Being vague about the amount of funding you’re seeking and how you plan to use it signals a lack of preparation and clarity. Investors want to see a detailed breakdown of your funding needs and a clear plan for allocating resources—whether it’s for product development, marketing, hiring, or scaling operations. Specificity demonstrates that you’ve thought through your growth strategy and are ready to deploy funds efficiently to achieve your goals.

## Lack of Traction
Not providing clear evidence that your solution works or that there’s real market demand makes it difficult for investors to trust your potential. Without proof—such as user growth, revenue figures, customer feedback, or partnerships—your pitch may come across as just an idea rather than a validated business. Demonstrating traction and validation builds confidence and shows that your startup is on a path toward success.
Avoiding these common mistakes can significantly improve your chances of securing the funding your startup needs to grow.`,
      date: "2025-3-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 4,
      title: "The Psychology of Investor Decision Making",
      excerpt: "Understanding how investors think and make decisions can dramatically improve your pitch success rate.",
      content: `

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
      date: "2025-3-08",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      author: "Editorial Team"
    },
    {
      id: 5,
      title: "Building a Compelling Business Model Slide",
      excerpt: "Your business model slide can make or break your pitch. Learn how to clearly communicate how your startup will make money and scale effectively.",
      content: `

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
      date: "2025-3-05",
      readTime: "6 min read",
      image: "https://theindianeye.com/wp-content/uploads/2024/03/Hirav-column.jpg",
      author: "Editorial Team"
    },
    {
      id: 6,
      title: "Storytelling Techniques for Pitch Decks",
      excerpt: "Master the art of storytelling in your pitch deck. Learn how to create an emotional connection with investors while presenting hard facts and data.",
      content: `

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
      date: "2025-3-03",
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


  }, [currentPost, navigate]);

  if (!currentPost) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* <Header /> */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="mb-8">
            <Button
              onClick={() => navigate('/blogs')}
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 p-2 rounded-full shadow-none border border-slate-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </div>

          <article ref={contentRef} className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <header className="mb-12 text-center">
              <div className="uppercase tracking-widest text-xs text-blue-600 font-semibold mb-2">Blog</div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                {currentPost.title}
              </h1>
              <div className="text-slate-500 text-lg font-light mb-6 max-w-2xl mx-auto">
                {currentPost.excerpt}
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500 mb-10">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(currentPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{currentPost.readTime}</span>
                </div>

              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 w-full max-w-2xl">
                  <img 
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </header>

            <div className="prose prose-xl prose-slate max-w-none mx-auto border-l-4 border-blue-100 pl-6 bg-white/80 py-6 rounded-xl shadow-sm">
              <div className="space-y-8">
                {currentPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-lg md:text-xl font-light text-slate-800 mt-8 mb-4 first:mt-0">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-lg leading-8 text-slate-700 font-light tracking-wide">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            <footer className="mt-16 pt-8">
              <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-blue-100 rounded-2xl p-10 text-center shadow-md border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  Ready to Create Your Perfect Pitch Deck?
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                  Join thousands of entrepreneurs who have successfully raised funding with our platform.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium rounded-full shadow-lg transition-all duration-200"
                >
                  Get Started Today
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default BlogPost;