
document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener("click",function(){
    const signupForm = document.getElementById('signupform')
    const loginForm = document.getElementById('loginform')
    const signupBtn = document.querySelector('.signup-btn')
    const loginBtn = document.querySelector('.login-btn')
    const closeBtn = document.querySelectorAll('.close-btn')
    
    signupBtn.addEventListener('click',function Signup(){
        signupForm.classList.add('show');
    })
    
    loginBtn.addEventListener('click',function Login(){
        loginForm.classList.add('show');
    })
    
    //-- signup
    
    document.querySelector('#signSubmit').addEventListener('click',
        function signup(e){
        e.preventDefault();

        const username = document.getElementById('userName-signup').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password-signup').value;


        //check if user already exists
        if(localStorage.getItem(username)){
            alert('Username already exists,please try some other one.')
        }
        else{
            const user={
                email:email,
                password:password
            };

            //storing new user in local storage
            localStorage.setItem(username,JSON.stringify(user));
            alert('Signup successful!,please login to continue--');
            e.stopImmediatePropagation();
            signupForm.classList.add('hidden');


            // console.log(localStorage.getItem(user));
        }
    });
 

    this.document.querySelector('#loginSubmit').addEventListener('click',(e)=>{
        e.preventDefault();
        
        const usernameLogin = document.getElementById('userName-login').value;
        const passwordLogin = document.getElementById('password-login').value;

        const storedUser = this.localStorage.getItem(usernameLogin);
        if(storedUser){
             //get user from storedUser
             const user = JSON.parse(storedUser)

             //password matching or not
            if(user.password === passwordLogin){
                this.alert('login successful');
                // Here you can add code to redirect to a different page
            }
            else{
                this.alert('Incorrect password,please try again')
            }
        }
        else{
            alert('user does not exist,please signup first!!')
        }
        e.stopImmediatePropagation()
        
    });
    
    // usernameLogin.addEventListener('change',function(e){
    //     console.log(e.target.value)
    // })
    // passwordLogin.addEventListener('change',function(e){
    //     console.log(e.target.value)
    // })
    
    closeBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            loginForm.classList.remove('show');
            signupForm.classList.remove('show');
        })
    })
    
    window.addEventListener("click", function (event) {
        if (event.target === loginForm) {
            loginForm.classList.remove("show");
        }
        if (event.target === signupForm) {
            signupForm.classList.remove("show");
        }
    });
    })
    

    // const name = document.getElementById('name')
    // const email = document.getElementById('email')
    // const password = document.getElementById('password')
    


    ///////////////////
    // const library = document.querySelector('.library')
    
    // const songs = fetch("songs.json")
    // songs.then((res)=>{
    //     console.log(res.json());
    // })
    ////////////////////////
    
        const audioPlayer = document.getElementById('audio-player')
        const playBtn = document.getElementById('play-btn')
        const pauseBtn = document.getElementById('pause-btn')
        const prevBtn = document.getElementById('prevsong-btn')
        const nextBtn = document.getElementById('nextsong-btn')
    
        // taking the card
        const cards = document.querySelectorAll('.card')

        // const music_list = [
        //     {
        //         "title": "Song 1",
        //         "artist": "Artist 1",
        //         "album": "Album 1",
        //         "audio": "audio/song1.mp4"
        //     },
        //     {
        //         "title": "Song 2",
        //         "artist": "Artist 2",
        //         "album": "Album 2",
        //         "audio": "audio/song2.mp4"
        //     },
        //     {
        //         "title": "Song 3",
        //         "artist": "Artist 3",
        //         "album": "Album 3",
        //         "audio": "audio/song3.mp3"
        //     }
        // ]
        
    
        cards.forEach((card)=>{
            card.addEventListener('click',function(){
                const audioSrc = this.getAttribute('data-audio');
                audioPlayer.src = audioSrc;
                if(audioPlayer.paused){
                    audioPlayer.play();
                    playBtn.src = "./images/pause.svg";
                    playBtn.setAttribute("src","./images/pause.svg");
                }
                else{
                    audioPlayer.pause();
                    playBtn.src = "./images/play.svg";
                }
            })
        })
    
        playBtn.addEventListener('click',function(){
            if(audioPlayer.paused){
                audioPlayer.play();
                // playBtn.src = "./images/pause.svg";
                playBtn.setAttribute("src","images/pause.svg");
            }
            else{
                audioPlayer.pause()
                playBtn.src = "./images/play.svg";
            }
        })
    
        nextBtn.addEventListener('click',function(){
            playNextSong(cards,audioPlayer,playBtn);
            console.log("next btn is clicked")
        })
        
        prevBtn.addEventListener('click',function(){
            playPrevSong(cards,audioPlayer,playBtn);
            console.log("prev btn is clicked")
        })
    
        function playNextSong(cards,audioPlayer,playBtn){
            const currentIndex = Array.from(cards).findIndex(card => card.querySelector('img').src === audioPlayer.src);
            const nextIndex = (currentIndex + 1) % cards.length;
            const nextCard = cards[nextIndex];
            audioPlayer.src = nextCard.getAttribute('data-audio');
            audioPlayer.play();
            playBtn.src = "images/pause.svg";
        }
    
        function playPrevSong(cards,audioPlayer,playBtn)
        {
            const currentIndex = Array.from(cards).findIndex(card => card.querySelector('img').src === audioPlayer.src);
            const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
            const prevCard = cards[prevIndex];
            audioPlayer.src = prevCard.getAttribute('data-audio');
            audioPlayer.play();
            playBtn.src = "images/pause.svg";
        }
    
})


