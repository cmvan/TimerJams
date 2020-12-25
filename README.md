TimerJams is a timer and music Chrome extension that aims to encourage focused work and/or studying and it was created using HTML, CSS,
Javascript, jQuery, and jSON. Upon initially downloading the extension and clicking on the icon in the extensions bar, the user is greeted
with a pleasant welcome page. The user can then click "next" to go to the main extension. There, one will see two timers that are separated
by a music section that contains a form and a default YouTube playlist. The two clocks are an implementation of the TimeCircles jquery
plugin by Wim Barelds, with the first work timer being set to 25 minutes and the second break clock being set to 5 minutes. The times are
specified like so in order to be in line with the Pomodoro technique, a popular time management method to enhance productivity.

With the timers, users have the option to start, stop, and restart the timers as well as navigate to the complementary timer, though the
button to navigate to the break timer is disabled upon initially loading the page. The button directing to the break timer is only enabled
when the work timer reaches zero, acting as a way to signal the user to take a break and start the break timer. The button directing
to the work timer is simultaneously disabled as not to confuse the user to start the work timer too early. Accordingly, the converse occurs
when the break timer reaches zero, with the button directing to the work timer being enabled and that for the break timer being disabled.
In addition to the buttons enabling/disabling, a song plays when either the work or break timer reaches zero. Javascript and jQuery provide
service all the buttons' capabilities / event-handling.

As mentioned earlier, in addition to the timers, there is also a section for music that the user can listen to while they work or take a
break. Though the user is free to use the default playlist, they can also insert their own music with a form that is located next to the
YouTube video screening. Users simply input a YouTube video or playlist URL and indicate which URL they copied on the form before
submitting and the application uses JavaScript to handle parsing the URL for the video or playlist identifier before incorporating it into
an iframe tag to change the YouTube video shown on the page.

Outside of that, HTML and CSS were used to design the user interface and jSON was utilized to add the Chrome extension capability. All
images, plugins, audio, etc. that were used to complete this project are listed below.

TimeCircles jQuery plugin: http://git.wimbarelds.nl/TimeCircles/about.html

Desk image: https://www.goodfon.com/wallpaper/laptop-desk-coffee-music-cookie.html

Wood image: https://www.pinterest.com/pin/389491067747710508/

Audio: https://www.zedge.net/ringtone/f1d8df8e-77f9-42b0-80c6-b007bd9ee00c
