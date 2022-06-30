import {ErrorDetails} from './errorDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ErrorDetailsImpl implements ErrorDetails {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The code property */
    private _code?: string | undefined;
    /** The message property */
    private _message?: string | undefined;
    /** The target property */
    private _target?: string | undefined;
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
     * Gets the code property value. The code property
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The code property
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        if(value) {
            this._code = value;
        }
    };
    /**
     * Instantiates a new ErrorDetails and sets the default values.
     * @param errorDetailsParameterValue 
     */
    public constructor(errorDetailsParameterValue?: ErrorDetails | undefined) {
        this._additionalData = errorDetailsParameterValue?.additionalData ? errorDetailsParameterValue?.additionalData! : {};
        this._code = errorDetailsParameterValue?.code;
        this._message = errorDetailsParameterValue?.message;
        this._target = errorDetailsParameterValue?.target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        if(value) {
            this._message = value;
        }
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
        if(this.target){
            writer.writeStringValue("target", this.target);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the target property value. The target property
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target property
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        if(value) {
            this._target = value;
        }
    };
}
