export const about: string = `# About IF Engine
IF Engine is an application designed to tell a story with random elements caused by dice rolls, oracles and LLMs.

IF Engine is a choose your own adventure style game where you create your own characters, your own world, and your own plot devices, but the mechanics of the game help you randomize the story you are telling, always keeping you and your characters on your toes.

Your information is only stored locally on your machine and at present is unable to be shared with others outside of exporting the full story or story settings.

## Resolution Mechanic
In order to resolve most questions we will be using specialized d20 + modifier mechanic typical of some TTRPG games based on an Easy (E), Moderate (M), Challenging (C), Hard (H) or Impossible (I) difficulty rating.

| Result       | E    | M     | C     | H     | I     |
| ------------ |:----:|:-----:|:-----:|:-----:|:-----:|
| Target DC    | 8    | 14    | 18    | 24    | 30    |
| Success, and | 13+  | 19+   | 23+   | 29+   | 35+   |
| Success      | 8-12 | 14-18 | 18-22 | 24-28 | 30-34 |
| Success, but | 3-7  | 9-13  | 13-17 | 19-23 | 25-29 |
| Failed, but  | 2    | 2-8   | 2-12  | 2-17  | 2-24  |
| Failed, and  | 1    | 1     | 1     | 1     | 1     |
### Advantage & Disadvantage

Rolling at advantage means to roll two d20s and take the highest result.  Having a trait active during a scene causes advantage.

Rolling at disadvantage means to roll two d20s and take the lowest result. Having a flaw active during a scene causes disadvantage.  Succeeding in a scene with disadvantage earns +1XP per scene.


## Characters

### Skills

Characters have simple stats to help randomize some events in the story. The default values are based on the pillars of most TTRPG games: Exploring, Combat and Socialization.

* **Might** - physical strength, endurances, combat prowess
* **Finesse** - precision, agility, fine motor control
* **Wits** - awareness, problem solving
* **Resolve** - mental & physical fortitude
* **Influence** - social skills
* **Guile** - adaptability, resourcefulness

Each character can have a standard array in each of the six skills. \`[+3, +2, +1, +1, +0, -1]\` or the character's points can be distributed in any means fashion as long as they follow the following rules:

* Total of the six modifiers equals +6
* There may only be two +3 skills
* There may only be two -1 skills
* Modifiers may not go above +3 or below -1

Example point distributions:

* **Extremes** - \`[+3, +3, +1, +1, -1, -1]\`
* **Jack of All Trades** - \`[+1, +1, +1, +1, +1, +1]\`

### Harm & Wounds

A character can take harm when in a fight or other environmental reasons. A character stars with 5 Harm and can gain more through advancements.

When a character fills all their Harm units, they take 1 Wound. Wounds can heal over time, but if you have no more room for Wounds your character is dead or at least their story has ended.

Wounds can be either physical or mental and the number of wounds a character starts with is equal to their Resolve + 2 (minimum of 1).

A character may start with a Wound as a flaw. This wound is incurable. Doing allows the character an additional trait above that may take the characters traits beyond the 5 allowed (3 starter traits + 2 additional traits with associated flaws).

### Traits

A character should also have at least three traits to remind you what the character represents.

Traits should be things like Charming, Con man, Deceitful, Athletic. They should be short meaningful phrases to remind you what defines the character.  

If any of these traits is being actively used, you make any roll at advantage.

### Flaws

All characters have flaws.  Each character must have 1 Flaw.  A character may have add up to two additional flaws and gain an extra trait for each flaw taken.

Flaws are things like Has bad breath, Is socially anxious, a Perfectionist, Is afraid of Heights.

When a flaw is actively in use by the character through the situation created the character makes any rolls at disadvantage.  If the outcome is successful the character earns +1XP per scene the flaw is active in.

A character should always have at least one flaw.  If a flaw is overcome by a character arc choose another flaw if you do not have any remaining.

A character may start with a Wound as a flaw. This flaw is incurable. Doing allows the character an additional trait above that may take the characters traits beyond the 5 allowed (3 starter traits + 2 additional traits with associated flaws).

### Character Arcs

A character should always have some sort of goal they are trying to achieve.  Completing the arc awards an additional +2XP.

Character arcs are more than just a quest they provide meaning to the characters life. Things like finding love, building a boat, exploring the wilderness you find yourself lost in, discovering a new planet, surviving the royal hunter games where you are the hunted.

Each completed character arc also adds a new trait (or removes a flaw in the case of Overcoming a Flaw).

#### Example Character Arcs

* Assist someone in need
* Avenge or Take Revenge
* Build/Create Something
* Defeat a Foe
* Explore Something
* Join an Organization
* Mysterious Background
* New Discovery
* Recover from a Wound (or Trauma)
* Repay a Debt
* Rescue Someone or Something
* Solve a Mystery
* Steal Something
* Train a Creature
* Uncover a Secret
* Undo a Wrong
* Overcome a Flaw (removes the flaw)

### Advancement

Characters can buy advancements with +4XP each advancement.  They must purchase all Advancements one time before they can purchase one of the same kind again.

- [ ] +1 to any Skill
- [ ] 1 new trait
- [ ] +1 Harm 
- [ ] +1 Wound

Characters earn XP by completing the following tasks at any time.

* Succeeding in a scene while a flaw is active (+1XP)
* Completing a scene (+1XP)
* Finishing a Quest (+1XP)
* Finishing a Character Arc (+2XP)* 
`;