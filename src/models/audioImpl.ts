import {Audio} from './audio';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AudioImpl implements AdditionalDataHolder, Audio, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The title of the album for this audio file. */
    public album?: string | undefined;
    /** The artist named on the album for the audio file. */
    public albumArtist?: string | undefined;
    /** The performing artist for the audio file. */
    public artist?: string | undefined;
    /** Bitrate expressed in kbps. */
    public bitrate?: number | undefined;
    /** The name of the composer of the audio file. */
    public composers?: string | undefined;
    /** Copyright information for the audio file. */
    public copyright?: string | undefined;
    /** The number of the disc this audio file came from. */
    public disc?: number | undefined;
    /** The total number of discs in this album. */
    public discCount?: number | undefined;
    /** Duration of the audio file, expressed in milliseconds */
    public duration?: number | undefined;
    /** The genre of this audio file. */
    public genre?: string | undefined;
    /** Indicates if the file is protected with digital rights management. */
    public hasDrm?: boolean | undefined;
    /** Indicates if the file is encoded with a variable bitrate. */
    public isVariableBitrate?: boolean | undefined;
    /** The title of the audio file. */
    public title?: string | undefined;
    /** The number of the track on the original disc for this audio file. */
    public track?: number | undefined;
    /** The total number of tracks on the original disc for this audio file. */
    public trackCount?: number | undefined;
    /** The year the audio file was recorded. */
    public year?: number | undefined;
    /**
     * Instantiates a new audio and sets the default values.
     * @param audioParameterValue 
     */
    public constructor(audioParameterValue?: Audio | undefined) {
        this.additionalData = audioParameterValue?.additionalData ? audioParameterValue?.additionalData! : {}
        this.album = audioParameterValue?.album ;
        this.albumArtist = audioParameterValue?.albumArtist ;
        this.artist = audioParameterValue?.artist ;
        this.bitrate = audioParameterValue?.bitrate ;
        this.composers = audioParameterValue?.composers ;
        this.copyright = audioParameterValue?.copyright ;
        this.disc = audioParameterValue?.disc ;
        this.discCount = audioParameterValue?.discCount ;
        this.duration = audioParameterValue?.duration ;
        this.genre = audioParameterValue?.genre ;
        this.hasDrm = audioParameterValue?.hasDrm ;
        this.isVariableBitrate = audioParameterValue?.isVariableBitrate ;
        this.title = audioParameterValue?.title ;
        this.track = audioParameterValue?.track ;
        this.trackCount = audioParameterValue?.trackCount ;
        this.year = audioParameterValue?.year ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "album": n => { this.album = n.getStringValue(); },
            "albumArtist": n => { this.albumArtist = n.getStringValue(); },
            "artist": n => { this.artist = n.getStringValue(); },
            "bitrate": n => { this.bitrate = n.getNumberValue(); },
            "composers": n => { this.composers = n.getStringValue(); },
            "copyright": n => { this.copyright = n.getStringValue(); },
            "disc": n => { this.disc = n.getNumberValue(); },
            "discCount": n => { this.discCount = n.getNumberValue(); },
            "duration": n => { this.duration = n.getNumberValue(); },
            "genre": n => { this.genre = n.getStringValue(); },
            "hasDrm": n => { this.hasDrm = n.getBooleanValue(); },
            "isVariableBitrate": n => { this.isVariableBitrate = n.getBooleanValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "track": n => { this.track = n.getNumberValue(); },
            "trackCount": n => { this.trackCount = n.getNumberValue(); },
            "year": n => { this.year = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.album){
        writer.writeStringValue("album", this.album);
        }
        if(this.albumArtist){
        writer.writeStringValue("albumArtist", this.albumArtist);
        }
        if(this.artist){
        writer.writeStringValue("artist", this.artist);
        }
        if(this.bitrate){
        writer.writeNumberValue("bitrate", this.bitrate);
        }
        if(this.composers){
        writer.writeStringValue("composers", this.composers);
        }
        if(this.copyright){
        writer.writeStringValue("copyright", this.copyright);
        }
        if(this.disc){
        writer.writeNumberValue("disc", this.disc);
        }
        if(this.discCount){
        writer.writeNumberValue("discCount", this.discCount);
        }
        if(this.duration){
        writer.writeNumberValue("duration", this.duration);
        }
        if(this.genre){
        writer.writeStringValue("genre", this.genre);
        }
        if(this.hasDrm){
        writer.writeBooleanValue("hasDrm", this.hasDrm);
        }
        if(this.isVariableBitrate){
        writer.writeBooleanValue("isVariableBitrate", this.isVariableBitrate);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
        if(this.track){
        writer.writeNumberValue("track", this.track);
        }
        if(this.trackCount){
        writer.writeNumberValue("trackCount", this.trackCount);
        }
        if(this.year){
        writer.writeNumberValue("year", this.year);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
