import {MediaDirection} from './mediaDirection';
import {MediaStream} from './mediaStream';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaStreamImpl implements AdditionalDataHolder, MediaStream, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive. */
    public direction?: MediaDirection | undefined;
    /** The media stream label. */
    public label?: string | undefined;
    /** The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data. */
    public mediaType?: Modality | undefined;
    /** Indicates whether the media is muted by the server. */
    public serverMuted?: boolean | undefined;
    /** The source ID. */
    public sourceId?: string | undefined;
    /**
     * Instantiates a new mediaStream and sets the default values.
     * @param mediaStreamParameterValue 
     */
    public constructor(mediaStreamParameterValue?: MediaStream | undefined) {
        this.additionalData = mediaStreamParameterValue?.additionalData ? mediaStreamParameterValue?.additionalData! : {}
        this.direction = mediaStreamParameterValue?.direction ;
        this.label = mediaStreamParameterValue?.label ;
        this.mediaType = mediaStreamParameterValue?.mediaType ;
        this.serverMuted = mediaStreamParameterValue?.serverMuted ;
        this.sourceId = mediaStreamParameterValue?.sourceId ;
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
}
