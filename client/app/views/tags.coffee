BaseView = require 'lib/base_view'

module.exports = class TagsView extends BaseView

    initialize: ->
        super
        @$el.hide().tagit
            availableTags: app.tags.toArray()
            placeholderText: t 'add tags'
            afterTagAdded  : @tagAdded

        # hack to prevent tagit events
        @duringRefresh = false

        return this

    tagAdded: (ev, ui) ->
        ui.tag.css 'background-color', ColorHash.getColor(ui.tagLabel, 'cozy')

    getTags: ->
        @$el.tagit 'assignedTags'

    refresh: =>
        @duringRefresh = true
        @$el.tagit 'removeAll'
        for tag in @model.get('tags')
            @$el.tagit 'createTag', tag
        @duringRefresh = false

