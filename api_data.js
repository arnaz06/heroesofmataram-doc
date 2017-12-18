define({ "api": [
  {
    "type": "post",
    "url": "api/user/deletedata",
    "title": "Delete Data User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer 09f0a3f774d713dbd9ec86746447b774fa4e73136bd1d7e4cc\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"Kevin123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "file",
            "optional": false,
            "field": "username",
            "description": "<p>string username username yang ingin dihapus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "  HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"msg\": \"delete success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"success\": false,\n     \"status\": \"ERROR\",\n     \"msg\": \"SOMETHING WENT WRONG\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiUserDeletedata"
  },
  {
    "type": "post",
    "url": "api/user/loaddata",
    "title": "Load Data",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer 09f0a3f774d713dbd9ec86746447b774fa4e73136bd1d7e4cc\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": kevin123\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>file user beruba JSON</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"success\": true,\n    \"status\": \"OK\",\n    \"msg\": \"load data success\",\n    \"user\": {\n        \"_id\": \"5a368c7231ea132f13ae9002\",\n        \"updatedAt\": \"2017-12-17T15:25:38.295Z\",\n        \"createdAt\": \"2017-12-17T15:25:38.295Z\",\n        \"Ganjel_Value\": 0,\n        \"WeeklyRewardTaken\": true,\n        \"After3BattleBool\": true,\n        \"SpellScrollReady\": false,\n        \"GrupCounter\": 0,\n        \"RandomBoxReady\": false,\n        \"MaterialBoxQuantity\": [],\n        \"WeekCounter\": 0,\n        \"DailyGet\": false,\n        \"spelllist\": [],\n        \"DayOfWeek\": \"kosong\",\n        \"Pencarian_Tut\": false,\n        \"PencarianMaterialCount\": [],\n        \"WeaponUniqueID\": 0,\n        \"Gold\": 0,\n        \"herolist\": [],\n        \"fullgamestart\": false,\n        \"Announ_Hide\": false,\n        \"Ganjel_bool\": false,\n        \"BGMFirst\": false,\n        \"HideFleeTime\": 0,\n        \"StageCounter\": 0,\n        \"Announ_Num\": [],\n        \"DailyRewardCounter\": 0,\n        \"Misi_Tut\": false,\n        \"ShoeUniqueID\": 0,\n        \"WeeklyRewardDone\": false,\n        \"TokoBahan_Tut\": false,\n        \"ClashedTutorial\": false,\n        \"FleeWarning\": false,\n        \"WeeklyDailyRewardCount\": 0,\n        \"BattleTutorial\": false,\n        \"CooldownFind\": false,\n        \"RandomQuestBool\": false,\n        \"TutorialProgress\": 0,\n        \"PencarianMaterial\": [],\n        \"shoelist\": [],\n        \"ResetDailyReward\": false,\n        \"VIP\": false,\n        \"hero1\": {\n            \"Attack_Speed\": 0,\n            \"DefensePower\": 0,\n            \"Defend\": 0,\n            \"ShoeSet\": false,\n            \"CriticalChance\": 0,\n            \"HP\": 0,\n            \"WeaponSet\": false,\n            \"ShoeUniqueID\": 0,\n            \"MaxLevelBool\": false,\n            \"PantUniqueID\": 0,\n            \"TorsoSet\": false,\n            \"PantSet\": false,\n            \"Attack\": 0,\n            \"Kategori\": \"\",\n            \"Slot\": -1,\n            \"ID\": 0,\n            \"WeaponUniqueID\": 0,\n            \"HeroExp\": 0,\n            \"Level\": 1,\n            \"TorsoUniqueID\": 0\n        },\n        \"initialgame\": false,\n        \"firstDaily\": false,\n        \"MaxSlotHeroes\": 0,\n        \"SpellScrollQuantity\": 0,\n        \"PencarianTimer\": 0,\n        \"Bahan\": [],\n        \"Device_ID\": \"\",\n        \"hero2\": {\n            \"Attack_Speed\": 0,\n            \"DefensePower\": 0,\n            \"Defend\": 0,\n            \"ShoeSet\": false,\n            \"CriticalChance\": 0,\n            \"HP\": 0,\n            \"WeaponSet\": false,\n            \"ShoeUniqueID\": 0,\n            \"MaxLevelBool\": false,\n            \"PantUniqueID\": 0,\n            \"TorsoSet\": false,\n            \"PantSet\": false,\n            \"Attack\": 0,\n            \"Kategori\": \"\",\n            \"Slot\": -1,\n            \"ID\": 0,\n            \"WeaponUniqueID\": 0,\n            \"HeroExp\": 0,\n            \"Level\": 1,\n            \"TorsoUniqueID\": 0\n        },\n        \"JumlahBahan\": [],\n        \"SlotGear\": 0,\n        \"QuestTimer\": 0,\n        \"feature_Open\": 0,\n        \"TokoBahanTimer\": 0,\n        \"questgoal\": [],\n        \"torsolist\": [],\n        \"DailyRewardReady\": false,\n        \"SpellScrollChance\": 0,\n        \"BoxReward\": [],\n        \"TorsoUniqueID\": 0,\n        \"Limited_Offer\": false,\n        \"StoryCounter\": 0,\n        \"Lumpia_Value\": 0,\n        \"TokoBahanCounter\": 0,\n        \"MaterialBoxID\": [],\n        \"FindInit\": false,\n        \"StoryON\": false,\n        \"PencarianCounter\": 0,\n        \"Tier_EXP\": 0,\n        \"materialunlock\": false,\n        \"PencarianID\": 0,\n        \"FleeInit\": false,\n        \"Tier_Level\": 0,\n        \"PantUniqueID\": 0,\n        \"EpisodeProgressCounter\": 0,\n        \"Lumpia_bool\": false,\n        \"PencarianInit\": false,\n        \"materiaList\": [],\n        \"pantlist\": [],\n        \"SystemTimer\": \"-8586886288299252884\",\n        \"Username\": \"Kevin123\",\n        \"FleeTarget\": false,\n        \"AfterBattleBool\": false,\n        \"Tier_MAX_EXP\": 0,\n        \"CooldownFlee\": false,\n        \"tempquest\": [],\n        \"BoxBool\": [],\n        \"MaxSlotGear\": 0,\n        \"Arena_Tut\": false,\n        \"QuestDoneCounter\": 0,\n        \"weaponlist\": [],\n        \"__v\": 0,\n        \"deleted\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"success\": false,\n     \"status\": \"ERROR\",\n     \"msg\": \"SOMETHING WENT WRONG\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiUserLoaddata"
  },
  {
    "type": "post",
    "url": "api/user/savedata",
    "title": "Create User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer 09f0a3f774d713dbd9ec86746447b774fa4e73136bd1d7e4cc\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"file\": username-savedata.txt\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>file user berupa JSON</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "  HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"msg\": \"user saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"success\": false,\n     \"status\": \"ERROR\",\n     \"msg\": \"SOMETHING WENT WRONG\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiUserSavedata"
  },
  {
    "type": "post",
    "url": "api/user/updatedata",
    "title": "Update Data User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer 09f0a3f774d713dbd9ec86746447b774fa4e73136bd1d7e4cc\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"file\": username-updatedata.txt\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>file user berupa JSON</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "  HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"msg\": \"data updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"success\": false,\n     \"status\": \"ERROR\",\n     \"msg\": \"SOMETHING WENT WRONG\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiUserUpdatedata"
  }
] });
