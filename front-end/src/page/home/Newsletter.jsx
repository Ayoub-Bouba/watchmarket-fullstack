import React from 'react'

function Newsletter() {
  return (
    <div>
        <section className="newsletter">
            <h3>Stay ahead of time</h3>
            <p>New releases and early access, once a month, no spam.</p>
            <form>
                <input type="email" placeholder='Your email address' required />
                <button>JOIN</button>
            </form>
        </section>
    </div>
  )
}

export default Newsletter