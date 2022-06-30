import {MediaDirection} from './mediaDirection';
import {MediaStream} from './mediaStream';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaStreamImpl implements MediaStream {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive. */
    private _direction?: MediaDirection | undefined;
    /** The media stream label. */
    private _label?: string | undefined;
    /** The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data. */
    private _mediaType?: Modality | undefined;
    /** Indicates whether the media is muted by the server. */
    private _serverMuted?: boolean | undefined;
    /** The source ID. */
    private _sourceId?: string | undefined;
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
     * Instantiates a new mediaStream and sets the default values.
     * @param mediaStreamParameterValue 
     */
    public constructor(mediaStreamParameterValue?: MediaStream | undefined) {
        this._additionalData = mediaStreamParameterValue?.additionalData ? mediaStreamParameterValue?.additionalData! : {};
        this._direction = mediaStreamParameterValue?.direction;
        this._label = mediaStreamParameterValue?.label;
        this._mediaType = mediaStreamParameterValue?.mediaType;
        this._serverMuted = mediaStreamParameterValue?.serverMuted;
        this._sourceId = mediaStreamParameterValue?.sourceId;
    };
    /**
     * Gets the direction property value. The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.
     * @returns a mediaDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.
     * @param value Value to set for the direction property.
     */
    public set direction(value: MediaDirection | undefined) {
        if(value) {
            this._direction = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "direction": n => { this.direction = n.getEnumValue<MediaDirection>(MediaDirection); },
            "label": n => { this.label = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getEnumValue<Modality>(Modality); },
            "serverMuted": n => { this.serverMuted = n.getBooleanValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the label property value. The media stream label.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. The media stream label.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        if(value) {
            this._label = value;
        }
    };
    /**
     * Gets the mediaType property value. The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.
     * @returns a modality
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: Modality | undefined) {
        if(value) {
            this._mediaType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.direction){
            writer.writeEnumValue<MediaDirection>("direction", this.direction);
        }
        if(this.label){
            writer.writeStringValue("label", this.label);
        }
        if(this.mediaType){
            writer.writeEnumValue<Modality>("mediaType", this.mediaType);
        }
        if(this.serverMuted){
            writer.writeBooleanValue("serverMuted", this.serverMuted);
        }
        if(this.sourceId){
            writer.writeStringValue("sourceId", this.sourceId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serverMuted property value. Indicates whether the media is muted by the server.
     * @returns a boolean
     */
    public get serverMuted() {
        return this._serverMuted;
    };
    /**
     * Sets the serverMuted property value. Indicates whether the media is muted by the server.
     * @param value Value to set for the serverMuted property.
     */
    public set serverMuted(value: boolean | undefined) {
        if(value) {
            this._serverMuted = value;
        }
    };
    /**
     * Gets the sourceId property value. The source ID.
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. The source ID.
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        if(value) {
            this._sourceId = value;
        }
    };
}