const PodcastObj = {
    "data": {
        "browse": {
            "__typename": "BrowseSectionContainer",
            "header": {
                "backgroundImage": null,
                "color": {
                    "hex": "#27856A"
                },
                "subtitle": null,
                "title": {
                    "transformedLabel": "Podcasts"
                }
            },
            "sections": {
                "items": [
                    {
                        "__typename": "BrowseSection",
                        "data": {
                            "__typename": "BrowseGenericSectionData",
                            "subtitle": null,
                            "title": {
                                "transformedLabel": "Best episodes of the week"
                            }
                        },
                        "sectionItems": {
                            "items": [
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68dbaa40d4707cb32e923057a2d",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fbaa40d4707cb32e923057a2d",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8abaa40d4707cb32e923057a2d",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Check out my Mind Performance app: Android - https://install.lvl.fit/z606r3de7tmao9vowgdiOS - https://apps.apple.com/app/apple-store/id1623828602?pt=124995957&ct=Ranveer97&mt=8Join the Level Community Here:https://linktr.ee/levelsupermindcommunityCheck out BeerBiceps SkillHouse's Podcasting 101 Course - https://bbsh.io/podcasting-101 Follow BeerBiceps SkillHouse's Social Media Handles:YouTube : https://www.youtube.com/channel/UC2-Y36TqZ5MH6N1cWpmsBRQInstagram : https://www.instagram.com/beerbiceps_skillhouseWebsite : https://bbsh.in/bb-launch-ytFor any other queries EMAIL: support@beerbicepsskillhouse.comIn case of any payment-related issues, kindly write to support@tagmango.comFollow Madan Gowri's Social Media Handles:-Instagram: https://www.instagram.com/madangowri?igsh=ems4ZG1iY3NvcTA=https://www.instagram.com/xmadangowri?igsh=Z3k3Y2F1d2prcW0yYouTube:  https://www.youtube.com/@madangowriX: https://x.com/madan3LinkedIn: https://www.linkedin.com/in/madangowri/\uD83C\uDFA7 Listen To #TheRanveerShow On Spotify:https://open.spotify.com/show/6ZcvVBPQ2ToLXEWVbaw59PLink to our blog: https://beerbiceps.com/Join us on The Ranveer Show for a fascinating dive into Tamil Nadu's vibrant political and cultural landscapes with the insightful Madan Gowri. This episode unpacks the complexities of regional politics, discussing the roles and perceptions of key political figures and parties. We explore how historical and current political movements shape the lives of Tamil Nadu's residents.Mr. Madan also provides a nuanced view of the cultural influences that pervade politics, particularly the impact of the film industry and cultural icons. We discuss potential future shifts in politics and culture, considering the aspirations and evolving identity of the Tamil population.Tune in for an enlightening conversation that connects the dots between the past, present, and future of Tamil Nadu. Don’t forget to like, comment, and subscribe for more deep dives into cultural and political realms!(0:00) - Start of the podcast(3:29) - Madan Gowri x Ranveer Allahbadia begins(5:17) - His stardom(7:51) - Tamil Nadu politics 101(10:05) - Caste system in Tamil Nadu (11:51) - Central politics talk and thoughts on NDA(14:27) - Tamil Nadu's views on Congress and Rahul Gandhi(16:31) - Popularity of Ministers in Tamil Nadu(17:20) - Dr. S. Jaishankar and Nirmala Sitharaman(19:00) - Views on NDA and BJP(21:04) - Message to top BJP Ministers(22:17) - Actionable for the Indian government(25:00) - Pissing off politicians(26:07) - Who’s going to be the next PM?(32:19) - About Caste Names and Periyar(35:16) - Dravida Munnetra Kazhagam(48:10) - Dravidian Politics(46:40) - About J. Jayalalitha (54:53) - Karunanidhi (1:01:02) - Sri Lanka and Tamil Nadu(1:03:12) - Film industry and politics in Tamil Nadu (1:05:58) - Annamalai(1:07:15) - South Indian Movies(1:10:58) - About Hindi language(1:17:00) - Thank you for watching(1:18:24) - End of the podcast Learn more about your ad choices. Visit podcastchoices.com/adchoices",
                                            "duration": {
                                                "totalMilliseconds": 4790810
                                            },
                                            "name": "Tamil YouTube SUPERSTAR - Madan Gowri | Politics, Periyar & Power | The Ranveer Show 438",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68dde3404901270d81ee3bbc408",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1fde3404901270d81ee3bbc408",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8ade3404901270d81ee3bbc408",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "The Ranveer Show"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2024-08-28T08:11:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:1aY9esUelwAyhpEox7GMsu"
                                        }
                                    },
                                    "uri": "spotify:episode:1aY9esUelwAyhpEox7GMsu"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d8a904ed1998fc70c79732d11",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f8a904ed1998fc70c79732d11",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a8a904ed1998fc70c79732d11",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Watch the Netflix show IC 814: The Kandahar Hijack, based on true events. Show comes out on 29th August. Find it here: https://www.netflix.com/title/81265803  “Cabin crew, prepare for takeoff.” As soon as the pilot utters those words, you completely submit yourself to them. You know for a fact you’re in their hands, literary and figuratively. An anxiety and excitement grip; being 30,000ft in the air does that. But deep down, you want to land. You want to touch earth again. You want to walk. The passengers of Indian Airlines IC 814 were no different. When the captain of that flight uttered “Cabin crew, prepare for takeoff,” from Kathmandu Airport’s tarmac, the 178 passengers must’ve felt the same anxiety, and excitement. They must’ve wanted to walk. But they did not. Of those 178 passengers, 5 were terrorists, committed to hijacking this Airbus A300. This is the story of the airplane that never landed in Delhi. This is the story of the Kandahar Hijacking.   For extra episodes, early access, silly bloopers, subscribe at: https://www.patreon.com/thedesistudios or join our YouTube family https://www.youtube.com/channel/UCnbfV0YvrxWMq3h0hmo13Jg/join  To buy Desi Studios merch, visit: https://kadakmerch.com/collections/desi-studios  For fastest updates, follow our socials at: https://www.instagram.com/desicrime/  Want our content in video formats instead? Head over to YouTube: https://youtube.com/@thedesistudios?si=HBkPuoi3bFxx46tU  Love horror content too? Subscribe to The Bhootbusters Podcast:  Apple: https://podcasts.apple.com/us/podcast/the-bhootbusters-podcast/id1728625464  Spotify: https://open.spotify.com/episode/3I4KvQugyBJIjf69WlJvVh?si=Leb_m209R8exHTqlJlXcKQ  Amazon: https://music.amazon.in/podcasts/564ff27d-d49f-443b-9fa1-318fab5630aa/the-bhootbusters-podcast  Our personal: Aryaan: https://www.instagram.com/aryaanmisra/  Aishwarya: https://www.instagram.com/aishwaryasinghs/",
                                            "duration": {
                                                "totalMilliseconds": 4149336
                                            },
                                            "name": "122. Kandahar Hijacking: The Story Behind ‘IC-814’ ",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d2e85e1690e932df6d70ff8a2",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f2e85e1690e932df6d70ff8a2",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a2e85e1690e932df6d70ff8a2",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "The Desi Crime Podcast"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2024-08-28T14:19:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:2T1cRnBraJBCOKR45TBkcj"
                                        }
                                    },
                                    "uri": "spotify:episode:2T1cRnBraJBCOKR45TBkcj"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68dacf2d80f74388a267d423759",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1facf2d80f74388a267d423759",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8aacf2d80f74388a267d423759",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "There is a man who believes he can make ANYONE in the world fall in love with him. He is convinced that he could even make an alien love him.  This is a man that is so popular that women are spreading open their purses and dropping stacks of cash just to hear him yap. In just ONE NIGHT, women paid $440,000 just to spend time with him. And not in the nasty kind of way.  We’re talking about the man, the myth, the legend - King of Japanese Host Clubs, Roland.  If you think you can stay away from Roland, think again because “even the traffic light blushes red when it sees him.”",
                                            "duration": {
                                                "totalMilliseconds": 3656176
                                            },
                                            "name": "The Most Desirable Man in Japan- women paying $500k just to spend ONE night with him",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68dacf2d80f74388a267d423759",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1facf2d80f74388a267d423759",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8aacf2d80f74388a267d423759",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Moral Of The Story"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2024-08-20T17:33:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:7HVPXN2DbpBM7h7gku1hoN"
                                        }
                                    },
                                    "uri": "spotify:episode:7HVPXN2DbpBM7h7gku1hoN"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d53327871b9f424efba81ce74",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f53327871b9f424efba81ce74",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a53327871b9f424efba81ce74",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Join the girls this week as they dive into the wild world of dating apps! Tune in as they share their own experiences, dish out opinions on men's dating profiles, and uncover the sly tactics they’ve encountered along the way. So delete your dating apps after the perfect episode for our loyal listeners.",
                                            "duration": {
                                                "totalMilliseconds": 3251733
                                            },
                                            "name": "SHE WENT ON A DATE WITH???",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d53327871b9f424efba81ce74",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f53327871b9f424efba81ce74",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a53327871b9f424efba81ce74",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Moment of Silence"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2024-08-30T12:02:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:0UnfTOo6sB408dBpBrDb1S"
                                        }
                                    },
                                    "uri": "spotify:episode:0UnfTOo6sB408dBpBrDb1S"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68dc65836bb6ccaf687144b5f08",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fc65836bb6ccaf687144b5f08",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8ac65836bb6ccaf687144b5f08",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": " In episode 171 of PG Radio, King  @King  joins the show for an in-depth conversation about his music and the creative process behind it. He opens up about the emotions that fuel his work, sharing the stories behind hit tracks like \"FCK WHAT THEY SAY\" and \"GOAT SHT.\" King also reflects on the highlights of his latest album release event and provides insights into his thoughts on industry controversies, his aspirations for collaborations with international artists, and glimpses into his personal life.  King is a dynamic and influential force in the Indian music scene, celebrated for his powerful lyrics and captivating performances. With a style that seamlessly blends emotional depth with raw energy, he has created a unique sound that resonates with a diverse audience. King's music draws from his personal experiences and challenges, making him a relatable and authentic voice in the industry, admired for his ability to connect with listeners on a profound level.  This is what we talked about:  00:00 - King cried while writing this song03:32 - King reacts to \"Warcry\"11:01 - \"I can't perform in front of my family\"15:32 - Why did King write \"Monopoly Moves\"20:28 - The best album release event34:02 - King and Prakhar react to \"GOAT SHT\"38:05 - How King and Karma made \"GOAT SHT\"41:32 - International artists that King wants to collab with48:57 - Reacting to \"F*CK WHAT THEY SAY\"54:13 - Marathi music and MC Stan55:51 - King talks about Emiway Bantai and Controversy1:07:45 - King talks about his Mother1:15:34 - King's upcoming projects1:30:02 - Reacting to \"SUITS & STREETS\"1:33:22 - King talks about M-Zee Bella  ",
                                            "duration": {
                                                "totalMilliseconds": 5713983
                                            },
                                            "name": "Episode 171 - King on his new Album, Rapping and collab with MC Stan, Raftaar & Karma",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d7377f806843d2d95ef41039c",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f7377f806843d2d95ef41039c",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a7377f806843d2d95ef41039c",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "PG Radio"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2024-08-25T15:30:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:0z5xy8tGlI69W4BQMD9Z9L"
                                        }
                                    },
                                    "uri": "spotify:episode:0z5xy8tGlI69W4BQMD9Z9L"
                                }
                            ],
                            "totalCount": 5
                        },
                        "targetLocation": "",
                        "uri": "spotify:section:0JQ5IMCbQBLva2NJWLXBai"
                    },
                    {
                        "__typename": "BrowseSection",
                        "data": {
                            "__typename": "BrowseGenericSectionData",
                            "subtitle": null,
                            "title": {
                                "transformedLabel": "Stories from Mumbai"
                            }
                        },
                        "sectionItems": {
                            "items": [
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d00b95bc0ab428eef539426ba",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f00b95bc0ab428eef539426ba",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a00b95bc0ab428eef539426ba",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "From the 1950s right up to its collapse, people in the Soviet Union were completely infatuated with Indian cinema. India and The Soviet Union had completely different politics, languages, and cultures. But for a brief time, these two nations found they had much more in common than expected, and realized this through a love of movies. From Bombay with Love Subscribe to SiriusXM Podcasts+ on Apple Podcasts to listen to ad-free new episodes and get exclusive access to bonus content.",
                                            "duration": {
                                                "totalMilliseconds": 1997871
                                            },
                                            "name": "From Bombay with Love",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d00b95bc0ab428eef539426ba",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f00b95bc0ab428eef539426ba",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a00b95bc0ab428eef539426ba",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "99% Invisible"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2019-05-07T22:57:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:2Zni5YqHYi1L8IfDhp0aBE"
                                        }
                                    },
                                    "uri": "spotify:episode:2Zni5YqHYi1L8IfDhp0aBE"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68da03bce9bdab030efbe0393be",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fa03bce9bdab030efbe0393be",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8aa03bce9bdab030efbe0393be",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Very often we tend not to explore our own backyards, with the idea that it will get done some day. So for all you Bombay folk and for those visiting the city, here is a list of funky things to do in the city that show you a completely different side to this bustling metropolis. What are you waiting for? For more information, you can visit our website: https://rediscoveryproject.com/ This is an IVM Production; for more such awesome podcasts, come find us: Website: Indusvox.com Facebook: facebook.com/ivmpodcasts Twitter: twitter.com/ivmpodcasts Instagram: instagram.com/ivmpodcastsSee omnystudio.com/listener for privacy information.",
                                            "duration": {
                                                "totalMilliseconds": 1471660
                                            },
                                            "name": "S02E08: Exploring Bombay",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68df41a5bc87d64890c43e0576e",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1ff41a5bc87d64890c43e0576e",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8af41a5bc87d64890c43e0576e",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "The reDiscovery Podcast"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2017-08-21T00:30:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:3eeuoZKXKxVvLdqvRcsBUU"
                                        }
                                    },
                                    "uri": "spotify:episode:3eeuoZKXKxVvLdqvRcsBUU"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68dbf2bf267b3789f07d3426064",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fbf2bf267b3789f07d3426064",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8abf2bf267b3789f07d3426064",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Mumbai is surrounded by the sea but its residents rarely go out into the water. When you look out at the open sea the only boats that meet the eye are fishing boats. The Kolis—the oldest inhabitants of Mumbai—are the people whose paths do not end where the waves begin. They net, clean and sell the fish that ends up on our thalis.In this episode, Raghu is joined by Ganesh Nakhawa, who belongs to the Koli community, and has been working to help Koli women to secure their livelihoods. He is also the founder of Blue Catch, which connects people who eat seafood to fresh, traceable and sustainable catch from Mumbai’s traditional fishermen. Nakhawa talks about growing up in a fishing family, the impact of commercial fishing and giving back to the community.",
                                            "duration": {
                                                "totalMilliseconds": 1360416
                                            },
                                            "name": "Fishing with the First Mumbaikars with Ganesh Nakhawa",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68de9c7657958dae7e83ebecb4d",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1fe9c7657958dae7e83ebecb4d",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8ae9c7657958dae7e83ebecb4d",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Marine Lines with Raghu Karnad"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2021-07-29T18:30:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:62G5ucaYw1fKmNh5wRPYEx"
                                        }
                                    },
                                    "uri": "spotify:episode:62G5ucaYw1fKmNh5wRPYEx"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d51a7b4c534362bd1962fa874",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f51a7b4c534362bd1962fa874",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a51a7b4c534362bd1962fa874",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "\"Cotton Green, the forgotten, nondescript station on the Harbour line of the Bombay suburban train network. But once, this area was the beating heat of Bombay. This week, in the third episode of Exploring your backyard, we take you to the story of the meteoric rise of Bombay, which had wide ranging causes, right from the American Civil War in the 1860's to the opening of the Suez Canal. Join us as we rediscover not only this forgotten station, but also Bombay's most neglected piece of heritage. Tune in, and find a simple way in which we could claim our forgotten heritage.  Check out the other episodes on Bombay Colaba, Mark Twain and Dr. Ambedkar: https://ivm.today/342dDWM Dadar, Railways and Outer Space: https://ivm.today/3xuayw9   Also You can check previous episodes of Dark Tourism on IVM Podcasts website  https://ivm.today/3xuayw9  You  can reach out to our host Utsav on Instagram: @whywetravel42 (https://www.instagram.com/whywetravel42) You can listen to this show and other awesome shows on the IVM Podcasts app on Android: https://ivm.today/android or iOS: https://ivm.today/ios, or any other podcast app. You can check out our website at http://www.ivmpodcasts.com/ See omnystudio.com/listener for privacy information.",
                                            "duration": {
                                                "totalMilliseconds": 401815
                                            },
                                            "name": "Cotton Green, American Civil War and Rise of Bombay",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68dfb920aadea01a706bacc48a1",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1ffb920aadea01a706bacc48a1",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8afb920aadea01a706bacc48a1",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Postcards From Nowhere with Utsav Mamoria"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2021-05-27T00:35:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:5bS74NGRJDDzQOik0gIN6v"
                                        }
                                    },
                                    "uri": "spotify:episode:5bS74NGRJDDzQOik0gIN6v"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d0dac36e4c7ddd9bd954f5d0e",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f0dac36e4c7ddd9bd954f5d0e",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a0dac36e4c7ddd9bd954f5d0e",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "It's the mid 1900s, Mumbai then Bombay can be seen covered in its regular hustle and bustle. Our host Akanksha's curious soul has got down at the Bombay Central railway station in search for some food. What she'll find out, is an interesting one to listen to.  This podcast is hosted by Akanksha Kadam Written by Jassim Khan Produced and Directed by Team Dhindora  EP: Pranika Borkar  Artwork: Ashmita Meghrajani   Kommune track-  Voice: Roshan Abbas  Music: A Very Brady Special by Kevin MacLeod Link: https://incompetech.filmmusic.io/song/5760-a-very-brady-special License: http://creativecommons.org/licenses/by/4.0/ Producer- Kommune http://kommuneity.com",
                                            "duration": {
                                                "totalMilliseconds": 506497
                                            },
                                            "name": "Mills of Mumbai",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d0dac36e4c7ddd9bd954f5d0e",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f0dac36e4c7ddd9bd954f5d0e",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a0dac36e4c7ddd9bd954f5d0e",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Finding Food"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2020-12-04T10:19:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:3vpPnz2b6F58etJD7BANzj"
                                        }
                                    },
                                    "uri": "spotify:episode:3vpPnz2b6F58etJD7BANzj"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d15ddf33c6338ef4e0757f0cf",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f15ddf33c6338ef4e0757f0cf",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a15ddf33c6338ef4e0757f0cf",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Mumbai has many names. Industrial capital, city of dreams, home of Bollywood and many more. We have always seen Mumbai bustling with people who want to reach for the stars, but we have never thought of it as a busy naval base. Some proofs suggest that it was Mumbai who witnessed India’s first naval battle. Find out more about it, in this episode of India classified.See omnystudio.com/listener for privacy information.",
                                            "duration": {
                                                "totalMilliseconds": 727275
                                            },
                                            "name": "Naval Battle Of Mumbai",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d15ddf33c6338ef4e0757f0cf",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f15ddf33c6338ef4e0757f0cf",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a15ddf33c6338ef4e0757f0cf",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "India Classified"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2020-08-08T06:32:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:7z3ZAo2RP9ygTczDQL7mV2"
                                        }
                                    },
                                    "uri": "spotify:episode:7z3ZAo2RP9ygTczDQL7mV2"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68ddc7ef9cd9f8e5a98ea49f637",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fdc7ef9cd9f8e5a98ea49f637",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8adc7ef9cd9f8e5a98ea49f637",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "In this episode, our 2Gs, the Gourmands & Geeks, Sadaf and Archit explore the routes of pao, various versions and the popular dishes paired with this piece of bread. They will discuss who introduced pao to a civilisation that used to only eat roti and how pao travelled to Mumbai from Goa. They also look at the Portuguese and Irani connections, shed light on the unique ways in which Pao is served in Mumbai and end with a fight over the vada pao.So sit back and relax, toast some pao, put the butter and get on the bus journey from Mumbai to Goa.Important links to geek out more:Video: Our Daily Bread(Our Daily Bread - Reel 2 (1962))Video: The Story Of - Shehnaz Bakery: Traditional Indian Bakery(Gobble | शहनाज़ बेकरी की कहानी | The Story Of - Shehnaz Bakery | पाँव कैसे बनाते हैं)Book: Anjuna - Profile Of A Village In Goa(https://amzn.to/3cBP47d)How did the Portuguese pav become one of Bombay’s most recognisable breads?(https://virsanghvi.com/Article-Details.aspx?key=1134)14 Ways Mumbai Enjoys Its Love Affair With Pav(http://bit.ly/3bRO7Zf)What The Fork: Kunal Vijayakar on How to Have Your Bread and Eat It Too(http://bit.ly/38Mb12e)You can follow Sadaf Hussain & Archit Puri on their Instagram handle:@sadaf_hussain @thehustlinggluttonYou can listen to this show and other awesome shows on the IVM Podcasts app on Android: https://ivm.today/android or iOS: https://ivm.today/ios, or any other podcast app.You can check out our website at http://www.ivmpodcasts.com/See omnystudio.com/listener for privacy information.",
                                            "duration": {
                                                "totalMilliseconds": 3365642
                                            },
                                            "name": "What-A-Pao: From Goa to Mumbai",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68d788f358907d8822c0e47d8bf",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f788f358907d8822c0e47d8bf",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a788f358907d8822c0e47d8bf",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Naan Curry with Sadaf and Archit"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2021-03-17T00:35:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:5mnnrVYnIeMazuUOYIKyv9"
                                        }
                                    },
                                    "uri": "spotify:episode:5mnnrVYnIeMazuUOYIKyv9"
                                },
                                {
                                    "content": {
                                        "__typename": "EpisodeOrChapterResponseWrapper",
                                        "data": {
                                            "__typename": "Episode",
                                            "contentRating": {
                                                "label": "NONE"
                                            },
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68dbb24371ff486a0262121cb57",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1fbb24371ff486a0262121cb57",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8abb24371ff486a0262121cb57",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "description": "Either by mistake or by choice, all of us have traveled in a Mumbai Local without ticket. In this episode i share with you my one such experience of me travelling without a ticket and what happened thereafter.",
                                            "duration": {
                                                "totalMilliseconds": 360211
                                            },
                                            "name": "Episode 2: Without Ticket",
                                            "playedState": {
                                                "playPositionMilliseconds": 0,
                                                "state": "NOT_STARTED"
                                            },
                                            "podcastV2": {
                                                "data": {
                                                    "__typename": "Podcast",
                                                    "coverArt": {
                                                        "sources": [
                                                            {
                                                                "height": 64,
                                                                "url": "https://i.scdn.co/image/ab6765630000f68deeaed184e4be0b28eda5a2e6",
                                                                "width": 64
                                                            },
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1feeaed184e4be0b28eda5a2e6",
                                                                "width": 300
                                                            },
                                                            {
                                                                "height": 640,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8aeeaed184e4be0b28eda5a2e6",
                                                                "width": 640
                                                            }
                                                        ]
                                                    },
                                                    "name": "Mumbai Local Lo Baat"
                                                }
                                            },
                                            "releaseDate": {
                                                "isoString": "2020-07-18T08:32:00Z",
                                                "precision": "MINUTE"
                                            },
                                            "uri": "spotify:episode:32hCpDlhJxnm24ZhlgToi7"
                                        }
                                    },
                                    "uri": "spotify:episode:32hCpDlhJxnm24ZhlgToi7"
                                }
                            ],
                            "totalCount": 8
                        },
                        "targetLocation": "",
                        "uri": "spotify:section:0JQ5IMCbQBLxfrsuEX6OOm"
                    },
                    {
                        "__typename": "BrowseSection",
                        "data": {
                            "__typename": "BrowseGenericSectionData",
                            "subtitle": null,
                            "title": {
                                "transformedLabel": "The founders club"
                            }
                        },
                        "sectionItems": {
                            "items": [
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d96a7a1d69f3c87172780b452",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f96a7a1d69f3c87172780b452",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a96a7a1d69f3c87172780b452",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "MIXED",
                                            "name": "The BarberShop with Shantanu",
                                            "publisher": {
                                                "name": "The BarberShop with Shantanu"
                                            },
                                            "uri": "spotify:show:4A2Ug6PpH1ClZg5gBuyeIY"
                                        }
                                    },
                                    "uri": "spotify:show:4A2Ug6PpH1ClZg5gBuyeIY"
                                },
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d15355901a82135b267e23f9f",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f15355901a82135b267e23f9f",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a15355901a82135b267e23f9f",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "MIXED",
                                            "name": "WTF is with Nikhil Kamath",
                                            "publisher": {
                                                "name": "Nikhil Kamath"
                                            },
                                            "uri": "spotify:show:5T1uhRS6IKKYuo9v0jcSrD"
                                        }
                                    },
                                    "uri": "spotify:show:5T1uhRS6IKKYuo9v0jcSrD"
                                },
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d7a9e64495f3e3749799c85b5",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f7a9e64495f3e3749799c85b5",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a7a9e64495f3e3749799c85b5",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "MIXED",
                                            "name": "SparX by Mukesh Bansal",
                                            "publisher": {
                                                "name": "Mukesh Bansal"
                                            },
                                            "uri": "spotify:show:5i3MCokWyGq3PWx43vwrfA"
                                        }
                                    },
                                    "uri": "spotify:show:5i3MCokWyGq3PWx43vwrfA"
                                },
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d2b1967eff26d505a5b168690",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f2b1967eff26d505a5b168690",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a2b1967eff26d505a5b168690",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "AUDIO",
                                            "name": "The Ronnie Screwvala Podcast: Dreaming with Your Eyes Open",
                                            "publisher": {
                                                "name": "IVM Podcasts"
                                            },
                                            "uri": "spotify:show:4Ej365f40DMl9IUA33RA8S"
                                        }
                                    },
                                    "uri": "spotify:show:4Ej365f40DMl9IUA33RA8S"
                                },
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d224e23d9832e0dcc349d3179",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f224e23d9832e0dcc349d3179",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a224e23d9832e0dcc349d3179",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "AUDIO",
                                            "name": "This Round Is On Me with Gauri Devidayal",
                                            "publisher": {
                                                "name": "IVM Podcasts"
                                            },
                                            "uri": "spotify:show:3E4EewU4B36GtCJOxjnx9u"
                                        }
                                    },
                                    "uri": "spotify:show:3E4EewU4B36GtCJOxjnx9u"
                                },
                                {
                                    "content": {
                                        "__typename": "PodcastOrAudiobookResponseWrapper",
                                        "data": {
                                            "__typename": "Podcast",
                                            "coverArt": {
                                                "sources": [
                                                    {
                                                        "height": 64,
                                                        "url": "https://i.scdn.co/image/ab6765630000f68d99258c1b4db76955103c7c8a",
                                                        "width": 64
                                                    },
                                                    {
                                                        "height": 300,
                                                        "url": "https://i.scdn.co/image/ab67656300005f1f99258c1b4db76955103c7c8a",
                                                        "width": 300
                                                    },
                                                    {
                                                        "height": 640,
                                                        "url": "https://i.scdn.co/image/ab6765630000ba8a99258c1b4db76955103c7c8a",
                                                        "width": 640
                                                    }
                                                ]
                                            },
                                            "mediaType": "AUDIO",
                                            "name": "NoSugarCoat with Pooja Dhingra",
                                            "publisher": {
                                                "name": "Maed in India"
                                            },
                                            "uri": "spotify:show:1THhGNf9NM0j5I2O9ZpOhe"
                                        }
                                    },
                                    "uri": "spotify:show:1THhGNf9NM0j5I2O9ZpOhe"
                                }
                            ],
                            "totalCount": 6
                        },
                        "targetLocation": "",
                        "uri": "spotify:section:0JQ5IMCbQBLqJ71CGURabh"
                    },
                    {
                        "__typename": "BrowseSection",
                        "data": {
                            "__typename": "BrowseGridSectionData",
                            "subtitle": null,
                            "title": {
                                "transformedLabel": "Categories"
                            }
                        },
                        "sectionItems": {
                            "items": [
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#0d73ec"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Podcast Charts"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAB3zgCauRwnvdEQjJ"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#8e66ac"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Podcast New Releases"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFH69NUcWRk7v"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#e13300"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Video Podcasts"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFQ3ZuyILnKhg"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8aaa4830256e4b613f07287208",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#477d95"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Self-help"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFzx44CccII79"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/e227cd9674618024276c65f1213fb05af34cf512",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#777777"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Business & Technology"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFQRiNGmKYj3B"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/96b8b3d5b7c1a5ae952c7489406602539ce651c8",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#af2896"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Educational"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFEKYLBUxreJF"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a1f1f33f0a621eed1894f862b",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#27856a"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Books"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFD0Jc9BXRvme"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a66e9afc12d33296f115b32f5",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#8d67ab"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Stories"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFHv2c1dK1Jdi"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8af8cb15106887bbc4bdefc4c0",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#a56752"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Tamil Podcasts"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFPfwjeRLeBEp"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a36dbb0b2d65004488fcc322f",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#477d95"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Devotion & Mythology"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFD55C02KjJER"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a04f358b3609163f444e02d2f",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#e61e32"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Horror"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFFiNuWJyqTAl"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a5502c1cc6a793e4a6bf97faf",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#503750"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Comedy"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFNr6gDrHHVKL"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8ab5a180ae9ca4b7527ac8755e",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#006450"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "History"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFKK9EFSCDuOS"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a66bea7110f245d83a7e95d85",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#777777"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Sports"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFLhhtGqqgAsz"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a0a5338d2c1f31e86df2883b5",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#1e3264"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Arts and Entertainment"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFRCdce9Dl6ax"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a53327871b9f424efba81ce74",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#e1118c"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Love & Relationships"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFHvzD2xaLhZb"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab6765630000ba8a58e730e8341e29ca0f0671fe",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#777777"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "Bengali Podcasts"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFI51RHx03IVg"
                                },
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": {
                                                        "sources": [
                                                            {
                                                                "height": 300,
                                                                "url": "https://i.scdn.co/image/ab67656300005f1f64f4d06cbd669c7c34b450d4",
                                                                "width": 300
                                                            }
                                                        ]
                                                    },
                                                    "backgroundColor": {
                                                        "hex": "#8a202b"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "News & Politics"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DAqbMKFCPUu8dFgVaC"
                                }
                            ],
                            "totalCount": 18
                        },
                        "targetLocation": "",
                        "uri": "spotify:section:0JQ5DAwD41iTh6T8ay5IzN"
                    },
                    {
                        "__typename": "BrowseSection",
                        "data": {
                            "__typename": "BrowseRelatedSectionData",
                            "subtitle": null,
                            "title": null
                        },
                        "sectionItems": {
                            "items": [
                                {
                                    "content": {
                                        "__typename": "BrowseSectionContainerWrapper",
                                        "data": {
                                            "__typename": "BrowseSectionContainer",
                                            "data": {
                                                "cardRepresentation": {
                                                    "artwork": null,
                                                    "backgroundColor": {
                                                        "hex": "#8d67ab"
                                                    },
                                                    "title": {
                                                        "transformedLabel": "See all categories"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "uri": "spotify:page:0JQ5DArNBzkmxXHCqFLx2U"
                                }
                            ],
                            "totalCount": 1
                        },
                        "targetLocation": "",
                        "uri": "spotify:section:0JQ5DAwD41iRZZRVB8eoey"
                    }
                ],
                "pagingInfo": {
                    "nextOffset": null
                },
                "totalCount": 6
            },
            "uri": "spotify:page:0JQ5DArNBzkmxXHCqFLx2J"
        }
    },
    "extensions": {}
}
const Podcast_API = "https://api-partner.spotify.com/pathfinder/v1/query?operationName=browsePage&variables=%7B%22pagePagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22sectionPagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22uri%22%3A%22spotify%3Apage%3A0JQ5DArNBzkmxXHCqFLx2J%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22177a4ae12a90e35d335f060216ce5df7864a228c6ca262bd5ed90b37c2419dd9%22%7D%7D"
