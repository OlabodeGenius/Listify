export interface ISongQueuedCreateRequest {
  searchSnippet: string;
}

export interface IApplicationUser {
  id: string;
  aspNetUserId: string;
  username: string;
  room: IRoom;
  songPoolCountSongsMax: number;
  playlistCountMax: number;
}

export interface IApplicationUserRequest {
  id: string;
  username: string;
  roomCode: string;
  songPoolCountSongsMax: number;
  playlistCountMax: number;
}

export interface IRoom {
  id: string;
  roomCode: string;
  isRoomPublic: boolean;
  songsQueued: ISongQueued[];
}
export interface IApplicationUserRoom {
  id: string;
  applicationUser: IApplicationUser;
  room: IRoom;
  isOnline: boolean;
}

export interface IChatData {
  applicationUserRoom: IApplicationUserRoom;
}

export interface IChatMessage {
  applicationUserRoom: IApplicationUserRoom;
  message: string;
}

export interface IPlaylist {
  id: string;
  playlistName: string;
  isSelected: boolean;
  applicationUser: IApplicationUser;
  songsPlaylists: ISongPlaylist[];
}

export interface ISongPlaylist {
  id: string;
  playCount: number;
  song: ISong;
  playlist: IPlaylist;
}

export interface ISongQueued {
  id: string;
  weightedValue: number;
  applicationUser: IApplicationUser;
  room: IRoom;
  song: ISong;
}

export interface ISong {
  id: string;
  songName: string;
  youtubeId: string;
  songLengthSec: number;
}

export interface IPlaylistCreateRequest{
  id: string;
  playlistName: string;
  isSelected: boolean;
}

export interface ICurrency {
  id: string;
  currencyName: string;
  weight: number;
  quantityIncreasePerTick: number;
  timeSecBetweenTick: number;
}

export interface ISongPlaylistCreateRequest {
  songSearchResult: ISongSearchResult;
  playlistId: string;
}

export interface ISongSearchResults {
  results: ISongSearchResult[];
}

export interface ISongSearchResult {
  id: string;
  songName: string;
  lengthSec: number;
  videoId: string;
}
