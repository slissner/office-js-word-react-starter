import * as React from 'react';
import {Button} from 'office-ui-fabric-react';

import './App.scss';

class App extends React.Component<null, null> {
    componentWillMount() {
        Word.run(function (context): any {

        });
    }

    render() {
        return (
            <div className="App">
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <h2>
                                Good job!
                            </h2>
                            <p>
                                You can now start developing!
                            </p>
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <h2>
                                Keep in touch!
                            </h2>
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <ul>
                                <li><a href="http://www.linkedin.com/in/slissner">LinkedIn</a></li>
                                <li><a href="https://twitter.com/samuel_lissner">Twitter</a></li>
                                <li><a href="https://github.com/slissner/">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
