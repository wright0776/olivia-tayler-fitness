import React from 'react'

function About() {
    return (
        <div>
            <h2 className='title'>About</h2>
            <p style={{padding: "0 20px 20px 20px"}}>Website built by <a style={{backgroundColor: "black", color: "white", padding: "2px 10px", textTransform: "uppercase", fontWeight: "600" }} href="http://www.matthewwright.io" target='_blank' rel="noopener noreferrer">Matt Wright</a></p>            
            <h3 style={{padding: "20px"}}>The number 33</h3>
            <p style={{padding: "0 20px 20px 20px"}}>33 is:</p>
            <ul style={{paddingBottom: "40px", lineHeight: "1.5"}}>
                <li>the largest positive integer that cannot be expressed as a sum of different triangular numbers.</li>
                <li>the smallest odd repdigit that is not a prime number.</li>
                <li>the sum of the first four positive factorials.</li>
                <li>the sum of the sum of the divisors of the first 6 positive integers.</li>
                <li>equal to the sum of the squares of the digits of its own square in bases 9, 16 and 31.</li>
                <li>For numbers greater than 1, this is a rare property to have in more than 1 base.</li>
                <li>the smallest integer such that it and the next two integers all have the same number of divisors.</li>
                <li>the first member of the first cluster of three semiprimes (33, 34, 35); the next such cluster is 85, 86, 87.</li>
                <li>the smallest diophantine number which has yet to be represented in the form a³ + b³ + c³, where a, b and c are integers.</li>
                <li>The atomic number of arsenic</li>
                <li>A normal human spine has 33 vertebrae when the bones that form the coccyx are counted individually</li>
                <li>33 is, according to the Newton scale, the temperature at which water boils.</li>
            </ul>
            <h2 className='comingSoon'>MORE COMING SOON!</h2>
        </div>
    )
}

export default About
