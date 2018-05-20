CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(1024) NOT NULL,
	"description" VARCHAR(1024) NOT NULL,
	"likes" INTEGER DEFAULT '0'
);

INSERT INTO "gallery" ("path", "description")
VALUES 
('images/butterphant.jpg', 'A duckiphant I saw while on a trip to Afrimerasia'),
('images/chickoceros.jpg', 'While we were cutting down our Chrimbo cactus, there was a petting zoo with what I learned was called a "chickoceros".'),
('images/chipantula.jpg', 'My brother''s petsperiment chipantula. I never liked them but he swears they make great petsperiments.'),
('images/elephuck.jpg', 'Snapped a shot of this elephuck when our family went to the zoocus.'),
('images/frobbit.jpg', 'While playing "bobbing for carrots", a frobbit hopped into the bin and started stealing all of the carrots.'),
('images/hawger.jpg', 'Lucky enough to see these two hawgers in the middle of a hunting ritual.'),
('images/hummigator.jpg', 'Using my high-speed camera, I caught a picture of this hummigator before it sucked the nectar out if its prey.'),
('images/koatypus.jpg', 'The venoison secreting from this koatypus kept distracting me while I was taking the picture.'),
('images/kodiarktopus.jpg', 'I was TRYING to take a pictoto of a dolphin in the distance, but I should have expected this kodiarktopus to photo-bomb it, as they are so well-known for doing.'),
('images/ligaroo.jpg', 'Woke up and in hte frontyawn I accidentally made eye contact with a ligaroo. It took us 12 minutes to finish the staring contest. I won.'),
('images/lizaffe.jpg', 'Contrary to popular belief, lizaffes apparently have VERY soft scur. This one was talking smack to a woodpecker.'),
('images/meereater.jpg', 'Ended up in the hospital after getting stung by a meereater tonguer.'),
('images/shape.jpg', 'Truly the trolls of the piminal world... Got a flat tire and was laughed at by a shape (named Hubert, apparently) for a solid hour before help arrived.'),
('images/sleagle.jpg', 'This is actually a video live-broadcasting from the forroods. They flap so slowly that they''re like reverse hummingbirds...'),
('images/snortoise.jpg', 'While apple-picking, I found out they had a snortoise problem in ther cropens.'),
('images/sonkey.jpg', 'On a trip to the boundary islands, I passed this SAME sonkey on the road while going there and coming back.');