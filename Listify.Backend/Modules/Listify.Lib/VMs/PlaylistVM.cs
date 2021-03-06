﻿using Listify.Domain.Lib.VMs;
using Listify.Lib.DTOs;
using System.Collections.Generic;

namespace Listify.Lib.VMs
{
    public class PlaylistVM : BaseVM
    {
        public string PlaylistName { get; set; }
        // if the playlist is currently selected - there can only be 1 selected playlist at a time
        public bool IsSelected { get; set; }
        public bool IsPublic { get; set; }
        public int NumberOfSongs { get; set; }
        public string PlaylistImageUrl { get; set; }

        public ApplicationUserDTO ApplicationUser { get; set; }

        public ICollection<SongPlaylistVM> SongsPlaylist { get; set; } =
            new List<SongPlaylistVM>();

        public ICollection<PlaylistGenreVM> PlaylistGenres { get; set; } =
            new List<PlaylistGenreVM>();
    }
}
