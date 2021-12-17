import React from 'react'

const StrictVsFrag = () => {
    return (
        <div className='container'>
            What is it?
            React StrictMode is a feature added in version 16.3 and aimed to help us in finding potential problems in an application.
            If you see warnings in StrictMode, you will likely encounter bugs when trying to use Concurrent React.
            Like Fragment, StrictMode does not render any UI, it only activates checks and adds warnings at runtime.
            StrictMode checks are done in development mode only and will not affect your production build.
            <ul>StrictMode currently helps with:
                <li>Identifying components with unsafe lifecycles</li>
                <li>Warning about legacy string ref API usage</li>
                <li>Warning about deprecated findDOMNode usage</li>
                <li>Detecting unexpected side effects</li>
                <li>Detecting legacy context API</li>
                <li>Verify that the components inside are following some of the recommended practices and warn you if not in the console.</li>
                <li>Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.</li>
                <li>Help you prevent some side effects by identifying potential risks.</li>
            </ul>
        </div>
    )
}

export default StrictVsFrag
