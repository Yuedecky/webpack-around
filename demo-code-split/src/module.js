import _ from 'lodash'
const exportMsg = _.join(['Another', 'module', 'js'], ' ')
module.exports = {
    name: exportMsg
}