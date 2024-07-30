import './voting.css'
const Voting = () => {
    return (
      <section id="voting">
        <h2 className="section-title">Voting in the general election</h2>
        <h3 class="special-note center">
          Exercise your most vital civic power! Vote!
        </h3>
        <h4>
          We leave late enough this year that you likely have enough time to
          pick up an absentee ballot! Visit{" "}
          <a target="_blank" rel="noreferrer" href="https://www.fvap.gov/guide">
            this link
          </a>{" "}
          to learn how to vote absentee this year.
        </h4>
        <p>In previous years, I have been able to show up in person at my county's Board of Elections to fill out my absentee ballot. But you can usually request one to be delivered via mail that you can fill out and return via mail, if you prefer that method.</p>
      </section>
    );
}

export default Voting