import {MediaInfo} from './mediaInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaInfoImpl implements MediaInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional, used to uniquely identity the resource. If passed the prompt uri will be cached against this resourceId as key. */
    public resourceId?: string | undefined;
    /** Path to the prompt to be played. Currently only Wave file (.wav) format, single-channel, 16-bit samples with a 16,000 (16KHz) sampling rate is only supported. */
    public uri?: string | undefined;
    /**
     * Instantiates a new mediaInfo and sets the default values.
     * @param mediaInfoParameterValue 
     */
    public constructor(mediaInfoParameterValue?: MediaInfo | undefined) {
        this.additionalData = mediaInfoParameterValue?.additionalData ? mediaInfoParameterValue?.additionalData! : {};
        this.resourceId = mediaInfoParameterValue?.resourceId;
        this.uri = mediaInfoParameterValue?.uri;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resourceId){
            writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.uri){
            writer.writeStringValue("uri", this.uri);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
