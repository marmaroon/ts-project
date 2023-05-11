enum TypesOfMedia {
    Video = 'video',
    Audio = 'audio'
}

enum FormatsOfMedia {
    Mp4 = '.mp4',
    Mov = '.mov',
    Mkv = '.mkv',
    Flv = '.flv',
    WebM = '.webM'
}

interface Media {
    name: string,
    type: TypesOfMedia,
    format: FormatsOfMedia,
    subtitles?: string,
    marks?: unknown
}

function playMedia(
    { name, type, format, subtitles, marks }: Media = {
        name: 'example',
        type: TypesOfMedia.Video,
        format: FormatsOfMedia.WebM
    }
): string {
    let marksLog: string
    if (Array.isArray(marks)) {
        marksLog = marks.join(' ')
    } else if (typeof marks === 'string') {
        marksLog = marks
    } else {
        marksLog = 'Unsupported type of marks'
    }
    console.log(`Media ${name}${format} is ${type}
Marks: ${marksLog}
Subtitles: ${subtitles ?? "none"}`);

    return "Media started"
}

playMedia({
    name: "WoW",
    format: FormatsOfMedia.Mov,
    type: TypesOfMedia.Video,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});