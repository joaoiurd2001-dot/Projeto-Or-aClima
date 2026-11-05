import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, CloudRain, Menu, ShieldCheck, Sparkles, Sun, ThermometerSun, Wind } from 'lucide-react'

const cities = [
  ['São Paulo, SP', '22°', 'Sol entre nuvens', '27%'],
  ['Rio de Janeiro, RJ', '26°', 'Ensolarado', '8%'],
  ['Belo Horizonte, MG', '24°', 'Parcialmente nublado', '16%'],
]

function App() {
  const [city, setCity] = useState('São Paulo, SP')
  const [sent, setSent] = useState(false)

  function requestQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <nav className="nav container" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="OrçaClima, início"><span>o</span>rçaclima</a>
        <div className="nav-links"><a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href="#sobre">Sobre nós</a></div>
        <a className="nav-cta" href="#orcamento">Solicitar orçamento <ArrowRight size={16}/></a>
        <button className="menu" aria-label="Abrir menu"><Menu size={23}/></button>
      </nav>

      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15}/> Decisões melhores começam com o clima</p>
            <h1>Planeje com <em>clareza.</em><br />Execute com confiança.</h1>
            <p className="hero-description">Previsões inteligentes e informações climáticas precisas para tornar cada orçamento mais seguro.</p>
            <div className="hero-actions"><a className="button primary" href="#orcamento">Começar agora <ArrowRight size={18}/></a><a className="text-link" href="#como-funciona">Conhecer a plataforma <span>↗</span></a></div>
            <div className="trust"><div className="avatars"><b>ML</b><b>RS</b><b>AC</b><b>+</b></div><span>Mais de <strong>1.200 profissionais</strong><br/>planejam melhor com a OrçaClima</span></div>
          </div>
          <div className="weather-card" aria-label="Condições climáticas em São Paulo">
            <div className="sun-orb"><Sun size={58} strokeWidth={1.3}/></div>
            <div className="card-top"><span>Agora em</span><button>{city} <ChevronDown size={15}/></button></div>
            <div className="temperature">22<span>°</span></div>
            <p className="condition">Sol entre nuvens</p>
            <div className="weather-details"><span><Wind size={17}/> 12 km/h</span><span><CloudRain size={17}/> 27%</span><span><ThermometerSun size={17}/> Sens. 23°</span></div>
            <div className="forecast"><small>PRÓXIMAS HORAS</small><div>{[['12h','23°','☀'],['13h','24°','☀'],['14h','24°','⛅'],['15h','23°','⛅'],['16h','22°','☁']].map(([time, temp, icon]) => <div className="hour" key={time}><span>{time}</span><b>{icon}</b><strong>{temp}</strong></div>)}</div></div>
          </div>
        </div>
        <div className="hero-line" />
      </section>

      <section className="features container" id="recursos">
        <p className="section-kicker">INFORMAÇÃO QUE GERA RESULTADO</p>
        <div className="section-heading"><h2>O clima não precisa ser<br/>uma <em>incerteza.</em></h2><p>Transformamos dados complexos em respostas simples para você planejar, proteger sua equipe e entregar no prazo.</p></div>
        <div className="feature-grid">
          <article><div className="icon-box"><CloudRain/></div><h3>Previsões precisas</h3><p>Antecipe mudanças e tome decisões com dados atualizados para cada local.</p><a href="#orcamento">Saiba mais <ArrowRight size={15}/></a></article>
          <article><div className="icon-box amber"><ShieldCheck/></div><h3>Menos riscos</h3><p>Identifique janelas ideais de trabalho e reduza imprevistos no orçamento.</p><a href="#orcamento">Saiba mais <ArrowRight size={15}/></a></article>
          <article><div className="icon-box blue"><Sparkles/></div><h3>Planejamento simples</h3><p>Tudo o que importa em um painel claro, acessível onde você estiver.</p><a href="#orcamento">Saiba mais <ArrowRight size={15}/></a></article>
        </div>
      </section>

      <section className="dashboard-section" id="como-funciona"><div className="container dashboard-wrap"><div><p className="section-kicker">UMA VISÃO COMPLETA</p><h2>Seu próximo passo,<br/>guiado pelo <em>tempo.</em></h2><p className="dash-copy">Acompanhe as condições que impactam sua operação e encontre o melhor momento para agir.</p><ul><li><Check size={17}/> Alertas personalizados para sua região</li><li><Check size={17}/> Histórico e tendências climáticas</li><li><Check size={17}/> Dados prontos para sua equipe</li></ul></div><div className="city-panel"><div className="panel-header"><span>Visão geral</span><button>Esta semana <ChevronDown size={14}/></button></div>{cities.map(([name, temp, condition, rain], index) => <div className="city-row" key={name}><div className={'weather-dot dot-'+index}>{index === 1 ? <Sun size={18}/> : <CloudRain size={18}/>}</div><div><strong>{name}</strong><small>{condition}</small></div><b>{temp}</b><span className="rain">☂ {rain}</span></div>)}<div className="chart"><span>Índice de condições favoráveis</span><div className="bars">{[36,52,45,70,82,62,88,76,94,90,72,68].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div><div className="days"><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span></div></div></div></div></section>

      <section className="quote-section" id="orcamento"><div className="container quote-card"><div><p className="section-kicker">COMECE HOJE</p><h2>Seu planejamento merece<br/><em>previsibilidade.</em></h2><p>Conte o que você precisa. Nossa equipe encontra a melhor solução para sua operação.</p><div className="quote-note"><ShieldCheck size={19}/><span>Seus dados estão seguros e protegidos.</span></div></div><form onSubmit={requestQuote}>{sent ? <div className="success"><Check size={28}/><h3>Recebemos seu pedido!</h3><p>Em breve nossa equipe entra em contato.</p></div> : <><label>Seu nome<input required name="name" placeholder="Como podemos te chamar?" /></label><label>E-mail profissional<input required type="email" name="email" placeholder="voce@empresa.com.br" /></label><label>Onde sua operação acontece?<select value={city} onChange={(event) => setCity(event.target.value)}>{cities.map(([name]) => <option key={name}>{name}</option>)}</select></label><button className="button primary submit" type="submit">Solicitar orçamento <ArrowRight size={18}/></button></>}</form></div></section>

      <footer id="sobre"><div className="container footer-inner"><a className="brand" href="#inicio"><span>o</span>rçaclima</a><p>Clareza para quem faz acontecer.</p><div><a href="#inicio">Privacidade</a><a href="#inicio">Termos de uso</a></div><small>© 2026 OrçaClima. Todos os direitos reservados.</small></div></footer>
    </main>
  )
}

export default App
