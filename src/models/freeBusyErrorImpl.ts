import {FreeBusyError} from './freeBusyError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FreeBusyErrorImpl implements FreeBusyError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Describes the error. */
    private _message?: string | undefined;
    /** The response code from querying for the availability of the user, distribution list, or resource. */
    private _responseCode?: string | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new freeBusyError and sets the default values.
     * @param freeBusyErrorParameterValue 
     */
    public constructor(freeBusyErrorParameterValue?: FreeBusyError | undefined) {
        this._additionalData = freeBusyErrorParameterValue?.additionalData ? freeBusyErrorParameterValue?.additionalData! : {};
        this._message = freeBusyErrorParameterValue?.message;
        this._responseCode = freeBusyErrorParameterValue?.responseCode;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getStringValue(); },
            "responseCode": n => { this.responseCode = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. Describes the error.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. Describes the error.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        if(value) {
            this._message = value;
        }
    };
    /**
     * Gets the responseCode property value. The response code from querying for the availability of the user, distribution list, or resource.
     * @returns a string
     */
    public get responseCode() {
        return this._responseCode;
    };
    /**
     * Sets the responseCode property value. The response code from querying for the availability of the user, distribution list, or resource.
     * @param value Value to set for the responseCode property.
     */
    public set responseCode(value: string | undefined) {
        if(value) {
            this._responseCode = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
            writer.writeStringValue("message", this.message);
        }
        if(this.responseCode){
            writer.writeStringValue("responseCode", this.responseCode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
