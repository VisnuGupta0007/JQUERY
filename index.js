$(document).ready(
    () => {
        // Quotes Containt
        const quotes = [
            {
                quote: "Everything is hard before it is easy.",
                author: "Johann Wolfgang von Goethe"
            }, {
                quote: "Don't cry because it's over. Smile because it happened.",
                author: "Dr. Seuss"

            }, {
                quote: "Life's not fair; why should I be?",
                author: "Margaret Atwood"
            }, {
                quote: "Life is a journey, not a destination.",
                author: "Ralph Waldo Emerson"
            }, {
                quote: "To thine own self be true.",
                author: "William Shakespeare"
            }, {
                quote: "Straight roads do not make skillful drivers.",
                author: "Paula Coelho"
            }, {
                quote: "One day I will find the right words, and they will be simple.",
                author: "Jack Kerouac, The Dharma Bums"
            }, {
                quote: "You can make anything by writing.",
                author: "C.S. Lewis"
            }, {
                quote: "As a writer, you should not judge, you should understand.",
                author: "Ernest Hemingway"
            }, {
                quote: "Writing is its own reward.",
                author: "Henry Miller"
            }
        ]
        // generate to Random Quote
        function randomQuote() {
            const getQuote = Math.floor(Math.random() * quotes.length)
            return quotes[getQuote];
        }
        /// DOM manupulation for get Quotes..
        $(".new-Quote").click(
            function(){
                const getRandom = randomQuote()
                console.log(getRandom)
                $(".quote-text").fadeOut(300,function(){
                    $(this).text(`"${getRandom.quote}"`).fadeIn(300)
                })
            } )
            $(".new-Quote").click(
                function(){
                    const getRandom = randomQuote()
                    console.log(getRandom)
                    $(".quote-author").fadeOut(300,function(){
                        $(this).text(`"-${getRandom.author}"`).fadeIn(300)
                    })
                } )
                //// error
            const tweetUrl =`http://twitter.com/intent/tweet?text= "${randomQuote.quote} - "${randomQuote.author}"`
            $(".tweet-quote").attr('href',tweetUrl)
            
            
    }
)




// *math.floor:- it will convert decimal number to intizar number..
// example : 5.3 : output : 5.. 2nd Example : 5.9 output: 5...

/// *math.random() :- it will given random decimal number.. it will under in 0-1 number..
// { if we will put the number Then, it will given under in that value}
// Example:- math.random()*5 : in this time it will given value under in 0-5.. 