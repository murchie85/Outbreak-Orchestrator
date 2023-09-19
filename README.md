# Outbreak Orchestrator

![](img/cover.png)

In "Outbreak Orchestrator," players navigate a microscopic world, using fungi, parasites, and plants to control an ecosystem. From starting with fungal spores to manipulating larger creatures and human behavior, players enhance their abilities by collecting biological materials and delving into the realm of mind-controlling organisms. The gameplay combines strategy and clicker elements, allowing players to research, automate collections, and even influence global organizations, all while managing monetization aspects. Success is marked by system automation, innovations in mind control, and expanding one's domain, aiming to orchestrate a grand biological outbreak that decides the destiny of species and civilizations.


[BACKLOG](IMPROVEMENTS.md)

# NOTES

- Alternate name: Brain Root
- **NOTE TO SELF**: Pace yourself, step by step, no rush. 
- **Remember**, the key to a successful clicker game is the **sense of progression**, so ensuring players feel rewarded and can upgrade or evolve their fungi will be essential!
- Add in plot, you need to collect high volumes to deeply understand them.

# JOBS

Fully draw out all the boxes for shrooms, parasites, plants and viruses




# CHOSEN THEME 

## MECHANISM



- **Collection**: Gather Insect remnants (mainly ants).
- **Research**: 
  - Hit 100-click threshold -> Initiate study.
  - Allocate effort % for research; gain Research Points (RP).
  - Reach Research Level 1.
  - Unlock 'Initial investigation'.
  - Unlock 'Deep insight' -> Click power x2.
  - Unlock 'Zombify'.
- **Consumption**: 
  - Matter degrades after study and over time.
- **Automation**: 
  - Unlock 'Zombie Ants' -> Automate collection.
- **Harvest Resources**: 
	- Ants can harvest simple matter
	- Birds can harvest more complex matter ...
- **Economy**:
  - Start selling dead ants to individuals and institutes.
  - Price influenced by supply & demand.
  - Use money for equipment and storage upgrades.
  - Invest in demand-boosting unlockables with RPs.   
- **Refinement**: 
  - Convert remnants to refined products (e.g., powder).
- **Transition**: Meet RP & collection goals -> Unlock Phase 2: Rodent remnants.


GOAL: Multiple item types ticking up in their boxes within a  parent box
GOAL: User expands, taking on more, then taking over institutions and the world









# FULL DESIGN

# INTRO 

Game Intro: story about your job

# PHASE 1: Dabbling with Biology

## Collect Insect remnants (various ants)

- Ants collected
- Organic matter collected
- `COLLECT MECHANISM`: Collect button = Ant Remnants

**NOTIFY ONWARDS** IF Ants > 300: WARNING, DECOMPOSITION MECHANISM, ANTS = --%ANTS


## UNLOCK RP (50 RP)

- UNLOCK BOX: 'Research'.
- RP score revealed
- Study Button Revealed
- Notify "Have a play"

`CONSUMPTION MECHANISM`: Research button = ++RP , -- Ant Remnants


## DECOMPOSITION (100 ANTS)

**Notify** - "Collected matter ticks down from losses due to being discarded after study."


## First RP objective  (100RP)

- UNLOCK BOX: 
				'Reasearch Lv 1: Initial investigation'.
- Studied Bar revealed
- Focus bar revealed
- Research LV 1 displayed
**Notify** "you can now research your collected matter. "

ON COMPLETION: 
				Give some gift

## LV 2 (200 RP)

- UNLOCK BOX: 
				Click unlock box to research Lv 2 (efficiency message)
- Research bar changes colour

ON COMPLETION:  Ugrade=everyclick multiplied by 2


## LV 3 Mutator (400RP)

- UNLOCK BOX: 
				"Mutator - gain theoretical insights into mutating the ant brain after a high volume of research specimins have been gained",

				convert % of decomposed matter into useful base organic material

- Research bar changes colour

ON COMPLETION: Gain some resources, chemicals from decomposed matter 

