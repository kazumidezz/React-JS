function App() {
    return (
      <Router>
        <div className="bg-gray-50 min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/teyvat" element={<Teyvat />} />  
            <Route path="/about" element={<About />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }