// At the top of your file, assuming it's in a utils folder
import sample from "../assets/sample/sample1.mp3";


// Fake API call to simulate AI search results
export const findMatchesAPI = (formData) => {
  console.log("Searching for matches with:", formData);
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { 
          id: 1, 
          name: "SynthwaveKid", 
          role: "Producer", 
          match: 94,
          location: "Los Angeles, CA",
          topTrack: {
            name: "Midnight Drive.mp3",
            url: sample
          },
          skills: ["Synthwave", "Mixing", "80s Vibe", "Sound Design"],
          socials: { spotify: true, soundcloud: true, instagram: true }
        },
        { 
          id: 2, 
          name: "Aria", 
          role: "Vocalist", 
          match: 91,
          location: "Nashville, TN",
          topTrack: {
            name: "Velvet Chains.wav",
            url: sample
          },
          skills: ["Topline", "Pop Vocals", "Harmonies", "Ad-libs"],
          socials: { spotify: true, instagram: true }
        },
        { 
          id: 3, 
          name: "Alex Mixer", 
          role: "Mixing Engineer", 
          match: 88,
          location: "London, UK",
          topTrack: {
            name: "Final Polish_v3.mp3",
            url: sample
          },
          skills: ["Mastering", "Vocal Tuning", "EDM", "Pop"],
          socials: { soundcloud: true, instagram: true }
        },
        { 
          id: 4, 
          name: "GrooveMaster", 
          role: "Producer", 
          match: 85,
          location: "Berlin, Germany",
          topTrack: {
            name: "Funkadelic Beat.wav",
            url: sample
          },
          skills: ["Funk", "Electronic", "Drum Programming", "Sampling"],
          socials: { spotify: true, soundcloud: true }
        },
        { 
          id: 5, 
          name: "Lyricist Lena", 
          role: "Songwriter", 
          match: 82,
          location: "Toronto, CA",
          topTrack: {
            name: "Acoustic Idea.aif",
            url: sample
          },
          skills: ["Storytelling", "Acoustic", "Folk", "Melody Writing"],
          socials: { instagram: true }
        },
      ]);
    }, 2500); // 2.5s delay like real API
  });
};
