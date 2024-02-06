// Name: Super Mario Maker 2
// ID: smm
// Description: Extension for getting Super Mario Maker 2 Course World data.
// By: RadicalOfficial <https://scratch.mit.edu/users/Knightbot63>

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
  let superworlddata;
  let superworldstatus = false;
  let endlessdata;
  let endlessstatus = false;

  var experimental = false;
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run unsandboxed');
  }
  const blocksIcon = "data:image/png;base64,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";
  class SMM {
    getInfo() {
      return {
        id: 'smm',
        name: 'Super Mario Maker 2',
        color1: "#E7081E",
        blockIconURI: blocksIcon,
        docsURI: 'https://github.com/RadicalOfficial/Super-Mario-Maker-2/blob/main/README.md',
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
            opcode: 'arguhatlevel',
            blockType: Scratch.BlockType.HAT,
            text: "when [CODE]",
            isEdgeActivated: true,
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                menu: "CODE"
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
          },

          "---",
          {
            blockType: "label",
            text: "Beta Blocks"
          },
          {
            opcode: "superworlds",
            blockType: Scratch.BlockType.COMMAND,
            text: "get Super Worlds",
            hideFromPalette: !experimental
          },
          {
            opcode: "getsuper",
            blockType: Scratch.BlockType.COMMAND,
            text: "get Super World by id [ID]",
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Maker ID"
              }
            },
            hideFromPalette: !experimental
          },
          {
            opcode: "endlesscourses",
            blockType: Scratch.BlockType.COMMAND,
            text: "get [NUMB] Endless [DIFFS] courses",
            hideFromPalette: !experimental,
            arguments: {
              NUMB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              DIFFS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Easy",
                menu: "DIFF_MENU"
              }
            }
          },
          {
            func: "experimental",
            blockType: Scratch.BlockType.BUTTON,
            text: "Beta Blocks",
            hideFromPalette: experimental
          },
          {
            func: "closeEx",
            blockType: Scratch.BlockType.BUTTON,
            text: "Close Beta Blocks",
            hideFromPalette: !experimental
          },
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
            items: ["Level is Uncleared", "Level has Clear Condition", "Level status code is successful"]
          },
          DIFF_MENU: {
            acceptReporters: true,
            items: ["Easy", "Normal", "Expert", "Super Expert"]
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
      switch (DATA) {
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
    arguhatlevel({ CODE }) {
      // This block must be green flag clicked in order to refresh
      switch (CODE) {
        case "Level has Clear Condition":
          return clearcon;
        case "Level status code is successful":
          return status;
        case "Level is Uncleared":
          return uncleared;
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
      switch (DATA) {
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
    uncleared() {
      return uncleared
    }
    experimental() {
      var category = confirm("This category contains experimental blocks used in the next update.\nAre you sure you want to continue?")
      if (category === true) {
        experimental = true;
        Scratch.vm.extensionManager.refreshBlocks();
      } else {
        // Nothing here
      }
    }
    closeEx() {
      var category = confirm("Are you sure you want to close the experimental blocks?\nAny usage will be deleted.")
      if (category === true) {
        experimental = false;
        Scratch.vm.extensionManager.refreshBlocks();
      } else {
        // Nothing here
      }
    }
    async superworlds() {
      const response = await Scratch.fetch("https://tgrcode.com/mm2/get_super_worlds")
      superworlddata = await response.json();
      if (superworlddata.error) {
        { superworldstatus = false }
      } else {
        { superworldstatus = true; }
      }
    }
    getsuper() {
      //
    }
    
    async endlesscourses({ DIFFS, NUMB }) {
      var difficulty = null;
      switch (DIFFS) {
        case "Easy":
          difficulty = "e";
        case "Normal":
          difficulty = "n";
        case "Expert":
          difficulty = "ex";
        case "Super Expert":
          difficulty = "sex";
      }
      if (NUMB < 1 || NUMB > 300) {
        endlessstatus = false;
      }
      const response = await Scratch.fetch(`https://tgrcode.com/mm2/search_endless_mode?count=${NUMB}&difficulty=${difficulty}`)
      endlessdata = await response.json();
      if (endlessdata.error) {
        endlessstatus = false
      } else {
        endlessstatus = true
      }
    }
  }
  Scratch.extensions.register(new SMM());
})(Scratch);
