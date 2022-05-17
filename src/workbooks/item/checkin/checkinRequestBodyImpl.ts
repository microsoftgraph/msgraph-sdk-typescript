import {CheckinRequestBody} from './checkinRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkin method. */
export class CheckinRequestBodyImpl implements AdditionalDataHolder, CheckinRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The checkInAs property */
    checkInAs?: string | undefined;
    /** The comment property */
    comment?: string | undefined;
    /**
     * Instantiates a new checkinRequestBody and sets the default values.
     * @param checkinRequestBodyParameterValue 
     */
    public constructor(checkinRequestBodyParameterValue?: CheckinRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = checkinRequestBodyParameterValue?.additionalData ? {} : checkinRequestBodyParameterValue?.additionalData!
        this.checkInAs = checkinRequestBodyParameterValue?.checkInAs ;
        this.comment = checkinRequestBodyParameterValue?.comment ;
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
        if(this.checkInAs)
        writer.writeStringValue("checkInAs", this.checkInAs);
        }
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
