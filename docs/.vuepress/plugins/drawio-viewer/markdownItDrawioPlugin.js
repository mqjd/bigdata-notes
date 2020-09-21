const { hash } = require('@vuepress/shared-utils')

module.exports = function DrawioviewerPlugin (md, options = {}) {

  // Handle ```drawio blocks
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const { info } = tokens[idx]
    if (info.trim(' ') === 'drawioviewer') {
      return drawioViewRender(tokens, idx)
    }
    const rawCode = fence(...args)
    return `${rawCode}`
  }

  // Takes the context of the parsed section and turns in into a Mermaid component
  function drawioViewRender (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const key = `drawio_viewer_${hash(idx)}`
    const { content } = token
    md.$dataBlock[key] = content
    return `<drawioviewer id="${key}" :url="$dataBlock.${key}" />`
  }


  md.renderer.rules['drawioviewer'] = drawioViewRender
}