// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface Playlist {
	resolve: () => Song[];
	type: "playlist";
}

type Item = Song | Album | Playlist;

interface Artists {
	[index: string]: string[];
}

interface UnrolledPlaylist {
	artists: Artists;
	songs: string[];
	time: number;
}

export function unrollPlaylist(item: Item[]): UnrolledPlaylist {
	const artists: Artists = {};
	const songs: string[] = [];
	let time = 0;

	item.forEach((obj) => {
		let processingItem: Song[];

		switch (obj.type) {
			case "album":
				processingItem = obj.songs;
				break;

			case "playlist":
				processingItem = obj.resolve();
				break;
			case "song":
				processingItem = [obj];
		}

		processingItem.forEach((song) => {
			time += song.length;
			songs.push(song.name);

			if (Array.isArray(song.artist)) {
				song.artist.forEach((artist) => {
					artists[artist] = artists[artist]
						? [...artists[artist], song.name]
						: [song.name];
				});
			} else {
				artists[song.artist] = artists[song.artist]
					? [...artists[song.artist], song.name]
					: [song.name];
			}
		});
	});

	return {
		artists,
		songs,
		time,
	};
}
