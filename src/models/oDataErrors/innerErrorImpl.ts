import {InnerError} from './innerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InnerErrorImpl implements InnerError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Client request Id as sent by the client application. */
    private _clientRequestId?: string | undefined;
    /** Date when the error occured. */
    private _date?: Date | undefined;
    /** Request Id as tracked internally by the service */
    private _requestId?: string | undefined;
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
     * Gets the client-request-id property value. Client request Id as sent by the client application.
     * @returns a string
     */
    public get clientRequestId() {
        return this._clientRequestId;
    };
    /**
     * Sets the client-request-id property value. Client request Id as sent by the client application.
     * @param value Value to set for the clientRequestId property.
     */
    public set clientRequestId(value: string | undefined) {
        if(value) {
            this._clientRequestId = value;
        }
    };
    /**
     * Instantiates a new InnerError and sets the default values.
     * @param innerErrorParameterValue 
     */
    public constructor(innerErrorParameterValue?: InnerError | undefined) {
        this._additionalData = innerErrorParameterValue?.additionalData ? innerErrorParameterValue?.additionalData! : {};
        this._clientRequestId = innerErrorParameterValue?.clientRequestId;
        this._date = innerErrorParameterValue?.date;
        this._requestId = innerErrorParameterValue?.requestId;
    };
    /**
     * Gets the date property value. Date when the error occured.
     * @returns a Date
     */
    public get date() {
        return this._date;
    };
    /**
     * Sets the date property value. Date when the error occured.
     * @param value Value to set for the Date property.
     */
    public set date(value: Date | undefined) {
        if(value) {
            this._date = value;
        }
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
     * Gets the request-id property value. Request Id as tracked internally by the service
     * @returns a string
     */
    public get requestId() {
        return this._requestId;
    };
    /**
     * Sets the request-id property value. Request Id as tracked internally by the service
     * @param value Value to set for the requestId property.
     */
    public set requestId(value: string | undefined) {
        if(value) {
            this._requestId = value;
        }
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
