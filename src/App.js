import './App.css';
import Header from '../src/components/Header.js'
import Content from '../src/components/Content.js'
import Footer from '../src/components/Footer.js'
import quotes from './data/data.js'

function App() {
  const quotesToBeRendered = quotes.map(quote => {
    return <Content 
      quote={quote.quote}
      author={quote.author} />
  })
  return (
    <>
      <Header />
      <div className='quote-wrapper'>
        {quotesToBeRendered}
      </div>
      <Footer />
    </>
  )
}

export default App;
