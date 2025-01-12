import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2, Music, Video, ShoppingCart, MessageCircle, Heart, Calendar, Send, ShoppingBag, Play } from 'lucide-react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  const socialMediaLinks = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/vishal/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/vishal",
      icon: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
    }
  ];

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ],
        "upcomingEvents": [
          {
            "eventId": "event1",
            "eventTitle": "Music Fest 2024",
            "description": "Join us for an unforgettable night of music and fun.",
            "date": "2024-12-25",
            "location": "New York City"
          },
          {
            "eventId": "event2",
            "eventTitle": "Acoustic Evening",
            "description": "An intimate acoustic performance.",
            "date": "2024-11-15",
            "location": "Los Angeles"
          }
        ],
        "testimonials": [
          {
            "testimonialId": "test1",
            "name": "John Doe",
            "message": "Vishal's music is truly inspiring!",
            "photo": "https://example.com/john_doe.jpg"
          },
          {
            "testimonialId": "test2",
            "name": "Jane Smith",
            "message": "An amazing artist with a soulful voice.",
            "photo": "https://example.com/jane_smith.jpg"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks, upcomingEvents, testimonials } = landingPageData;



  return (
    <div className="min-h-screen bg-gray-50" style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}>
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50 sticky">
        <Card className="rounded-none shadow-sm bg-white hover:bg-gray-100 transition-colors duration-300">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <motion.div 
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-semibold text-xl text-gray-800">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Music className="w-4 h-4 mr-2" /> Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Video className="w-4 h-4 mr-2" /> Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Music className="w-4 h-4 mr-2" /> Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" /> Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection('support')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Heart className="w-4 h-4 mr-2" /> Support
                  </TabsTrigger>
                  <TabsTrigger
                    value="upcomingEvents"
                    onClick={() => scrollToSection('upcomingEvents')}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" /> Upcoming Events
                  </TabsTrigger>
                </TabsList>
              </Tabs>

            </motion.div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Section */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
                    <AvatarFallback>{username}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mt-4 text-gray-800">{artistPage.artistName}</h2>
                  <Badge variant="secondary" className="mt-2 bg-indigo-600 text-white">
                    {artistPage.stageTitles}
                  </Badge>
                </div>

                {/* Social Links Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect with me on:</h3>

                  <div className="flex flex-col gap-4">
                    {musicPlatformLinks.map((link) => (
                      <motion.button
                        key={link.musicPlatform + link.url}
                        className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition"
                        onClick={() => link.url && window.open(link.url, '_blank')}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                          {link.icon ? (
                            <img
                              src={link.icon}
                              alt={`${link.musicPlatform} icon`}
                              className="w-14 h-14 object-cover rounded-full"
                            />
                          ) : null}
                        </div>
                        <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
                          {link.musicPlatform || ' '}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Social Media Links Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow me on:</h3>
                  <div className="flex flex-col gap-4">
                    {socialMediaLinks.map((link) => (
                      <motion.button
                        key={link.platform + link.url}
                        className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition"
                        onClick={() => link.url && window.open(link.url, '_blank')}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                          {link.icon ? (
                            <img
                              src={link.icon}
                              alt={`${link.platform} icon`}
                              className="w-14 h-14 object-cover rounded-full"
                            />
                          ) : null}
                        </div>
                        <span className={`text-sm font-medium ${link.platform ? '' : 'opacity-50'}`}>
                          {link.platform || ' '}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-800">About</CardTitle>
                  <CardDescription className="text-gray-600">{artistPage.artistBio}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Music Videos Section */}
            <div id="videos">
              <motion.div
                className="mt-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardHeader>
                  <CardTitle className="text-gray-800"><Video className="w-4 h-4 mr-2" /> Music Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {musicVideos.map((video) => (
                      <motion.div
                        key={video.videoId}
                        className="overflow-hidden cursor-pointer w-full hover:shadow-xl transition-shadow duration-300"
                        onClick={() => window.open(video.redirectURL, '_blank')}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="relative">
                          {/* Image with a 3:2 aspect ratio */}
                          <div className="w-full" style={{ paddingTop: '66.66%' /* 2/3 for 3:2 aspect ratio */ }}>
                            <img
                              src={video.imageURL} // Assuming imageUrl is the field containing the image URL
                              alt={video.title}
                              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                            />
                          </div>

                          {/* Text content below the image */}
                          <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                            <span className="font-medium text-gray-800">{video.title}</span>
                            <Button variant="ghost" size="icon">
                              <Edit2 className="w-4 h-4 text-gray-600" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </CardContent>
              </motion.div>
            </div>


            {/* Scrollable Sections */}
            <ScrollArea className="">


              {/* Performances Section */}
              <div id="performances" className="mt-8">
                <motion.div
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><Music className="w-6 h-6 mr-2 inline" /> Performances</h2>

                  {performances.map((perf) => (
                    <motion.div
                      key={perf.performanceId}
                      className="mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardHeader>
                        <CardTitle className="text-gray-800">{perf.eventTitle}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {perf.description}
                          <br />
                          Duration: {perf.durationMinutes} mins
                          <br />
                          Location: {perf.platform}
                          <br />
                          Price: ${perf.ticketPrice}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="mt-2 bg-indigo-600 text-white hover:bg-indigo-700">
                          <ShoppingBag className="w-4 h-4 mr-2" /> Book Now
                        </Button>
                      </CardContent>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Songs sales Section */}
              <div id="songsSale">
                <motion.div
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><Music className="w-6 h-6 mr-2 inline" /> Songs for Sale</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {songSales.map((song) => (
                      <motion.div
                        key={song.songId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Image Section */}
                        <div className="h-48">
                          <img
                            src={song.imageURL} // Ensure each song object includes an `imageURL` property
                            alt={song.title}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{song.title}</h3>
                            <p className="text-sm text-gray-600">
                              {song.description}
                              <br />
                              Pricing: {song.priceType}
                              {song.price && ` - $${song.price}`}
                            </p>
                          </div>
                          <Button
                            className="mt-4 w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                          >
                            <Play className="w-4 h-4 mr-2" /> View Songs
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>


              {/* Merchandise Section */}
              <div id="merchandise">
                <motion.div
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><ShoppingCart className="w-6 h-6 mr-2 inline" /> Merchandise</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {merchandise.map((merc) => (
                      <motion.div
                        key={merc.merchId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Image Section */}
                        <div className="h-48">
                          <img
                            src={merc.imageURL} // Ensure each merchandise object includes an `imageURL` property
                            alt={merc.merchName}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{merc.merchName}</h3>
                            <p className="text-sm text-gray-600">
                              {merc.merchDescription}
                              <br />
                              Price: ${merc.price}
                              <br />
                              Type: {merc.merchType}
                            </p>
                          </div>
                          <Button
                            className="mt-4 w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" /> View Bundle
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Messages Section */}
              <div id="messages">
                {fanMessages && (
                  <motion.div
                    className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><MessageCircle className="w-6 h-6 mr-2 inline" /> Fan Messages</h2>

                    <motion.div
                      className="mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardHeader>
                        <CardTitle className="text-gray-800">Message Me</CardTitle>
                        <CardDescription className="text-gray-600">
                          {fanMessages.title}
                          <br />
                          {fanMessages.description}
                          <br />
                          Promised Reply Time: {fanMessages.promisedReplyTime} hours
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </Button>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                )}
              </div>
              {/* Support Section */}
              <div id="support">
                {supportPage && (
                  <motion.div
                    className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><Heart className="w-6 h-6 mr-2 inline" /> Support Me</h2>

                    <motion.div
                      className="mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardHeader>
                        <CardTitle className="text-gray-800">Support</CardTitle>
                        <CardDescription className="text-gray-600">
                          {supportPage.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                          <Heart className="w-4 h-4 mr-2" /> Support
                        </Button>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Upcoming Events Section */}
              <div id="upcomingEvents">
                <motion.div
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><Calendar className="w-6 h-6 mr-2 inline" /> Upcoming Events</h2>
                  {upcomingEvents.map((event) => (
                    <motion.div
                      key={event.eventId}
                      className="mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardHeader>
                        <CardTitle className="text-gray-800">{event.eventTitle}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {event.description}
                          <br />
                          Date: {event.date}
                          <br />
                          Location: {event.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                          <Calendar className="w-4 h-4 mr-2" /> View Event
                        </Button>
                      </CardContent>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Testimonials Section */}
              <div id="testimonials">
                <motion.div
                  className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><MessageCircle className="w-6 h-6 mr-2 inline" /> Testimonials</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.testimonialId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="h-48">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.message}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView1;
