import attr from 'ember-data/attr'

import Fragment from 'ember-data-model-fragments/fragment'



export default Fragment.extend({
  userId            : attr('number'),
  login             : attr('string'),
  avatarUrl         : attr('string'),
  url               : attr('string'),
  htmlUrl           : attr('string'),
  followersUrl      : attr('string'),
  followingUrl      : attr('string'),
  gistsUrl          : attr('string'),
  starredUrl        : attr('string'),
  subscriptionsUrl  : attr('string'),
  organizationsUrl  : attr('string'),
  reposUrl          : attr('string'),
  eventsUrl         : attr('string'),
  receivedEventsUrl : attr('string'),
  type              : attr('string'),

  siteAdmin : attr('boolean'),
})
