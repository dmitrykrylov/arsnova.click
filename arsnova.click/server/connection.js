Meteor.setInterval(function () {
    var sessionDeleteAfterIdleMinutes = 10; //Minutes to session is idle
    var now = (new Date()).getTime();
    var sessionDeleteTimeInMilliseconds = (sessionDeleteAfterIdleMinutes * 60 * 1000);
    Hashtags.find({lastConnection: {$lt: (now - sessionDeleteTimeInMilliseconds)}, sessionStatus: {$ne: 0}}).forEach(function (session) {
        //Remove Session-Datas
        Hashtags.update(session._id, {$set:{sessionStatus : 0}});
        AnswerOptions.remove({hashtag: session.hashtag});
        MemberList.remove({hashtag: session.hashtag});
        Responses.remove({hashtag: session.hashtag});
        Sessions.remove({hashtag: session.hashtag});
    });
}, 300000);