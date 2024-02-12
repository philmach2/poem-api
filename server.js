const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

class Poem {
  static poemCounter = 0;

  constructor(title, author, text, century, style) {
    this.id = Poem.poemCounter++;
    this.title = title;
    this.author = author;
    this.text = text;
    this.century = century;
    this.style = style;
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/title/:title", (req, res) => {
  const poemTitle = req.params.title.toLowerCase();
  const poem = poems.find((poem) => poem.title.toLowerCase() === poemTitle);

  if (poem) {
    res.json(poem);
  } else {
    res.json({
      error: `Oops! It seems we do not currently have that poem. We are continuing to expand our collection.`,
    });
  }
});

app.get("/author/:author", (req, res) => {
  const poemAuthor = req.params.author.toLowerCase();
  const poem = poems.find(poem.author.toLowerCase() === poemAuthor);

  if (poem) {
    res.json(poem);
  } else {
    res.json({
      error: `Oops! It seems we do not currently have any poems by that author. We are continuing to expand our collection.`,
    });
  }
});

app.get("/century/:century", (req, res) => {
  const poemCentury = req.params.century.toLowerCase();
  const poem = poems.find(poem.century.toLowerCase() === poemCentury);

  if (poem) {
    res.json(poem);
  } else {
    res.json({
      error: `Oops! It seems we do not currently have any poems from that century. We are continuing to expand our collection.`,
    });
  }
});

app.get("/style/:style", (req, res) => {
  const poemStyle = req.params.style.toLowerCase();
  const poem = poems.find(poem.style.toLowerCase() === poemStyle);

  if (poem) {
    res.json(poem);
  } else {
    res.json({
      error: `Oops! It seems we do not currently have any poems of that style. We are continuing to expand our collection.`,
    });
  }
});

app.get("/all", (req, res) => {
  res.json(poems);
});

