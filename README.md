[![Run on Repl.it](https://repl.it/badge/github/Kuu44/RoutineyBot)](https://repl.it/github/Kuu44/RoutineyBot)
# RoutineyBot
A Discord Bot for notifying of routines

## Version History
### Alpha
- Created the Bot
### v1.0
- Heroku _procfile_ and _npm_ audit fixes
- created _rt! current_, _rt! tomorrow_, _rt! day_ commands
- created _info.json_ for database storage
### v1.1
- created _rt!help_, _rt!setChannel_, _rt!notifications_ commands
- changed output from simple text to Discord Embeds
- created _commands_ folder
- moved all commands out of _bot.js_ into their own files in _commands_ folder
### v1.2
- created _functions_ folder
- replaced all redundant lines of code in all commands with specific functions and defined those functions in files inside _functions_ folder
- finished scheduling system
### v2 - The Big One
- changed info.json into info.js and rewrote all hardcoded database info, replacing it with variables for easier changing of database
- destructured lots of functions and commands further into smaller modules
- implemented the database into scheduling system for:
- **New feature**: Routine notifications (_Currently only works in one server at a time_)
- created _sendCurrent_ and _createMessage_ commands to easily create and post Embeds
- collected all time functions into file _timeConvert.js_
- Deployed the bot to Heroku 🎉
#### v2 patch1
- fixed Heroku's deployment problems
#### v2 patch2
- thought I fixed Heroku's deployment problems
#### v2 patch3
- third time's the charm?
#### v2 patch4
- nope
#### v2 patch5
- FIXED HEROKU'S FRIGGIN DEPLOYMENT PROBLEMS
#### v2 patch6
- Fixed Heroku's timezone issue
#### v2 patch7
- did u really expect me to do it in one try?
#### v2 patch8
- fixed Heroku's timezone issue
### v2.1
- fixed Heroku's wrong date issue
- added a notification for today's routine everyday
- fixed wrong timing on Saturday notifications
- standardized _info.js_ to contain different data by server(_Notifications now work on all servers_)
- modified all code to adapt to new database changes
- added commands to the _howru_ command
- _rt! next_ command added
- _rt! setchannel_ and _rt! args_  made dev-only commands
- subscribed 3 new servers to the bot
#### v2.1 patch1
- fixed weird promise rejection error (with _current_ and _next_ commands)
#### v2.1 patch2
- fixed faulty database error
#### v2.1 patch3
- fixed error with notifications
#### v2.1 patch4
- database patch
#### v2.1 patch5
- made preClass notifications and start notifications toggle-able
#### v2.1 patch6
- added 074BCT database
- changed _teachers_ array to contain _server IDs_ as keys
- added links of classes in the _notifications_
### v2.2
- fixed notification systems not showing links
- created auto-notifications (_without needing the_ turn on _command_)
- added some _modifications_ 😋
- added _giveToday_ function as a way to call the _today_ command
#### v2.2 patch1
- modified class links after the MS Teams Update
#### v2.2 patch2
- fixed bug with today's schedule not printing in the morning