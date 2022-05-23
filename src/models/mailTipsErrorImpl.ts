import {MailTipsError} from './mailTipsError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailTipsErrorImpl implements AdditionalDataHolder, MailTipsError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error code. */
    public code?: string | undefined;
    /** The error message. */
    public message?: string | undefined;
    /**
     * Instantiates a new mailTipsError and sets the default values.
     * @param mailTipsErrorParameterValue 
     */
    public constructor(mailTipsErrorParameterValue?: MailTipsError | undefined) {
        this.additionalData = mailTipsErrorParameterValue?.additionalData ? mailTipsErrorParameterValue?.additionalData! : {}
        this.code = mailTipsErrorParameterValue?.code ;
        this.message = mailTipsErrorParameterValue?.message ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeStringValue("code", this.code);
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
