Meteor.publish('Sessions.instructor', function(pprivateKey, phashtag) {
    new SimpleSchema({
        phashtag: {type: String},
        pprivateKey: {type: String}
    }).validate({pprivateKey, phashtag});
    var doc = Hashtags.find({
        hashtag: phashtag,
        privateKey: pprivateKey
    });
    if (!doc) return;
    return Sessions.find({hashtag: phashtag});
});