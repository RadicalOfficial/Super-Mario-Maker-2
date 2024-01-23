// Name: Super Mario Maker 2
// ID: smm
// Description: Custom Extension for Super Mario Maker 2 APIs.
// By: Knightbot63 <https://scratch.mit.edu/users/Knightbot63>
// Original: Knightbot63

(function(Scratch) {
  'use strict';
  const vm = Scratch.vm;
  let leveldata;
  let userdata;
  let status = false;
  let userstatus = false;
  let usermii;
  let clearcon = false;
  let ninjidata;
  let ninjistatus = false;
  let uncleared = false;

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Sandbox Error: This must be unsandboxed. Thank you! - Radical');
  }
  class SMM {
    getInfo() {
      return {
        id: 'smm',
        name: 'Super Mario Maker 2',
        color1: "#af0000",
        blocks: [
          {
            blockType: "label",
            text: "Level Data"
          },
          {
            opcode: 'getlevel',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Super Mario Maker 2 level [USER]',
            arguments: {
              USER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '91CMPM7LF'
              }
            }
          },
          {
            opcode: 'getstatus',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Level Status Code is Successful?',
          },
          {
            opcode: 'clearcon',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Level has Clear Condition?'
          },
          {
            opcode: 'uncleared',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Level is Uncleared?'
          },
          {
            opcode: 'arguhatlevel',
            blockType: Scratch.BlockType.EVENT,
            text: "when [CODE]",
            isEdgeActivated: false,
            hideFromPalette: true,
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                menu: "CODE"
              }
            }
          },
          {
            opcode: 'getdatas',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Level [DATA]',
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'title',
                menu: "DATA_MENU",
              }
            }
          },
          {
            blockType: "label",
            text: "User Data"
          },
          {
            opcode: 'getuser',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Super Mario Maker 2 user [USEB]',
            arguments: {
              USEB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "231723D7G"
              }
            }
          },
          {
            opcode: 'getuserstatus',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'User Status Code is Successful?'
          },
          {
            opcode: 'getuserdata',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get User [DATA]',
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'region',
                menu: "USER_MENU"
              }
            }
          },
          {
            blockType: "label",
            text: "Level Image Render"
          },
          {
            opcode: 'getlevelimage',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Level Image [LEVEL]',
            arguments: {
              LEVEL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '91CMPM7LF',
              }
            }
          },
          {
            opcode: 'getmiiimage',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Mii Image',
            hideFromPalette: true,
          },
          {
            blockType: "label",
            text: "Ninji Speedrun Data"
          },
          {
            opcode: 'getlatestninjis',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Latest Ninji Speedruns'
          },
          {
            opcode: 'ninjistatus',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Ninji Speedrun Status Code is Successful?'
          },
          {
            opcode: 'ninjidex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get Ninji Speedrun by index [COURSE]\'s [INFO]',
            arguments: {
              COURSE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              INFO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'name',
                menu: "NINJI_MENU"
              }
            }
          }
        ],
        menus: {
          DATA_MENU: {
            acceptReporters: true,
            items: ['title', 'description', 'author', 'courseid', 'uploaded', 'gamestyle', 'theme', 'difficulty', 'tags', 'comments', 'likes', 'clearrate', 'image', 'worldrecord', 'clear condition']
          },
          USER_MENU: {
            acceptReporters: true,
            items: ['region', 'country', 'name', 'last active', 'mii image', 'pose name', 'hat name', 'shirt name', 'pants name', 'courses played', 'courses cleared', 'courses attempted', 'courses deaths', 'likes', 'maker points', 'endless easy highscore', 'endless normal highscore', 'endless expert highscore', 'endless super expert highscore', 'versus rating', 'versus rank', 'versus won', 'versus lost', 'co-op clears', 'co-op plays', 'first clears', 'world records', 'super world clears', 'uploaded levels', 'tags enabled', 'comments enabled', 'employee']
          },
          NINJI_MENU: {
            acceptReporters: true,
            items: ["name", "description", "upload date", "game style", "theme", "end date", "clear condition"]
          },
          CODE: {
            acceptReporters: false,
            items: [
              {
                text: "Level has Clear Condition?",
                value: " "
              },
              "Level Status Code is Successful?",
              "Level is Uncleared?"
            ]
          }
        }
      };
    }
    async getlevel(args) {
      const response = await Scratch.fetch(`https://tgrcode.com/mm2/level_info/${args.USER}`);
      leveldata = await response.json();
      if (!leveldata.error) {
        status = true;
        if (!leveldata.clear_condition) {
          clearcon = false;
        } else {
          clearcon = true;
        }
        if (!leveldata.world_record) {
          uncleared = true;
        } else {
          uncleared = false;
        }
      } else {
        status = false;
      }
    };
    getstatus() {
      return status
    }
    getdatas({ DATA }) {
      if (!status === true) {
        return status
      }
      switch ( DATA ) {
        case "title":
          return leveldata.name;
        case "description":
          return leveldata.description;
        case "author":
          return leveldata.uploader.name;
        case "courseid":
          return leveldata.course_id;
        case "uploaded":
          return leveldata.uploaded_pretty;
        case "gamestyle":
          return leveldata.game_style_name;
        case "theme":
          return leveldata.theme_name;
        case "difficulty":
          return leveldata.difficulty_name;
        case "tags":
          return leveldata.tags_name;
        case "comments":
          return leveldata.num_comments;
        case "likes":
          return leveldata.likes;
        case "clearrate":
          return leveldata.clear_rate_pretty;
        case "image":
          return `https://tgrcode.com/mm2/level_thumbnail/${leveldata.course_id}`;
        case "worldrecord":
          if (!leveldata.world_record_pretty) {
            return "Uncleared - No World Record"
          }
          return `${leveldata.world_record_pretty} - ${leveldata.record_holder.name}`;
        case "clear condition":
          if (!leveldata.clear_condition) {
            return "No clear condition for this Level."
          }
          return leveldata.clear_condition_name;
      }
    }
    async getuser(args) {
      const response = await Scratch.fetch(`https://tgrcode.com/mm2/user_info/${args.USEB}`);
      userdata = await response.json();
      if (!userdata.error) {
        userstatus = true
      } else {
        userstatus = false;
      }
    };
    getuserstatus() {
      return userstatus
    }
    getuserdata({ DATA }) {
      if (!userstatus === true) {
        return userstatus
      }
      switch ( DATA ) {
        case "region":
          return userdata.region_name;
        case "country":
          return userdata.country;
        case "name":
          return userdata.name;
        case "last active":
          return userdata.last_active_pretty;
        case "mii image":
          {
            usermii = userdata.mii_image;
          }
          return userdata.mii_image;
        case "pose name":
          return userdata.pose_name;
        case "hat name":
          return userdata.hat_name;
        case "shirt name":
          return userdata.shirt_name;
        case "pants name":
          return userdata.pants_name;
        case "courses played":
          return userdata.courses_played;
        case "courses cleared":
          return userdata.courses_cleared;
        case "courses attempted":
          return userdata.courses_attempted;
        case "courses deaths":
          return userdata.courses_deaths;
        case "likes":
          return userdata.likes;
        case "maker points":
          return userdata.maker_points;
        case "endless easy highscore":
          return userdata.easy_highscore;
        case "endless normal highscore":
          return userdata.normal_highscore;
        case "endless expert highscore":
          return userdata.expert_highscore;
        case "endless super expert highscore":
          return userdata.super_expert_highscore;
        case "versus rating":
          return userdata.versus_rating;
        case "versus rank":
          return userdata.versus_rank_name;
        case "versus won":
          return userdata.versus_won;
        case "versus lost":
          return userdata.versus_lost;
        case "co-op clears":
          return userdata.coop_clears;
        case "co-op plays":
          return userdata.coop_plays;
        case "first clears":
          return userdata.first_clears;
        case "world records":
          return userdata.world_records;
        case "last uploaded level":
          return userdata.last_uploaded_level_pretty;
        case "employee":
          return userdata.is_nintendo_employee;
        case "comments enabled":
          return userdata.comments_enabled;
        case "tags enabled":
          return userdata.tags_enabled;
        case "uploaded levels":
          return userdata.uploaded_levels;
        case "super world clears":
          return userdata.unique_super_world_clears;
      }
    }
    getlevelimage({ LEVEL }) {
      console.log("Custom Extension Message: This code is provided by ShovelUtils, I do not own any of this but full credits to TheShovel")
        Scratch.fetch(`https://tgrcode.com/mm2/level_thumbnail/${LEVEL}`)
      .then((r) => r.arrayBuffer())
      .then((arrayBuffer) => {
        const store = vm.runtime.storage;
        vm.addCostume(LEVEL + ".PNG", {
          name: LEVEL + "",
          asset: new store.Asset(
            store.AssetType.ImageBitmap,
            null,
            store.DataFormat.PNG,
            new Uint8Array(arrayBuffer),
            true
          )
        })
      })
    }
    getmiiimage() {
      console.log(usermii)
      Scratch.fetch('https://corsproxy.io/?', usermii)
      .then((r) => r.arrayBuffer())
      .then((arrayBuffer) => {
        const store = vm.runtime.storage;
        vm.addCostume("miidata" + ".PNG", {
          name: "miidata" + "",
          asset: new store.Asset(
            store.AssetType.ImageBitmap,
            null,
            store.DataFormat.PNG,
            new Uint8Array(arrayBuffer),
            true
          )
        })
      })
    }
    clearcon() {
      return clearcon
    }
    async getlatestninjis() {
      const response = await Scratch.fetch("https://tgrcode.com/mm2/ninji_info");
      ninjidata = await response.json();
      if (!ninjidata.error) {
        ninjistatus = true;
      } else {
        ninjistatus = false;
      }
    }
    ninjistatus() {
      return ninjistatus
    }
    ninjidex({ COURSE, INFO }) {
      if (COURSE > 21) {
        return "Length must be under 21"
      }
      if (COURSE < 1) {
        return "Length must be over 0"
      }
      switch (INFO) {
        case "name":
          return ninjidata.courses[COURSE - 1].name;
        case "description":
          return ninjidata.courses[COURSE - 1].description;
        case "upload date":
          return ninjidata.courses[COURSE - 1].uploaded;
        case "game style":
          return ninjidata.courses[COURSE - 1].game_style_name;
        case "theme":
          return ninjidata.courses[COURSE - 1].theme_name;
        case "end date":
          return ninjidata.courses[COURSE - 1].end_time;
        case "clear condition":
          if (ninjidata.courses[COURSE - 1].clear_condition === 0) {
            return false
          } else {
            return true
          }
      }
    }
    arguhatlevel(args) {
      if (args.CODE == "Level has Clear Condition?") {
        return true === Scratch.Cast.toReporter(clearcon)
      } else if (args.CODE == "Level Status Code is Successful?") {
        return true === Scratch.Cast.toReporter(status)
      } else {
        return true === Scratch.Cast.toReporter(uncleared)
      }
    }
    uncleared() {
      return uncleared
    }
  }
  Scratch.vm.runtime.on('BEFORE_EXECUTE', () => {
    // startHats is the same as before!
    Scratch.vm.runtime.startHats('smm_arguhatlevel');
  });
  Scratch.extensions.register(new SMM());
})(Scratch);