app.get("/random", (req, res) => {
  let r = Math.floor(Math.random() * Object.keys(poems).length);
  console.log(r);
  res.json(poems[r]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const kublaKhan = new Poem(
  "Kubla Khan",
  "Samuel Taylor Coleridge",
  `In Xanadu did Kubla Khan
  A stately pleasure-dome decree:
  Where Alph, the sacred river, ran
  Through caverns measureless to man
  Down to a sunless sea.
  
  So twice five miles of fertile ground
  With walls and towers were girdled round:
  And here were gardens bright with sinuous rills
  Where blossomed many an incense-bearing tree;
  And here were forests ancient as the hills,
  Enfolding sunny spots of greenery.
  
  But oh! that deep romantic chasm which slanted
  Down the green hill athwart a cedarn cover!
  A savage place! as holy and enchanted
  As e'er beneath a waning moon was haunted
  By woman wailing for her demon-lover!
  
  And from this chasm, with ceaseless turmoil seething,
  As if this earth in fast thick pants were breathing,
  A mighty fountain momently was forced;
  Amid whose swift half-intermitted burst
  Huge fragments vaulted like rebounding hail,
  Or chaffy grain beneath the thresher's flail:
  And 'mid these dancing rocks at once and ever
  It flung up momently the sacred river.
  
  Five miles meandering with a mazy motion
  Through wood and dale the sacred river ran,
  Then reached the caverns measureless to man,
  And sank in tumult to a lifeless ocean:
  And 'mid this tumult Kubla heard from far
  Ancestral voices prophesying war!
  
  The shadow of the dome of pleasure
  Floated midway on the waves:
  Where was heard the mingled measure
  From the fountain and the caves.
  
  It was a miracle of rare device,
  A sunny pleasure-dome with caves of ice!
  A damsel with a dulcimer
  In a vision once I saw:
  It was an Abyssinian maid,
  And on her dulcimer she played,
  Singing of Mount Abora.
  
  Could I revive within me
  Her symphony and song,
  To such a deep delight 't would win me
  That with music loud and long,
  I would build that dome in air,
  That sunny dome! those caves of ice!
  And all who heard should see them there,
  And all should cry, Beware! Beware!
  His flashing eyes, his floating hair!
  Weave a circle round him thrice,
  And close your eyes with holy dread,
  For he on honey-dew hath fed,
  And drunk the milk of Paradise.`,
  "18th Century",
  "Romantic"
);

const songOnMayMorning = new Poem(
  "Song On May Morning",
  "John Milton",
  ` Now the bright morning Star, Dayes harbinger,
  Comes dancing from the East, and leads with her
  The Flowry May, who from her green lap throws
  The yellow Cowslip, and the pale Primrose.
  
  Hail bounteous May that dost inspire
  Mirth and youth, and warm desire,
  Woods and Groves, are of thy dressing,
  Hill and Dale, doth boast thy blessing.
  
  Thus we salute thee with our early Song,
  And welcom thee, and wish thee long.`,
  "17th Century",
  "Epic"
);

const imNobodyWhoAreYou = new Poem(
  "I'm nobody! Who are you?",
  "Emily Dickinson",
  `I'm nobody! Who are you?
  Are you nobody, too?
  Then there's a pair of us -- don't tell!
  They'd advertise -- you know!
  
  How dreary to be somebody!
  How public like a frog
  To tell one's name the livelong day
  To an admiring bog!`,
  "19th Century",
  "Transcendentalist"
);

const mostSweetItIs = new Poem(
  "Most Sweet it is",
  "William Wordsworth",
  `Most sweet it is with unuplifted eyes
  To pace the ground, if path be there or none,
  While a fair region round the traveller lies
  Which he forbears again to look upon;
  Pleased rather with some soft ideal scene,
  The work of Fancy, or some happy tone
  Of meditation, slipping in between
  The beauty coming and the beauty gone.
  If Thought and Love desert us, from that day
  Let us break off all commerce with the Muse:
  With Thought and Love companions of our way,
  Whate'er the senses take or may refuse,
  The Mind's internal heaven shall shed her dews
  Of inspiration on the humblest lay.`,
  "18th Century",
  "Romantic"
);

const invention = new Poem(
  "Invention",
  "Billy Collins",
  ` Tonight the moon is a cracker,
  with a bite out of it
  floating in the night,
  
  and in a week or so
  according to the calendar
  it will probably look
  
  like a silver football,
  and nine, maybe ten days ago
  it reminded me of a thin bright claw.
  
  
  But eventually --
  by the end of the month,
  I reckon --
  
  it will waste away
  to nothing,
  nothing but stars in the sky,
  
  and I will have a few nights
  to myself,
  a little time to rest my jittery pen.`,
  "20th Century",
  "Contemporary"
);

const thisLivingHand = new Poem(
  "This Living Hand",
  "John Keats",
  ` This living hand, now warm and capable
  Of earnest grasping, would, if it were cold
  And in the icy silence of the tomb,
  So haunt thy days and chill thy dreaming nights
  That thou wouldst wish thine own heart dry of blood
  So in my veins red life might stream again,
  And thou be conscience-calmed - see here it is -
  I hold it towards you.`,
  "19th Century",
  "Romantic"
);

const theRoadNotTaken = new Poem(
  "The Road Not Taken",
  "Robert Frost",
  `TWO roads diverged in a yellow wood, 
  And sorry I could not travel both 
  And be one traveler, long I stood 
  And looked down one as far as I could 
  To where it bent in the undergrowth; 

  Then took the other, as just as fair, 
  And having perhaps the better claim 
  Because it was grassy and wanted wear; 
  Though as for that, the passing there 
  Had worn them really about the same, 

  And both that morning equally lay 
  In leaves no step had trodden black.
  
  Oh, I marked the first for another day! 
  Yet knowing how way leads on to way 
  I doubted if I should ever come back.
  

  I shall be telling this with a sigh 
  Somewhere ages and ages hence: 
  Two roads diverged in a wood, and I, 
  I took the one less traveled by, 
  And that has made all the difference.`,
  "20th Century",
  "Modernist"
);

const theGazelle = new Poem(
  "The Gazelle",
  "Rainer Maria Rilke",
  `Gazella Dorcas


  Enchanted thing: how can two chosen words
  ever attain the harmony of pure rhyme
  that pulses through you as your body stirs?
  Out of your forehead branch and lyre climb
  
  and all your features pass in simile through
  the songs of love whose words as light as rose-
  petals rest on the face of someone who
  has put his book away and shut his eyes:
  
  to see you: tensed as if each leg were a gun
  loaded with leaps but not fired while your neck
  holds your head still listening: as when
  
  while swimming in some isolated place
  a girl hears leaves rustle and turns to look:
  the forest pool reflected in her face.`,
  "19th Century",
  "Modernist"
);

const poems = [];

function addPoem(poem) {
  poems.push(poem);
}

// Did not initially put them in an array at creation.
addPoem(kublaKhan);
addPoem(songOnMayMorning);
addPoem(imNobodyWhoAreYou);
addPoem(mostSweetItIs);
addPoem(invention);
addPoem(thisLivingHand);
addPoem(theRoadNotTaken);
addPoem(theGazelle);
