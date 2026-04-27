// src/pages/SafariDetail.jsx
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { safaris } from '../data';

export default function SafariDetail() {
  const { id } = useParams();
  const safari = safaris.find(s => s.id === id);

  if (!safari) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center flex-col gap-6">
        <h1 className="text-3xl font-serif text-black">Safari Not Found</h1>
        <Link to="/safaris" className="text-sm tracking-widest uppercase border-b border-black pb-1 text-black">View All Safaris</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-white min-h-screen text-[#1a1a1a] pb-24">
        
        {/* Detail Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh]">
          <img src={safari.coverUrl} alt={safari.title} className="w-full h-full object-cover " />
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">{safari.heroTitle || safari.title}</h1>
            <p className="text-lg text-gray-600 whitespace-pre-line leading-relaxed font-light">
              {safari.subtitle}
            </p>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-20 whitespace-pre-line">
            {safari.intro}
          </div>

          {/* Is it for you? */}
          {safari.isForYou && (
            <div className="mb-20">
              <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Is {safari.title} For You?</h2>
              <div className="space-y-8">
                {safari.isForYou.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-serif text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {safari.highlights && (
            <div className="mb-20 bg-[#f9f9f9] p-8 md:p-12 rounded-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">{safari.title} Highlights</h2>
              <div className="space-y-8">
                {safari.highlights.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-serif text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Where We Stay */}
          {safari.whereWeStay && (
            <div className="mb-20">
              <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Where We Stay</h2>
              <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {safari.whereWeStay}
              </div>
            </div>
          )}

          {/* Dates & Bookings Box */}
          {(safari.datesAndCosts || safari.howToBook) && (
            <div className="grid md:grid-cols-2 gap-12 mb-20 bg-[#454a4f] text-white p-8 md:p-12 rounded-sm">
              <div>
                <h2 className="text-2xl font-serif mb-6">Dates and Costs</h2>
                <div className="text-gray-300 font-light leading-relaxed whitespace-pre-line mb-8">
                  {safari.datesAndCosts}
                </div>
                <h3 className="text-lg font-serif mb-4">Financial Protection</h3>
                <div className="text-gray-300 font-light leading-relaxed whitespace-pre-line text-sm">
                  {safari.financialProtection}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif mb-6">How Do I Book?</h2>
                <div className="text-gray-300 font-light leading-relaxed whitespace-pre-line mb-8">
                  {safari.howToBook}
                </div>
                <button className="bg-white text-black text-sm tracking-widest uppercase font-medium py-3 px-8 rounded-sm hover:bg-gray-200 transition-colors">
                  Contact To Book
                </button>
              </div>
            </div>
          )}

          {/* Inclusions / Exclusions */}
          {(safari.included || safari.notIncluded) && (
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-6">What’s Included</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                  {safari.included?.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-6">What’s Not Included</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light mb-8">
                  {safari.notIncluded?.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Options at Extra Cost</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                  {safari.optionsCost?.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          )}

          {/* Itinerary */}
          {safari.itinerary && (
            <div className="mb-20">
              <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">{safari.title} Itinerary</h2>
              <div className="space-y-6">
                {safari.itinerary.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                    <span className="font-serif text-gray-900 font-semibold mr-2">{item.day}:</span>
                    <span className="text-gray-600 font-light leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guides Biographies */}
          {safari.guides && (
            <div className="border-t border-gray-300 pt-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Your Safari Guides: Biographies</h2>
              <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {safari.guides}
              </div>
            </div>
          )}

          <div className="mt-20 text-center">
            <Link to="/safaris" className="text-xs tracking-[0.2em] uppercase border-b border-gray-400 pb-1 hover:text-black hover:border-black transition-all">
              ← Back to All Safaris
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}