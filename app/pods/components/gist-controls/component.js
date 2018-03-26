import Component from '@ember/component'



export default Component.extend({
  isEditing       : null,
  isEditable      : null,
  isOwn           : null,
  isAuthenticated : null,
  hasDirtyFields  : null,
  saveIsRunning   : null,
  cloneIsRunning  : null,
  forkIsRunning   : null,

  editAction   : null,
  cancelAction : null,
  saveAction   : null,
  cloneAction  : null,
  forkAction   : null,
  revertAction : null,

})
