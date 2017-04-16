# react-kwik-jss
Quickly write simple stylesheets in JSS for React components. This is a wrapper around the jss-theme-reactor designed to expose it's simpler features in a simpler and more well-documented way, enabling you to write CSS-in-JS faster and more easily.
## This is a work in progress, hence no documentation.
## Installation
If you're using npm:
```shell
npm install --save react-kwik-jss
```
If you're using the awesome yarn:
```shell
yarn add react-kwik-jss
```
## FAQ
#### What's the benefit of adding another package to my package.json over using the jss-theme-reactor?
Because you spend much less time writing those extra letters, and thus if you want to write smaller code which just works without you needing to know ANYTHING, then this is the thing.
Oh and (up coming), you will be able to write your stylesheets in CSS :333 (and in the distant/near future, you should be able to write those stylesheets in a separate CSS file :3).
#### Why would you want to do any of that?
1. So you write smaller code which just works.
2. The jss-theme-reactor README -> you understand nothing? This is just a minimalistic wrapper with a well documented and easy-to-read API over it to write simple stylesheets easily.
3. You want to write CSS, because you're uncomfortable with the camel-casey CSS-in-JS? This is your ticket (not so fast, it's a WIP).
4. Split your CSS into a separate file :stuck_out_tongue: (again, not so fast bud, it's a WIP again :stuck_out_tongue: )
#### Does it offer any speed improvements?
None at all, it's designed to simply make it simpler and quicker to write JSS and integrate it into your React components using the jss-theme-reactor. It's also designed to provide a better, well-documented API.
#### Why not build over react-jss or aphrodite?
The main purpose of this package is to provide a simpler and more well-documented API over the jss-theme-reactor. react-jss is already excessantly simple, and well-documented, and that's why I see any need at all to wrap react-jss. Regarding aphrodite, it is also quite simple due to the vast documentation provided for it, and I don't see any tangible benefit to wrapping aphrodite in a simpler API either. OTOH the jss-theme-reactor could possibly be more well-documented, making it simpler to understand, hence this library. Yes, the theme-reactor is getting unmaintained (Feb 20, last commit) over react-jss and aphrodite significantly but this was originally devloped to cater to material-ui users to make it simpler to access it's APIs. I see no need to deviate from that :stuck_out_tongue:
#### I'm a material-ui v1.0 user. If this is slightly catered to us, why would I use this over copying from the docs, or over react-jss or aphrodite?
1. material-ui 1.0 is built on jss-theme-reactor. Maintaining consistency and using the same would be a better option.
2. Because the API will be designed to be easy-to-use and thus better to remember :stuck_out_tongue:
3. Most importantly, this package has 0 dependencies other than jss-theme-reactor which is already installed with material-ui. Instead of bringing in an entire new dependency with a huge dependency tree, why not bring in just 9 files of code instead? :stuck_out_tongue:
#### Well, I see no benefit even for that TBH :stuck_out_tongue:
Think there's something that could be better? PR or make an issue. Think there's no benefit at all? No need to use it.