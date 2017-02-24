# Office-js Word React Starter Kit

Use this starter kit to build office-js word Add-Ins with:

* Microsoft Office JavaScript API
* Microsoft Office Fabric
* React.js
* TypeScript
* Webpack2
* BrowserSync

I decided to publish this, because it took me some time to get all this running. Hope it helps you, get you started quicker!

## Get started

Install npm dependencies:

```
npm install
```

Build the Add-In and start the https server:

```
npm start
```

### Copy the manifest file

#### Mac:

```
cp starter-manifest.xml ~/Library/Containers/com.microsoft.Word/Data/documents/wef
```

Create `wef` folder if it not exists.

In Word, go to `Insert` tab, click on `Add-ins`, and then on the drop down arrow near `My add-ins`. Select your `Developer Add-in`.
  
  Have fun!

#### Windows and others:

See microsoft docs on how to [sideload add ins](https://github.com/OfficeDev/office-js-docs/tree/master/docs/testing) on various platforms.

# License

[MIT](LICENSE), 2017, Just for the starter kit files.

For the dependent software, see their respective license and rights. The author of this starter kit does not claim any ownership rights of that dependent software. 
