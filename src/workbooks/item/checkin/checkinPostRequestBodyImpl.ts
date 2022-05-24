import {CheckinPostRequestBody} from './checkinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkin method. */
export class CheckinPostRequestBodyImpl implements AdditionalDataHolder, CheckinPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The checkInAs property */
    public checkInAs?: string | undefined;
    /** The comment property */
    public comment?: string | undefined;
    /**
     * Instantiates a new checkinPostRequestBody and sets the default values.
     * @param checkinPostRequestBodyParameterValue 
     */
    public constructor(checkinPostRequestBodyParameterValue?: CheckinPostRequestBody | undefined) {
        this.additionalData = checkinPostRequestBodyParameterValue?.additionalData ? checkinPostRequestBodyParameterValue?.additionalData! : {}
        this.checkInAs = checkinPostRequestBodyParameterValue?.checkInAs ;
        this.comment = checkinPostRequestBodyParameterValue?.comment ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "checkInAs": n => { this.checkInAs = n.getStringValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.checkInAs){
        writer.writeStringValue("checkInAs", this.checkInAs);
        }
        if(this.comment){
        writer.writeStringValue("comment", this.comment);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
