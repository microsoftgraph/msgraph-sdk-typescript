import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {PublicErrorDetailImpl} from './index';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicInnerErrorImpl implements PublicInnerError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The error code. */
    private _code?: string | undefined;
    /** A collection of error details. */
    private _details?: PublicErrorDetail[] | undefined;
    /** The error message. */
    private _message?: string | undefined;
    /** The target of the error. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the code property value. The error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        if(value) {
            this._code = value;
        }
    };
    /**
     * Instantiates a new publicInnerError and sets the default values.
     * @param publicInnerErrorParameterValue 
     */
    public constructor(publicInnerErrorParameterValue?: PublicInnerError | undefined) {
        this._additionalData = publicInnerErrorParameterValue?.additionalData ? publicInnerErrorParameterValue?.additionalData! : {};
        this._code = publicInnerErrorParameterValue?.code;
        this._details = publicInnerErrorParameterValue?.details;
        this._message = publicInnerErrorParameterValue?.message;
        this._target = publicInnerErrorParameterValue?.target;
    };
    /**
     * Gets the details property value. A collection of error details.
     * @returns a PublicErrorDetailInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. A collection of error details.
     * @param value Value to set for the details property.
     */
    public set details(value: PublicErrorDetail[] | undefined) {
        if(value) {
            const detailsArrValue: PublicErrorDetailImpl[] = [];
            this.details?.forEach(element => {
                detailsArrValue.push((element instanceof PublicErrorDetailImpl? element:new PublicErrorDetailImpl(element)));
            });
            this._details = detailsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<PublicErrorDetailImpl>(createPublicErrorDetailFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. The error message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The error message.
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
        if(this.details && this.details.length != 0){        const detailsArrValue: PublicErrorDetailImpl[] = [];
        this.details?.forEach(element => {
            detailsArrValue.push((element instanceof PublicErrorDetailImpl? element:new PublicErrorDetailImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PublicErrorDetailImpl>("details", detailsArrValue);
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
     * Gets the target property value. The target of the error.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target of the error.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        if(value) {
            this._target = value;
        }
    };
}
