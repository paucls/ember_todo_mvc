/**
 * Created by estebp on 22/05/2014.
 */
Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            // Create the new model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // Clear text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },

        clearCompleted: function() {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },

    remaining: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),

    completed: function() {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted')
});