## LV4 RESEARCH ZOMBIFICATION (600RP)

- UNLOCK BOX: 
			 Zombify Automation ...research development on automating ants to do your bidding

ON COMPLETION:
	UNLOCK BOX: 
  				Zombify my ants - ressurect corpses into your undead army. 

  				Then you get zombie army box appear

  				Ants = Mission = nothing

## LV 5 HARVEST CORPSES
- UNLOCK BOX: 
				"Embew your undead army to collect corpses for you"




EARLY BATTLE MAP: POSSIBLY YOUR ANTS, BATTLE OTHER ANTS, 

DISPOSER AUTOMATER TICK DOWN

ORGANIC MATTER CONVERTER TICK DOWN MATTER TICK UP ...
KEEP SIMPLE...


9. You can begin selling matter to people and Universities
9.1. Supply and Demand impacts price 
9.2. Unlockables you can buy with money, research points help increase demand. 
10. Money to buy more research equipment (unlock them)
12. Money can buy you better storage options (increasing your max)
11. Equipment unlocks new abilities to study (i.e. increased automation efficiency, reduce decomposition loss, new abilities - they can collect resources for you etc.)
12. Once you have enough RP and collected ant remnants you can Refine them ant remnants into something better like a powder, that powder along with items from phase 2 can be combined into something new also.

**FINALLY** Once a certain threshold met, you unlock the ability to collect a different biological resource i.e. next one is rodant remnance. This moves to Phase 2


### Variables for Phase 1:

Collected matter, Collected Ant remnants, RP research points, Study Split %, Research Level, Consumption Rate (hidden), Ant Research Unlock Lv 1, Lv2, Lv3. Automation (collection) %, Decomposition Rate, Money, Available_buyers_antRemnants. Phase1_Unlocks = {"research equipment 1"...}, collection_multiplie. Available_buyer_demand_antRemnants.
EVENTS: {"Biological fairs", "Insect Expo"}. Public Support level

GLOBAL

`collectedMatter`: Total matter collected.
`ResearchLevel`: Represents the overall level of the player like 'rookie', 'frankenstein', 'master', etc.
`RP`:
`money`: Current funds.
`publicSupportLevel`:


- **Collective Data**:
  - `antRemnants`: Amount of ant remnants.
  - `researchPoints`: Accumulated research points.

  
- **Ant-Related Research & Consumption**:
  - `antStudyFocus`: Focus allocated to ant remnants research (formerly `antStudyEffortPercent`).
  - `antConsumptionRate`: Rate at which ant remnants are used/lost.
  - `antResearchUnlockLv1`: Boolean for whether Level 1 ant research is unlocked.
  - `antResearchUnlockLv2`: Boolean for Level 2.
  - `antResearchUnlockLv3`: Boolean for Level 3.
  - `antRemnantsResearchLevel`: Current ant research level.
  
- **Ant-Related Economic & Automation**:
  - `antAutomationPercent`: Percentage of ant collection that's automated.
  - `antDecompositionRate`: Rate at which ant remnants decompose naturally.
  - `antAvailableBuyers`: List or array of buyers for ant remnants. 
  - `phase1Unlocks`: Object storing unlocked items like `{"antResearchEquipment1": false, "antResearchEquipment2": false, ...}`.
  - `antCollectionMultiplier`: Multiplier effect on ant collection.
  - `antBuyerDemand`: Object or array storing demand metrics for each ant buyer type.
  
- **Ant-Related Events & Support**:
  - `antEvents`: Array with upcoming events related to ants like `["Ant Biological fairs", "Ant Insect Expo"]`.
  - `publicSupportLevel`: Public sentiment or support level related to ants.



LOGIC:

Higher antStudyFocus the faster it consumption ticks down. 




## UNLOCKS 

- Automation
- Improved Automation 
- Collection multiplier
- New Buyers: First you can only sell to weirdoes, then drug addicts, then University students, then universities, then Big Pharma and so on. For Phase one, only will be Weirdoes.  
- Educaiton and Outreach programs: Gain Public support, increases price and interest. 
- Once Phase 2 is unlocked, you can maybe trade or convert your Insect remnants for rodant remnants at a price/rate of 0.25 to 1 ..still thinking aabout this. 



