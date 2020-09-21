const DrawioViewer = {
    name: 'Drawioviewer',
    props: {
        url: {
            type: String,
            required: true
        },
    },
    render (h) {
        return h('div', {
            domProps: {
                style: 'width: 100%'
            }
        })
    },
    mounted () {
        debugger
        let renderDiv = this.$el
        var d = {
            "highlight": "#00afff",
            "lightbox": false,
            "nav": true,
            "resize": true,
            "toolbar": "pages zoom layers",
            "url": this.url
        }
        GraphViewer.getUrl(d.url, function(e) {
            e = mxUtils.parseXml(e);
            e = new GraphViewer(renderDiv, e.documentElement, d);
        })
    }
}

export default ({ Vue }) => {
    Vue.component('Drawioviewer', DrawioViewer)
}