# Super Mario Maker 2
A Scratch Extension getting Super Mario Maker 2 Course World data. Unofficial.

# Getting Started

Here's how to get started with the Super Mario Maker 2 Extension. This full documentation will contain most information about the Extension and it's uses.<br>

**First, you go to the [Official Code](https://github.com/RadicalOfficial/Super-Mario-Maker-2/blob/main/script.js) and click copy!**<br>
Next, go to TurboWarp -> Add an Extension and you should see this screen:
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/fd0ec5d1-da7b-45d0-9624-00ff28b549ef)<br>
You want to click on *TurboWarp* and click Custom Extension:
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/3819bad8-eba0-4e68-a0d7-5a660776e626)<br>
Once clicked, go to the **Text** tab and paste the code. *NOTE: Make sure you click the "Run Extension without Sandbox" or else it won't work!*
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/be597ff2-3da7-45c4-8a82-99d22404aba6)<br>
If you see the tab in the left toolbar, it means that the extension worked!<br>

<br><br>Now let's move onto the blocks!<br>
# Blocks
There are many blocks to play around with, but let's go over some things first!
<br>
**If you ever get this message, Click Allow.** <br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/3d4f6717-8b26-4b97-a1cf-51dc0b28329a)
<br><br>
# Level Data Blocks
The first block you'll most likely see is this block:<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/8fb417b5-fcdf-421f-b8f3-96ad82029de4)<br>
If you click on it, you'll get the data of the Level by its Level ID. Check out [MakerCentral](https://makercentral.io) and put any code you want to see!
## Secondary Blocks
Here are the list of booleans that will return true or false depending on the level ID<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/776a1471-d8bf-4e52-8cab-33c9bd535257)
### Level Status Code is Successful? Block
The block will return true if the Level has been fetched. It will return false if it's an invalid Level ID.
### Level has Clear Condition? Block
The block will return true if the Level has a Clear Condition e.g. Reach the goal after grabbing X coins.
### Level is Uncleared? Block
The block will always return false unless the Level has no World Record, making it uncleared.
## Get Level Reporter
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/cfa6d6d4-7f07-4e09-b8e6-b1d3add2a3e7)
<br>
This reporter will return a value depending on the dropdown. Here are all the dropdowns and their descriptions:
```
title - Get's the level title
description - Get's the level description
author - Get's the level author
courseid - Get's the Level's ID.
uploaded - Upload Date of the Level
gamestyle - Gets the Level Gamestyle. LIST OF GAMESTYLES: SMB, SMB3, SMW, NSMBU, SM3DW
theme - Get's the Level's theme.
difficulty - Get's the Level's difficulty. LIST OF DIFFICULTIES: Easy, Normal, Expert, Super Expert
tags - Get's the level's tags.
comments - Get's the amount of comments in the level
likes - Get's the amount of likes in the level
clearrate - Get's the clear rate percentage. Note: If the level returns 0%, that doesn't mean it's uncleared!
image - Get's the image URL of the Level
worldrecord - Get's the World Record holder of the Level
clear condition - Get's the level's clear condition. If there is none, it will return nothing.
```
> [!NOTE]
> The Reporter will return false for everything when an Invalid Level ID is set.

## When Level ... hat
This hat block works similarly to the booleans but in a hat block. Note that this block is only supported in unsandboxed extensions

