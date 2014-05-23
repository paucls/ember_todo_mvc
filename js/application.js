/**
 * Created by estebp on 22/05/2014.
 */
window.Todos = Ember.Application.create({
    LOG_TRANSITIONS: true
});

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();