# PHASE 3 PLANTS

- Revolutionary drugs help you take over big pharma


# PHASE X MUTANT ARMY

- Decrease & Increase button Like von neuman drone design
- Explore, speed, Infection rate, Mutation Rate, Matter gathering.
- Collonise towns, cities, countries... 
- NEWS UPDATE: The Mutant Horde has taken Greece (+10000 domination)

2. A single button you tap to collect your first fungal item or insect item
3. Sell what you can to low tier buyers
- A increase/decreaste button to adjust % of fungi army, parasite army, plant army, another for exploration rate, infection rate, worker production, collector production etc. 










## ORDERED LIST

- SELL
	- Weirdoes, Smugglers for medicine, University students, then universities, then Big Pharma 
- BUY
	- Extra Storage, Support Equipment, Pay off police, Study equipment

- UNLOCK: Virus creator 


## FEATURES TO UNLOCK

- Add new collectable thing i.e. fungal fragment
- Invention! Simple rodent controller 
- Automate collection
- Collection Rate
- Study Allocation efficiency level up
- Research level Up
- Stealth Level UP  

- Appease/influence/Take over:
	- Big pharma
	- Animals organisations
	- Stock Market
	- Governments
	- Alien civilizations

- Events
	- FUNGUY! A new rockband to gain global support


## Achievements & Progression mechanism example




- Research level upgrade
- Time invested efficiency upgrade
- Influence: Big pharma, Animal orgs, Stock Market, Government, Global Public
- Take over: All those above
- Appease: all those above (maybe first stage)

## Future


- COOPT UNI STUDENTS
	- PROPAGANDA: "INCREASE FUNGAL RIGHTS"
	- THEN CONSUME THEM 
	- PSYOPS IT
- WORLD BATTLE MAP
	- Take France, Take Belgium, Take Vietnam
- ALLIANCES
	- LEAVE SMALL GROUPS OF HUMANS ALONE
- SYMBIOSIS
	- TREAT CERTAIN GROUPS AS NEUTRAL
- HUMANS PUSH BACK
	- They create vaccines
	- you need to unlock counters


What's missing:

- clarity around money (or other similar thing to get support items, influence)
- Maybe some computer related stuff to get control over global IT systems?
- Other? Suggestions?








# VISUALS

- Can show zombies as dots consuming others






# GENERAL THEME 

Possibly needs sorting 

**1. Early Game Mechanics - Insects and Parasites:**
   
   - **Starting Point**: You're a budding scientist studying parasites. You collect basic materials like Rodent Remnants, Feather Fragments, and Insect Integuments.
   
   - **Selling & Money**: Early on, these are sold to universities and labs for research. This gives you funds.
   
   - **Automation**: As you progress, you can create basic parasite traps, breeding habitats, and deploy controlled animals to fetch these materials for you.
   
   - **Research Points (RP)**: With every new specimen, you gain research points. These are critical for unlocking new levels, abilities, and automation tools.
   
   - **First Major Breakthrough**: Your research allows you to unlock basic control over rodents.

**2. Intermediate Game Mechanics - Mushrooms and Fungi:**

   - **Unlocking Fungi Studies**: After reaching a particular RP threshold, fungi become available.
   
   - **Fungi Collection**: Start with basic mushrooms like Spore Sacks. As your RP increases, unlock new and exotic fungi.
   
   - **Advanced Automation**: Use fungi to create spore traps and bio-reactors. This helps to amplify your collection rate.
   
   - **Fungal Control Over Animals**: With more advanced fungi, control larger animals, each with unique collection rates and abilities.

