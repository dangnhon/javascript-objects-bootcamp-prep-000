var playlist = {
  Slodive: "Alison",
  myBloodyValentine: "Sometimes",
}


function updatePlaylist(playlist, artistName, songTitle) {
  
  playlist[artistName] = 'songTitle';
  return(playlist);
  
}


function removeFromPlaylist(playlist, artistName) {
  
  delete playlist.artisName;
  
  return(playlist);
}






