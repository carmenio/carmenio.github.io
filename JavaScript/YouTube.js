// JavaScript Document

    var channelID = "UCJPynmam-TseDbbxcjAVomg";
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, 
	function(data) {
		var link1 = data.items[0].link;
		var id = link1.substr(link1.indexOf("=")+1);	
    $("#youtube_video-1").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
		var link2 = data.items[1].link;
		var id2 = link2.substr(link1.indexOf("=")+1);
    $("#youtube_video-2").attr("src","https://youtube.com/embed/"+ id2 + "?controls=0&showinfo=0&rel=0");
		var link3 = data.items[2].link;
		var id3 = link3.substr(link3.indexOf("=")+1);
    $("#youtube_video-3").attr("src","https://youtube.com/embed/"+ id3 + "?controls=0&showinfo=0&rel=0");
	
    });
	
	$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
		key: "AIzaSyBbTv3HB8G6XIE4WNKUQuyOWlS9WkWmRCY",
		part: "snippet,statistics",
		id: "b-5YyHCj3f0"//Need the id of the video eg. "b-5YyHCj3f0" 
	}, function(data) {
		if (data.items.length === 0) {
			$("<p style='color: #F00;'>Error - Video Not Found</p>").appendTo("#video-data-1");
			return;
		
		}
		$("<img>", {
		}).appendTo("#video-data-1");
		$("<h1></h1>").text(data.items[0].snippet.title).appendTo("#video-data-1");
		$("<p></p>").text(data.items[0].snippet.description).appendTo("#video-data-1");
		});

	$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
		key: "AIzaSyBbTv3HB8G6XIE4WNKUQuyOWlS9WkWmRCY",
		part: "snippet,statistics",
		id: "MbDzqQrjxZI"//Need the id of the video eg. "MbDzqQrjxZI"
	}, function(data) {
		if (data.items.length === 0) {
			$("<p style='color: #F00;'>Error - Video Not Found</p>").appendTo("#video-data-2");
			return;
		
		}
		$("<img>", {
		}).appendTo("#video-data-2");
		$("<h1></h1>").text(data.items[0].snippet.title).appendTo("#video-data-2");
		$("<p></p>").text(data.items[0].snippet.description).appendTo("#video-data-2");
		});
	
	$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
		key: "AIzaSyBbTv3HB8G6XIE4WNKUQuyOWlS9WkWmRCY",
		part: "snippet,statistics",
		id: "v5jW4_-WMxY"//Need the id of the video eg. "v5jW4_-WMxY" 
	}, function(data) {
		if (data.items.length === 0) {
			$("<p style='color: #F00;'>Error - Video Not Found</p>").appendTo("#video-data-3");
			return;
		
		}
		$("<img>", {
		}).appendTo("#video-data-3");
		$("<h1></h1>").text(data.items[0].snippet.title).appendTo("#video-data-3");
		$("<p></p>").text(data.items[0].snippet.description).appendTo("#video-data-3");
		});