**3. Advanced Game Mechanics - Plants & Global Influence:**

   - **Plant Control**: After sufficient RP, tap into plant networks. They can be used to harvest resources, influence areas, or produce advanced compounds.
   
   - **Global Influence and Monetization**: Start by monopolizing the pharmaceutical market with revolutionary drugs. Control over animal organizations allows for advanced experimentation without ethical boundaries. Stock market control gives immense funds, while government control aids in avoiding legal repercussions.
   
   - **Global Infrastructure Control**: With sufficient funds, you can invest in tech companies. This opens the door for cybernetic enhancements, digital surveillance, and control over global IT systems. Here's where the computer element can come in.

**4. End Game and World Domination:**

   - **Create Hybrid Entities**: Use your vast resources to invent mutants. These entities combine the strengths of parasites, fungi, and plants.
   
   - **Global Takeover**: Use your hybrids to influence global leaders, public opinion, and institutions. Eventually, manipulate the masses and control their will.
   
   - **Galactic Exploration**: Use your vast wealth to invest in space exploration. Seed other planets with your creations and expand your domain.

**Additional Mechanics and Ideas:**

   - **Stealth & Subterfuge**: With increasing influence and power, there's also increased attention. Allocate funds to pay off police, lobby governments, and influence media to keep your activities hidden.

   - **Challenges & Threats**: Face challenges from rival scientists, ethical committees, global coalitions, etc. Counteract them with your resources, mutants, or influence.

   - **Economic Mechanism**: Introduce supply-demand mechanics. As you monopolize markets, the prices of goods, research, and influences can fluctuate.

   - **Support Items & Upgrades**: Use funds to purchase advanced labs, hire other scientists for collaborations, buy out companies for resources, or invest in R&D for faster progression.

   - **Random Events**: To keep gameplay engaging, introduce random events. These can range from natural disasters affecting your resources to breakthroughs doubling your RPs.

Your game has the potential for complexity, intrigue, and a lot of strategic depth, similar to Universal Paperclips but in a biological domain. Remember to have periodic check-ins with the player to keep them engaged and provide constant challenges and rewards.


# Discarded Ideas 

- Zombie simulator
	- experiment with diseases 
	- experiment with zombie animals
	- upgrade research level
	- show zombies as dots eating up crowds

- Hentai influencer

- Drone Commander [crawlers, flyers...space]

# ADVERTISING

- A new intelligence will emerge



# EXAMPLES FROM UNIVERSAL PAPERCLIPS

![](https://i.pinimg.com/originals/c3/3d/49/c33d49e97f97a5100ad82624da9ce847.jpg)


![](https://lofi-gaming.org.uk/wp-content/uploads/2017/11/paperclips-1.png)

![](https://assetsio.reedpopcdn.com/universal.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp)

## Sample Mechanism from universal paperclips 

- Collection button
- + - price 
- Buy wire 
- Auto clippers

- Upgrade: 'market level'
- Upgrade: Auto buy wire

- Unlock, cheaper wire
- more wire
- faster auto clipper

INFO  Display

- Funds
- Unsold inventory
- price per clip
- marketing
- public demand



# FULL SYNOPSIS 

In "Outbreak Orchestrator," players embark on a unique journey through the microscopic world, harnessing the power of fungi, parasites, and plants to manipulate and control a vast ecosystem. Starting with simple fungal spores, players evolve their abilities, collecting various biological materials like Rodent Remnants, Feather Fragments, and Insect Integuments. As they progress, they delve deeper into the world of mind-controlling organisms, unlocking the potential to influence larger creatures and even human behavior.

The game blends elements of strategy and clicker mechanics, requiring players to invest time in research, boost their knowledge levels, and automate collections. Through their endeavors, players can influence and take over pharmaceutical companies, animal organizations, and even world governments, all while balancing the need to appease these entities. Monetization plays a role as players use funds for storage, equipment, influence, and keeping their operations covert.

Achievement is marked by unlocking new collectables, automating systems, inventing mind-controlling mechanisms, upgrading research capabilities, and expanding their influence from Earth to the universe. The overarching goal is not just to observe but to orchestrate a grand biological outbreak, determining the fate of entire species and civilizations.