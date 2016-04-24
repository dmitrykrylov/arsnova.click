import { Template } from 'meteor/templating';

Template.markdownBar.onRendered(function () {
    $('#infoMarkdownButton').tooltip();
    $('#boldMarkdownButton').tooltip();
    $('#headerMarkdownButton').tooltip();
    $('#hyperlinkMarkdownButton').tooltip();
    $('#unsortedListMarkdownButton').tooltip();
    $('#sortedListMarkdownButton').tooltip();
    $('#latexMarkdownButton').tooltip();
    $('#codeMarkdownButton').tooltip();
    $('#commentMarkdownButton').tooltip();
    $('#pictureMarkdownButton').tooltip();
    $('#youtubeMarkdownButton').tooltip();
    $('#vimeoMarkdownButton').tooltip();
});