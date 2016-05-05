/*
 * This file is part of ARSnova Click.
 * Copyright (C) 2016 The ARSnova Team
 *
 * ARSnova Click is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ARSnova Click is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ARSnova Click.  If not, see <http://www.gnu.org/licenses/>.*/

import {Template} from 'meteor/templating';
import  * as localData from '/client/lib/local_storage.js';
import {Splashscreen} from '/client/plugins/splashscreen/scripts/lib.js';
import * as hashtagLib from '/client/layout/view_hashtag_management/scripts/lib.js';
import {HashtagsCollection} from '/lib/hashtags/collection.js';
import {EventManagerCollection} from '/lib/eventmanager/collection.js';

Template.home.onRendered(function () {
	if (localStorage.getItem("localStorageAvailable") && localData.getAllHashtags().length > 0) {
		hashtagLib.setHashtagSplashscreen(new Splashscreen({
			autostart: true,
			templateName: "showHashtagsSplashscreen"
		}));
	}
	HashtagsCollection.find().observeChanges({
		added: function (id, doc) {
			if (doc.hashtag === $("#hashtag-input-field").val()) {
				$("#addNewHashtag").attr("disabled", "disabled");
			}
		}
	});
});
