import {Video} from './video';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VideoImpl implements AdditionalDataHolder, Parsable, Video {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of audio bits per sample. */
    public audioBitsPerSample?: number | undefined;
    /** Number of audio channels. */
    public audioChannels?: number | undefined;
    /** Name of the audio format (AAC, MP3, etc.). */
    public audioFormat?: string | undefined;
    /** Number of audio samples per second. */
    public audioSamplesPerSecond?: number | undefined;
    /** Bit rate of the video in bits per second. */
    public bitrate?: number | undefined;
    /** Duration of the file in milliseconds. */
    public duration?: number | undefined;
    /** 'Four character code' name of the video format. */
    public fourCC?: string | undefined;
    /** Frame rate of the video. */
    public frameRate?: number | undefined;
    /** Height of the video, in pixels. */
    public height?: number | undefined;
    /** Width of the video, in pixels. */
    public width?: number | undefined;
    /**
     * Instantiates a new video and sets the default values.
     * @param videoParameterValue 
     */
    public constructor(videoParameterValue?: Video | undefined) {
        this.additionalData = videoParameterValue?.additionalData ? videoParameterValue?.additionalData! : {}
        this.audioBitsPerSample = videoParameterValue?.audioBitsPerSample ;
        this.audioChannels = videoParameterValue?.audioChannels ;
        this.audioFormat = videoParameterValue?.audioFormat ;
        this.audioSamplesPerSecond = videoParameterValue?.audioSamplesPerSecond ;
        this.bitrate = videoParameterValue?.bitrate ;
        this.duration = videoParameterValue?.duration ;
        this.fourCC = videoParameterValue?.fourCC ;
        this.frameRate = videoParameterValue?.frameRate ;
        this.height = videoParameterValue?.height ;
        this.width = videoParameterValue?.width ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "audioBitsPerSample": n => { this.audioBitsPerSample = n.getNumberValue(); },
            "audioChannels": n => { this.audioChannels = n.getNumberValue(); },
            "audioFormat": n => { this.audioFormat = n.getStringValue(); },
            "audioSamplesPerSecond": n => { this.audioSamplesPerSecond = n.getNumberValue(); },
            "bitrate": n => { this.bitrate = n.getNumberValue(); },
            "duration": n => { this.duration = n.getNumberValue(); },
            "fourCC": n => { this.fourCC = n.getStringValue(); },
            "frameRate": n => { this.frameRate = n.getNumberValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.audioBitsPerSample){
        writer.writeNumberValue("audioBitsPerSample", this.audioBitsPerSample);
        }
        if(this.audioChannels){
        writer.writeNumberValue("audioChannels", this.audioChannels);
        }
        if(this.audioFormat){
        writer.writeStringValue("audioFormat", this.audioFormat);
        }
        if(this.audioSamplesPerSecond){
        writer.writeNumberValue("audioSamplesPerSecond", this.audioSamplesPerSecond);
        }
        if(this.bitrate){
        writer.writeNumberValue("bitrate", this.bitrate);
        }
        if(this.duration){
        writer.writeNumberValue("duration", this.duration);
        }
        if(this.fourCC){
        writer.writeStringValue("fourCC", this.fourCC);
        }
        if(this.frameRate){
        writer.writeNumberValue("frameRate", this.frameRate);
        }
        if(this.height){
        writer.writeNumberValue("height", this.height);
        }
        if(this.width){
        writer.writeNumberValue("width", this.width);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
