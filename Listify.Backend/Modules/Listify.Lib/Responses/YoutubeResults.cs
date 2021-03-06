﻿using Listify.Domain.Lib.Entities;
using Listify.Lib.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Listify.Lib.Responses
{
    public class YoutubeResults
    {
        public ICollection<YoutubeResult> Results { get; set; } =
            new List<YoutubeResult>();

        public class YoutubeResult
        {
            public string SongName { get; set; }
            public int LengthSec { get; set; }
            public string VideoId { get; set; }

            //Song Search Default Thumbnail
            public string YoutubeThumbnailUrl { get; set; }
            public long? YoutubeThumbnailWidth { get; set; }
            public long? YoutubeThumbnailHeight { get; set; }

            // this is Value Currently assigned to the song based on incoming
            // and outgoing transactions
            public int QuantityWagered { get; set; }
            public Guid ApplicationUserRoomCurrencyId { get; set; }
        }
    }
}
