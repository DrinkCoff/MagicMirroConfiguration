/* global Module */

/* MagicMirror²
 * Module: QuoteCatalog
 *
 * Author: Sally Park
 * Version: v1.0 - February 2018
 * MIT Licensed.
 */


Module.register("MagicMirror-QuoteCatalog",{

    // Module config defaults.
    defaults: {
        updateInterval: 60,    // How often a new quote gets displayed.
        fadeSpeed: 5,           // How fast to fade out and back in when changing quotes.
        quotes: {
            quotes : [
				// ====================
				// Love Quotes
				// ====================
				// "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
				// "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
				// "Of all forms of caution, caution in love is perhaps the most fatal to true happiness.",
				// "Loved you yesterday, love you still, always have, always will.",
				// "To love well is the task in all meaningful relationships, not just romantic bonds.",
				// "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
				// "Love takes off the masks we fear we cannot live without and know we cannot live within.",
				// "All’s fair in love and cricket.",
				// "We loved with a love that was more than love.",
				// "Love isn’t something you find. Love is something that finds you.",
				// "Love is a juice with many tastes. Some bitter, others sweet. A wine which has few vineyards.",
				// "The practice of love offers no place of safety. We risk loss, hurt, pain. We risk being acted upon by forces outside our control.",
				// "One is loved because one is loved. No reason is needed for loving.",
				// "Love is shown more in deeds than in words.",
				// "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
				// "Love is that condition in which the happiness of another person is essential to your own.",
				// "And now these three remain: faith, hope and love. But the greatest of these is love.",
				// "I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.",
				// "Love is like the wind, you can't see it but you can feel it.",
				
				// ====================
				// Courage
				// ====================
				    	
				// "True courage is not the brutal force of vulgar heroes, but the firm resolve of virtue and reason. ~ Alfred North Whitehead",
				// "Courage is the first of human qualities because it is the quality which guarantees the others. ~ Aristotle",
				// "Hire sales people who are really smart problem solvers, but lack courage, hunger and competitiveness, and your company will go out of business. ~Ben Horowitz",
				// "Courage is fire, and bullying is smoke. ~ .enjamin Disraeli",
				// "How few there are who have courage enough to own their faults, or resolution enough to mend them. ~Benjamin Franklin",
				// "Courage is contagious. When a brave man takes a stand, the spines of others are often stiffened. ~ Billy Graham",
				// "Mistakes are always forgivable, if one has the courage to admit them. ~ Bruce Lee",
				// "I beg you take courage; the brave soul can mend even disaster. ~ Catherine the Great",
				// "Is he alone who has courage on his right hand and faith on his left hand? ~ Charles Lindbergh",
				// "Failure is unimportant. It takes courage to make a fool of yourself. ~ Charlie Chaplin",
				// "God grant me the courage not to give up what I think is right even though I think it is hopeless. ~ Chester W Nimitz",
				// "The courage of the poet is to keep ajar the door that leads into madness. ~ Christopher Morley",
				// "Faced with what is right, to leave it undone shows a lack of courage. ~ Confucius",
				// "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. ~ Dale Carnegie",
				// "The courage to imagine the otherwise is our greatest resource, adding color and suspense to all our life. ~ Daniel J Boorstin",
				// "Courage is a special kind of knowledgethe knowledge of how to fear what ought to be feared and how not to fear what ought not to be feared. ~ David Ben-Gurion",
				// "There's only one requirement of any of us, and that is to be courageous. Because courage, as you might know, defines all other human behavior. ~ David Letterman",
				// "Nothing gives us courage more readily than the desire to avoid looking like a damn fool. ~ Dean Koontz",
				// "All you need is the plan, the road map, and the courage to press on to your destination. ~ Earl Nightingale",
				// "You have to accept whatever comes and the only important thing is that you meet it with courage and with the best that you have to give. ~ Eleanor Roosevelt",
				// "Either life entails courage, or it ceases to be life. ~ EM Forster",
				// "Creativity requires the courage to let go of certainties. ~ Erich Fromm",
				// "It takes a lot of courage to show your dreams to someone else. ~ Erma Bombeck",
				// "Money lost, little lost. Honour lost, much lost. Pluck lost, all lost. ~ EW Hornung",
				// "It is only necessary to have courage, for strength without self-confidence is useless. ~ Giacomo Casanova",
				// "Courage is almost a contradiction in terms. It means a strong desire to live taking the form of readiness to die. ~ Gilbert K Chesterton",
				// "The paradox of courage is that a man must be a little careless of his life even in order to keep it. ~ Gilbert K Chesterton",
				// "America was not built on fear. America was built on courage, on imagination and an unbeatable determination to do the job at hand. ~ Harry S Truman",
				// "People with courage and character always seem sinister to the rest. ~ Hermann Hesse",
				// "It is courage, courage, courage, that raises the blood of life to crimson splendor. Live bravely and present a brave front to adversity. ~ Horace",
				// "Never give up. Keep trying and pushing and struggling, even if you don't know what your goal is or why you would want to achieve it. ~ Jack Handey",
				// "Conscience is the root of all true courage; if a man would be brave let him obey his conscience. ~ James Freeman Clarke",
				// "My definition of courage is never letting anyone define you. ~ Jenna Jameson",
				// "The opposite for courage is not cowardice, it is conformity. Even a dead fish can go with the flow. ~ Jim Hightower",
				// "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. ~ JK Rowling",
				// "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air. ~ John Quincy Adams",
				// "Courage is being scared to death and saddling up anyway. ~ John Wayne",
				// "Success is never final, failure is never fatal. It's courage that counts. ~ John Wooden",
				// "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality. ~ Jonas Salk",
				// "Never be discouraged. If I were sunk in the lowest pits of Nova Scotia, with the Rocky Mountains piled on me, I would hang on, exercise faith, and keep up good courage, and I would come out on top. ~ Joseph Smith, Jr.",
				// "Courage is found in unlikely places. ~ JRR Tolkien",
				// "My courage and my bravery at a young age was the thing I was bullied for, a kind of 'Who do you think you are?' ~ Lady Gaga",
				// "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. ~ Lao Tzu",
				// "A lot of people do not muster the courage to live their dreams because they are afraid to die. ~ Les Brown",
				// "Those who won our independence believed liberty to be the secret of happiness and courage to be the secret of liberty. ~ Louis D Brandeis",
				// "With enough courage, you can do without a reputation. ~ Margaret Mitchell",
				// "Courage! I have shown it for years; think you I shall lose it at the moment when my sufferings are to end? ~ Marie Antoinette",
				// "Courage is resistance to fear, mastery of fear, not absence of fear. ~ Mark Twain",
				// "We must build dikes of courage to hold back the flood of fear. ~ Martin Luther King, Jr.",
				// "Without courage, we cannot practice any other virtue with consistency. We can't be kind, true, merciful, generous, or honest. ~ Maya Angelou",
				// "A team is where a boy can prove his courage on his own. A gang is where a coward goes to hide. ~ Mickey Mantle",
				// "He who loses wealth loses much; he who loses a friend loses more; but he that loses his courage loses all. ~ Miguel de Cervantes",
				// "He who is not courageous enough to take risks will accomplish nothing in life. ~ Muhammad Ali",
				// "It requires more courage to suffer than to die. ~ Napoleon Bonaparte",
				// "Courage is not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ~ Nelson Mandela",
				// "Have the courage to act instead of react. ~ Oliver Wendell Holmes",
				// "Courage conquers all thingsit even gives strength to the body. ~ Ovid",
				// "It takes courage for a person to listen to his own goodness and act on it. ~ Pablo Casals",
				// "Freedom is the sure possession of those alone who have the courage to defend it. ~ Pericles",
				// "Courage consists not in hazarding without fear; but being resolutely minded in a just cause. ~ Plutarch",
				// "Every man has his own courage, and is betrayed because he seeks in himself the courage of other persons. ~ Ralph Waldo Emerson",
				// "Give us courage and gaiety and the quiet mind, spare to us our friends, soften to us our enemies. ~ Robert Louis Stevenson",
				// "There are no easy answers, but there are simple answers. We must have the courage to do what we know is morally right. ~ Ronald Reagan",
				// "Courage is very important. Like a muscle, it is strengthened by use. ~ Ruth Gordon",
				// "He that fails in his endeavors after wealth or power will not long retain either honesty or courage. ~ Samuel Johnson",
				// "We've let the blade of our innocence dull over time, and it's only in innocence that you find any kind of magic, any kind of courage. ~ Sean Penn",
				// "Pugnacity is a form of courage, but a very bad form. ~ Sinclair Lewis",
				// "He is a man of courage who does not run away, but remains at his post and fights against the enemy. ~ Socrates",
				// "Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ~ Steve Jobs",
				// "In all realms of life it takes courage to stretch your limits, express your power, and fulfill your potential. ~ Suze Orman",
				// "It is only through labor and painful effort, by grim energy and resolute courage, that we move on to better things. ~ Theodore Roosevelt",
				// "The principal act of courage is to endure and withstand dangers doggedly rather than to attack them. ~ Thomas Aquinas",
				// "Real courage is knowing what faces you and knowing how to face it. ~ Timothy Dalton",
				// "Nothing gives a fearful man more courage than another's fear. ~ Umberto Eco",
				// "Have courage for the great sorrows of life and patience for the small ones; and when you have laboriously accomplished your daily task, go to sleep in peace. ~ Victor Hugo",
				// "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen. ~ Winston Churchill",
				// "Courage is on display every day, and only the courageous wring the most out of life. ~ Zig Ziglar",
				
				// ====================
                // Default Quotes
				// ====================
				// "How you make others feel about themselves says a lot about you. ~ Unknown",
                // "Please don't expect me to always be good and kind and loving. There are times when I will be cold and thoughtless and hard to understand. ~ Sylvia Plath",
                // "If you inherently long for something, become it first. If you want gardens, become the gardener. If you want love, embody love. If you want mental stimulation, change the conversation. If you want peace, exude calmness. If you want to fill your world with artists, begin to paint. If you want to be valued, respect your own time. If you want to live ecstatically, find the ecstasy within yourself. This is how to draw it in, day by day, inch by inch. ~ Victoria Erickson",
                // "It's a lot easier to be angry at someone than it is to tell them you're hurt. ~ Tom Gates",
                // "Loneliness is a sign you are in desperate need of yourself. ~ Rupi Kaur",
                // "If it doesn't challenge you, it won't change you. ~ Karen Civil",
                // "People may not tell you how they feel about you, but they always show you. Pay attention. ~ Keri Hilson",
                // "No amount of guilt can change the past, and no amount of worrying can change the future. Go easy on yourself. ~ Umar Ibn Al-Khattaab",
                // "It just occurred to me that many people are actually afraid to heal because their entire identity is centered around the trauma they've experienced. They have no idea who they are outside of trauma and that unknown can be terrifying. ~ Ebonee Davis",
                // "You know, sometimes all you need is twenty seconds of insane courage. Just literally twenty seconds of just embarrassing bravery. And I promise you, something great will come of it. ~ Benjamin Mee",
                // "It's a lot easier to be angry at someone than it is to tell them you're hurt. ~ Tom Gates",
                // "Sometimes I think I have felt everything I'm ever gonna feel. And from here on out, I'm not gonna feel anything new. Just lesser versions of what I've already felt. ~ Her (2013)",
                // "How lucky I am to have something that makes saying goodbye so hard ~ Winnie the Pooh",
                // "It is the time you have wasted for your rose that makes your rose so important. ~ Antoine de Saint-Exupéry, The Little Prince",
                // "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven. ~ John Milton, Paradise Lost",
                // "The way to love someone is to lightly run your finger over that person's soul until you find a crack, and then gently pour your love into that crack. ~ Keith Miller",
                // "I think the reward for conformity is that everyone likes you except yourself. ~ Rita Mae Brown",
                // "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy. ~ Robert Tew",
                // "You do not become good by trying to be good, but by finding the goodness that is already within you, and allowing that goodness to emerge. ~ Eckhart Tolle",
                // "As time goes on, you'll understand. What lasts, lasts; what doesn't, doesn't. Time solves most things. And what time can't solve, you have to solve yourself. ~ Haruki Murakami, Dance Dance Dance",
                // "Everybody talks about wanting to change things and help and fix, but ultimately all you can do is fix yourself. And that's a lot. Because if you can fix yourself, it has a ripple effect. ~ Rob Reiner",
                // "No amount of guilt can change the past, and no amount of worrying can change the future. Go easy on yourself. ~ Umar Ibn Al-Khattaab",
                // "Why do you put your self~esteem in the hands of complete strangers? ~ Helena Bonham Carter",
                // "I want to be like water. I want to slip through fingers, but hold up a ship. ~ Michelle Williams",
                // "I want to be around people that do things. I don't want to be around people anymore that judge or talk about what people do. I want to be around people that dream and support and do things. ~ Amy Poehler",
                // "Be confident enough to know that you're original and different from everyone else. Be humble enough to know that that doesn't mean that you're better than anyone else. ~ R.L.",
                // "You shouldn't try to stop everything from happening. Sometimes you're supposed to feel awkward. Sometimes you're supposed to be vulnerable in front of people. Sometimes it's necessary because it's all part of you getting to the next part of yourself, the next day. ~ Cecelia Ahern, The Book of Tomorrow",
                // "If giving leaves you feeling empty, you're giving too much to the wrong person. ~ Maza Dohta",
                // "I myself am made entirely of flaws, stitched together with good intentions. ~ Augusten Burroughs, Magical Thinking",
                // "And then my soul saw you and it kind of went 'Oh there you are. I've been looking for you.' ~ pleasefindthis, I Wrote This For You",
                // "If you only read the books that everyone else is reading, you can only think what everyone else is thinking. ~ Haruki Murakami, Norwegian Wood",
                // "I can bear any pain as long as it has meaning. ~ Haruki Murakami, 1Q84",
                // "If you remember me, then I don't care if everyone else forgets. ~ Haruki Murakami, Kafka on the Shore",
                // "Whenever I look at the ocean, I always want to talk to people, but when I'm talking to people, I always want to look at the ocean. ~ Haruki Murakami, Hear the Wind Sing",
                // "A wound is a place where light enters your soul. ~ Jalal ad-Din Muhammad Balkhi",
                // "You are not a drop in the ocean. You are the entire ocean in a drop. ~ Jalal ad-Din Muhammad Balkhi",
                // "Wherever you are, and whatever you do, be in love. ~ Jalal ad-Din Muhammad Balkhi",
                // "I would like to be known as an intelligent woman, a courageous woman, a loving woman, a woman who teaches by being. ~ Maya Angelou",
                // "I always did something I was a little not ready to do. I think that is how you grow. ~ Marissa Mayer",
                // "Like a wild flower, she spent her days allowing herself to grow. Not many knew of her struggle, but eventually all knew of her light. ~ Niki Rowe",
                // "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ~ Maya Angelou",
                // "You know who’s gonna give you everything? Yourself. ~ Diane Von Furstenberg",
                // "Love is taking a few steps backward maybe even more… to give way to the happiness of the person you love. ~ Winnie the Pooh",
                // "I think we dream so we don’t have to be apart so long. If we’re in each other’s dreams we can be together all the time. ~ A. A. Milne, Winnie the Pooh",
                // "Some people care too much. I think it’s called love. ~ A. A. Milne, Winnie the Pooh",
                // "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you. ~ A. A. Milne, Winnie the Pooh",
                // "A little consideration, a little thought for others, makes all the difference. ~ A. A. Milne, Winnie the Pooh",
                // "Nobody can be uncheered with a balloon. ~ A. A. Milne, Winnie the Pooh",
                // "A day spent with you is my favorite day. So today is my new favorite day. ~ A. A. Milne, Winnie the Pooh",
                // "Why, sometimes I've believed as many as six impossible things before breakfast. ~ Lewis Carroll, Alice in Wonderland",
                // "If everybody minded their own business, the world would go around a great deal faster than it does. ~ Lewis Carroll, Alice in Wonderland",
                // "I can’t go back to yesterday because I was a different person then. ~ Lewis Carroll, Alice in Wonderland",
                // "If you’ll believe in me, I’ll believe in you. Is that a bargain? ~ Lewis Carroll, Alice in Wonderland",
                // "If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear. ~ A.A. Milne, Winnie-the-Pooh",
                // "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period. ~ The Pursuit of Happyness (2006)",
                // "Great men are not born great, they grow great. ~ The Godfather (1972)",
                // "Some people can’t believe in themselves until someone else believes in them first. ~ Good Will Hunting (1997)",
                // "I just wanted you to know there will be a piece of you in me always, and I'm grateful for that. ~ Her (2013)",
                // "I feel like I can be anything with you. ~ Theodore, Her (1997)",
                // "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it. ~ Ferris Bueller’s Day Off (1986)",
                // "You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions. Their answers determined whether they were able to enter or not. ‘Have you found joy in your life?’ ‘Has your life brought joy to others?’ ~ The Bucket List (2007)",
                // "Oh yes, the past can hurt. But you can either run from it, or learn from it. ~ The Lion King (1994)",
                // "So, this is my life. and i want you to know that i am both happy and sad and i’m still trying to figure out how that could be. ~ The Perks of Being a Wallflower (2012)",
                // 	"You don’t need the whole world to love you. Just a few good people. ~ The Greatest Showman (2017)",
				// "दीर्घसूत्री विनश्यति।  ~ Prolonged laziness is the cause of destruction",
				// "महाजनो येन गतः स पन्थाः। ~ Do what the great men do.",
				// "धर्मस्य त्वरिता गति। ~ The pace of religion is fast",
				// "यत भावो-तत भवति। ~ You become what you believe",
				// "मितं च सारं च वचो ही वाग्मिता।  ~ Concise and firm-These are feature of eloquent speech.",
				// "मा त्यज।  ~ Do not give up.",
				// "वसुंधैव कुटुम्वकम्।  ~ The whole earth is a family.",
				// "निष्ठा धृतिः सत्यम्।  ~ Dedication, steadfastness, and Truth.",
				// "स्वयमेव मृगेन्द्रता।  ~ The lion is king by his own self.",
				// "अन्नं न निन्द्यात्।  ~ Don't dispraise/disrespect food.",
				// "अहम् ब्रह्मास्मि।  ~ I am the infinite reality.",
				// "योगं कर्मसु कौशलम्। ~ Yoga is excellence in action.",
				// "परोपकारार्थं इदं शरीरं।  ~ This life is to help others.",
				// "तत्वमसि।  ~ That essence are you.",
				// "न कश्चित् शाश्वतम्।  ~ Nothing is permanent.",
				// "विद्याधनम् सर्वधनात् प्रधानम्।  ~ Education is the supreme wealth. ",
				// "जननि जन्मभूमिश्च स्वर्गादपि गरीयसी।  ~ Mother and the motherland are greater than heaven.",
				// "अभ्यासादेव कौशलम्।  ~ It is work that makes a man workman",
				// "कष्टः खलु पराश्रयः।  ~ Dependence is indeed painful.",
				
				// Dadaji
				"Neither the military might nor the economic and technological development makes a nation great. It is made great by it's citizens with Self Respect and Integrity ingrained in their lives.  ~ Pandurang Shastri Athavale",
				"Love - Truth-seeking The strength of Truth lies in Love and the strength of Love lies in Truth.  ~ Pandurang Shastri Athavale",
				"Devotion does not mean only Chanting praise and singing glory of God, nor fasting and offerings made to God. Devotion is a specific attitude towards life and existence.  ~ Pandurang Shastri Athavale",
				"Fearlessness is a result of faith in oneself and faith in God.  ~ Pandurang Shastri Athavale",
				"Action not backed by knowledge and knowledge not translatable into action, both can not stand the test of time.  ~ Pandurang Shastri Athavale",
				"Universal brotherhood under the fatherhood of God.  ~ Pandurang Shastri Athavale",
				"Only he who accepts clashes and conflicts in life, loves life.  ~ Pandurang Shastri Athavale",
				"Devotion (Bhakti) includes Sentimental Devotion (Bhav Bhakti) and Devotion through action (Kruti Bhakti).  ~ Pandurang Shastri Athavale",
				"Devotion is the realization that wealth, education and power are God given gifts and not the endowments of fate.  ~ Pandurang Shastri Athavale",
				"An enlightened society is one where all people - the rich and the poor, the literate and the illiterate, the black and the white, men and women - live happily as children of the same Lord. Thus experiencing the brotherhood of men under the fatherhood of God.  ~ Pandurang Shastri Athavale",
				"Knowledge, Action and Devotion are complementary to each other.  ~ Pandurang Shastri Athavale",
				"The most Superior amongst the colors in the universe is the color of Devotion.  ~ Pandurang Shastri Athavale",
				"To achieve progress and development it is necessary to bring about co-ordination between liberty and security through Devotion.  ~ Pandurang Shastri Athavale",
				"It is essential that in a society, divine thoughts and power should co-exist. Simple Faith, not backed by material forces, is weak and Strength without touch of Divinity is monstrous.  ~ Pandurang Shastri Athavale",
				"Bhakti is a Social Force.  ~ Pandurang Shastri Athavale",
				"That which takes us nearer to the Almighty (Sat) is truth. Truth needs no external support to sustain or promote itself.  ~ Pandurang Shastri Athavale",
				"એક પ્રબુદ્ધ સમાજ એ છે જ્યાં બધા લોકો - અમીર અને ગરીબ, સાક્ષર અને અભણ, કાળા અને સફેદ, સ્ત્રી અને પુરૂષ - એક જ ભગવાનના બાળકો તરીકે આનંદથી જીવે છે.  આમ ભગવાનના પિતૃત્વ હેઠળ પુરુષોના ભાઈચારાનો અનુભવ કરવો.  ~ દાદાજી", 
				"જે આપણને સર્વશક્તિમાન ની નજીક લઈ જાય છે તે સત્ય છે.  સત્યને પોતાની જાતને ટકાવી રાખવા કે આગળ વધારવા માટે કોઈ બાહ્ય આધારની જરૂર નથી.  ~ દાદાજી",
				"સમાજમાં દૈવી વિચારો અને શક્તિ સહઅસ્તિત્વ હોવા જોઈએ તે જરૂરી છે.  સાદી શ્રદ્ધા, ભૌતિક શક્તિઓ દ્વારા સમર્થિત નથી, તે નબળી છે અને દૈવીત્વના સ્પર્શ વિનાની શક્તિ ભયંકર છે.  ~ દાદાજી",
				""
            ]
        },
    },


    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        this.lastQuoteIndex = -1;

        // Schedule update timer.
        var self = this;
        setInterval(function() {
            self.updateDom(self.config.fadeSpeed * 1000);
        }, this.config.updateInterval * 1000);
    },

    /* randomIndex(quotes)
     * Generate a random index for a list of quotes.
     *
     * argument quotes Array<String> - Array with quotes.
     *
     * return Number - Random index.
     */
    randomIndex: function(quotes) {
        if (quotes.length === 1) {
            return 0;
        }

        var generate = function() {
            return Math.floor(Math.random() * quotes.length);
        };

        var quoteIndex = generate();

        while (quoteIndex === this.lastQuoteIndex) {
            quoteIndex = generate();
        }

        this.lastQuoteIndex = quoteIndex;

        return quoteIndex;
    },

    /* quoteArray()
     * Retrieve an array of quotes from the catalog.
     *
     * return quotes Array<String> - Array with quotes from the catalog.
     */
    quoteArray: function() {
        return this.config.quotes[Object.keys(this.config.quotes)[Math.floor(Math.random() * Object.keys(this.config.quotes).length)]];
    },

    /* randomQuote()
     * Retrieve a random quote.
     *
     * return quote string - A quote.
     */
    randomQuote: function() {
        var quotes = this.quoteArray();
        var index = this.randomIndex(quotes);
        return quotes[index].split(" ~ ");
    },

    // Override dom generator.
    getDom: function() {
        var quoteText = this.randomQuote();

        var qMsg = quoteText[0];
        var qAuthor = quoteText[1];

        var wrapper = document.createElement("div");

        var quote = document.createElement("div");
        quote.className = "bright small light";
        quote.style.textAlign = 'justify';
        quote.style.margin = '0 auto';
        quote.style.maxWidth = '400px';
        quote.innerHTML = qMsg;

        wrapper.appendChild(quote);

        var author = document.createElement("div");
        author.className = "light small dimmed";
        author.innerHTML = "~ " + qAuthor;

        wrapper.appendChild(author);

        return wrapper;
    }

});