# User Data Blocks
The blocks act similar to the Level Data Blocks but they have more usage.
Similar to the Level Data Blocks, to get the data, click on the block below:<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/821f10ab-9dd1-4d0b-8399-9761d79865e8)<br>
If you want to search for users, please visit [MakerCentral](https://makercentral.io)<br>
## Secondary Blocks
List of Blocks in the Category<br>
## User Status Code is Successful? Block
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/5b7f5ecd-f959-4196-8e84-75795891a952)<br>
This block acts similarly to the Level Status Code block but for Maker IDs!
## Get User Reporter
Similar to the Get Level reporter, it will return a value depending on the dropdown. Here are all the dropdowns and their descriptions:
> [!IMPORTANT]
> This list is very long. If you do not want to read it, please skip it.
```
region - Get the Maker's region
country - Get the Maker's country
name - Get the Maker's name
last active - Get the Maker's last online date
mii image - Get the Maker's Mii Image
pose name - Get the Maker's pose name
hat name - Get the Maker's hat name
shirt name - Get the Maker's shirt name
pants name - Get the Maker's pants name
courses played - Get the Maker's amount of Courses that they Played
courses cleared - Get the Maker's amount of Courses that they Cleared
courses attempted - Get the Maker's amount of Courses that they Attempted
courses deaths - Get the Maker's amount of Courses that they died
likes - Get the Maker's total amount of likes
maker points - Get the Maker's Maker Points
endless easy highscore - Get the Maker's Endless Easy Highscore
endless normal highscore - Get the Maker's Endless Normal Highscore
endless expert highscore - Get the Maker's Endless Expert Highscore
endless super expert highscore - Get the Maker's Endless Super Expert Highscore
versus rating - Get the Maker's Versus Rating
versus rank - Get the Maker's Versus Rank (Max: S+)
versus won - Get the Maker's Versus levels they won
versus lost - Get the Maker's Versus levels they lost
co-op plays - Get the Maker's Co-Op plays
co-op clears - Get the Maker's Co-op Clears
first clears - Get the Maker's amount they First Cleared on a stage
world records - Get the Maker's amount they hold the World Record on a Stage.
super world clears - Get the amount of Super World Clears the Maker has.
uploaded levels - Get the number of levels the Maker uploaded
tags enabled - See if tags can be edited on their Stages
comments enabled - See if they have comments enabled
employee - See if the Maker is a Nintendo Employee
```
# Level Image Render
This block gets the Level Thumbnail and puts it as a costume in your sprite!<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/b81ef1c3-0a85-4341-a889-329938bf7e8d)<br>
*The block can be a bit buggy. If there is a problem with the conversion, please send an issue.*
# Ninji Speedruns Data
**DISCLAIMER: The Ninji Speedruns by Nintendo have been discontinued - The data will be the same.**<br>
This category gets Ninji Speedruns Data.
## Get Latest Ninji Speedruns Block
This block gets the latest Ninji Speedruns.<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/2c688f7a-64b9-4c23-8979-48a39a0a7e4a)
## Ninji Speedruns Status Code is Successful? Block
This block acts similarly to the User and Level Status Block.<br>
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/429bec5c-15dc-4a50-943f-208074b4e2bc)
## Get Ninji Speedrun by Index Block
![image](https://github.com/RadicalOfficial/Super-Mario-Maker-2/assets/125277461/c7b7d86c-9a68-48a1-91f3-d2d6476a8590)<br>
This block gets the Ninji Speedrun by Index. There are 22 Ninji Speedruns currently.<br>
**Index Number 1 will give you the latest Ninji Speedrun.**
<br>
Here are all the dropdowns for the reporter:
```
name - Get the Speedrun Name
description - Speedrun Description
upload date - Speedrun's Upload Date
game style - Speedrun's Game Style
theme - Speedrun's Theme
end date - Speedrun's End Date
clear condition - Speedrun's Clear Condition
```
# Beta Blocks
These are currently experimental blocks and may not be in the future update. Please do not use them in your projects as they might be hidden forever in the palette.
# That's a wrap!
That's it for the Super Mario Maker 2 Extension Documentation. If you liked the Extension, please give it a star and follow me on [Scratch](https://scratch.mit.edu/users/Knightbot63)!

# Next Updates...
There will be updates, betas, and more in the official [Scratch Forum](https://scratch.mit.edu/discuss/topic/735271/)

## Bugs, Improvements, Feedback?
You can share your reports on this GitHub repository or the Scratch Forum.
