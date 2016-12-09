const React = require('react');
const SampleSSR = require('../components/SampleSSR');

var HomeContainer = React.createClass({

    render: function () {
        return (
            <SampleSSR />
        );
    }
});

module.exports = HomeContainer;
