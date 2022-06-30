import {Video} from './video';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VideoImpl implements Video {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of audio bits per sample. */
    private _audioBitsPerSample?: number | undefined;
    /** Number of audio channels. */
    private _audioChannels?: number | undefined;
    /** Name of the audio format (AAC, MP3, etc.). */
    private _audioFormat?: string | undefined;
    /** Number of audio samples per second. */
    private _audioSamplesPerSecond?: number | undefined;
    /** Bit rate of the video in bits per second. */
    private _bitrate?: number | undefined;
    /** Duration of the file in milliseconds. */
    private _duration?: number | undefined;
    /** 'Four character code' name of the video format. */
    private _fourCC?: string | undefined;
    /** Frame rate of the video. */
    private _frameRate?: number | undefined;
    /** Height of the video, in pixels. */
    private _height?: number | undefined;
    /** Width of the video, in pixels. */
    private _width?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the audioBitsPerSample property value. Number of audio bits per sample.
     * @returns a integer
     */
    public get audioBitsPerSample() {
        return this._audioBitsPerSample;
    };
    /**
     * Sets the audioBitsPerSample property value. Number of audio bits per sample.
     * @param value Value to set for the audioBitsPerSample property.
     */
    public set audioBitsPerSample(value: number | undefined) {
        if(value) {
            this._audioBitsPerSample = value;
        }
    };
    /**
     * Gets the audioChannels property value. Number of audio channels.
     * @returns a integer
     */
    public get audioChannels() {
        return this._audioChannels;
    };
    /**
     * Sets the audioChannels property value. Number of audio channels.
     * @param value Value to set for the audioChannels property.
     */
    public set audioChannels(value: number | undefined) {
        if(value) {
            this._audioChannels = value;
        }
    };
    /**
     * Gets the audioFormat property value. Name of the audio format (AAC, MP3, etc.).
     * @returns a string
     */
    public get audioFormat() {
        return this._audioFormat;
    };
    /**
     * Sets the audioFormat property value. Name of the audio format (AAC, MP3, etc.).
     * @param value Value to set for the audioFormat property.
     */
    public set audioFormat(value: string | undefined) {
        if(value) {
            this._audioFormat = value;
        }
    };
    /**
     * Gets the audioSamplesPerSecond property value. Number of audio samples per second.
     * @returns a integer
     */
    public get audioSamplesPerSecond() {
        return this._audioSamplesPerSecond;
    };
    /**
     * Sets the audioSamplesPerSecond property value. Number of audio samples per second.
     * @param value Value to set for the audioSamplesPerSecond property.
     */
    public set audioSamplesPerSecond(value: number | undefined) {
        if(value) {
            this._audioSamplesPerSecond = value;
        }
    };
    /**
     * Gets the bitrate property value. Bit rate of the video in bits per second.
     * @returns a integer
     */
    public get bitrate() {
        return this._bitrate;
    };
    /**
     * Sets the bitrate property value. Bit rate of the video in bits per second.
     * @param value Value to set for the bitrate property.
     */
    public set bitrate(value: number | undefined) {
        if(value) {
            this._bitrate = value;
        }
    };
    /**
     * Instantiates a new video and sets the default values.
     * @param videoParameterValue 
     */
    public constructor(videoParameterValue?: Video | undefined) {
        this._additionalData = videoParameterValue?.additionalData ? videoParameterValue?.additionalData! : {};
        this._audioBitsPerSample = videoParameterValue?.audioBitsPerSample;
        this._audioChannels = videoParameterValue?.audioChannels;
        this._audioFormat = videoParameterValue?.audioFormat;
        this._audioSamplesPerSecond = videoParameterValue?.audioSamplesPerSecond;
        this._bitrate = videoParameterValue?.bitrate;
        this._duration = videoParameterValue?.duration;
        this._fourCC = videoParameterValue?.fourCC;
        this._frameRate = videoParameterValue?.frameRate;
        this._height = videoParameterValue?.height;
        this._width = videoParameterValue?.width;
    };
    /**
     * Gets the duration property value. Duration of the file in milliseconds.
     * @returns a int64
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. Duration of the file in milliseconds.
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        if(value) {
            this._duration = value;
        }
    };
    /**
     * Gets the fourCC property value. 'Four character code' name of the video format.
     * @returns a string
     */
    public get fourCC() {
        return this._fourCC;
    };
    /**
     * Sets the fourCC property value. 'Four character code' name of the video format.
     * @param value Value to set for the fourCC property.
     */
    public set fourCC(value: string | undefined) {
        if(value) {
            this._fourCC = value;
        }
    };
    /**
     * Gets the frameRate property value. Frame rate of the video.
     * @returns a double
     */
    public get frameRate() {
        return this._frameRate;
    };
    /**
     * Sets the frameRate property value. Frame rate of the video.
     * @param value Value to set for the frameRate property.
     */
    public set frameRate(value: number | undefined) {
        if(value) {
            this._frameRate = value;
        }
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
     * Gets the height property value. Height of the video, in pixels.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. Height of the video, in pixels.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        if(value) {
            this._height = value;
        }
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
    /**
     * Gets the width property value. Width of the video, in pixels.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. Width of the video, in pixels.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        if(value) {
            this._width = value;
        }
    };
}
