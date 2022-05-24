import {InnerError} from './innerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InnerErrorImpl implements AdditionalDataHolder, InnerError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Client request Id as sent by the client application. */
    public clientRequestId?: string | undefined;
    /** Date when the error occured. */
    public date?: Date | undefined;
    /** Request Id as tracked internally by the service */
    public requestId?: string | undefined;
    /**
     * Instantiates a new InnerError and sets the default values.
     * @param innerErrorParameterValue 
     */
    public constructor(innerErrorParameterValue?: InnerError | undefined) {
        this.additionalData = innerErrorParameterValue?.additionalData ? innerErrorParameterValue?.additionalData! : {}
        this.clientRequestId = innerErrorParameterValue?.clientRequestId ;
        this.date = innerErrorParameterValue?.date ;
        this.requestId = innerErrorParameterValue?.requestId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "client-request-id": n => { this.clientRequestId = n.getStringValue(); },
            "date": n => { this.date = n.getDateValue(); },
            "request-id": n => { this.requestId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientRequestId){
        writer.writeStringValue("client-request-id", this.clientRequestId);
        }
        if(this.date){
        writer.writeDateValue("date", this.date);
        }
        if(this.requestId){
        writer.writeStringValue("request-id", this.requestId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
