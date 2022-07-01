import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {createPublicInnerErrorFromDiscriminatorValue} from './createPublicInnerErrorFromDiscriminatorValue';
import {PublicErrorDetailImpl, PublicInnerErrorImpl} from './index';
import {PublicError} from './publicError';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicErrorImpl implements PublicError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Represents the error code. */
    private _code?: string | undefined;
    /** Details of the error. */
    private _details?: PublicErrorDetail[] | undefined;
    /** Details of the inner error. */
    private _innerError?: PublicInnerError | undefined;
    /** A non-localized message for the developer. */
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
     * Gets the code property value. Represents the error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. Represents the error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        if(value) {
            this._code = value;
        }
    };
    /**
     * Instantiates a new publicError and sets the default values.
     * @param publicErrorParameterValue 
     */
    public constructor(publicErrorParameterValue?: PublicError | undefined) {
        this._additionalData = publicErrorParameterValue?.additionalData ? publicErrorParameterValue?.additionalData! : {};
        this._code = publicErrorParameterValue?.code;
        this._details = publicErrorParameterValue?.details;
        this._innerError = publicErrorParameterValue?.innerError;
        this._message = publicErrorParameterValue?.message;
        this._target = publicErrorParameterValue?.target;
    };
    /**
     * Gets the details property value. Details of the error.
     * @returns a PublicErrorDetailInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the error.
     * @param value Value to set for the details property.
     */
    public set details(value: PublicErrorDetail[] | undefined) {
        if(value) {
            const detailsArrValue: PublicErrorDetailImpl[] = [];
            this.details?.forEach(element => {
                detailsArrValue.push((element instanceof PublicErrorDetailImpl? element as PublicErrorDetailImpl:new PublicErrorDetailImpl(element)));
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
            "innerError": n => { this.innerError = n.getObjectValue<PublicInnerErrorImpl>(createPublicInnerErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the innerError property value. Details of the inner error.
     * @returns a PublicInnerErrorInterface
     */
    public get innerError() {
        return this._innerError;
    };
    /**
     * Sets the innerError property value. Details of the inner error.
     * @param value Value to set for the innerError property.
     */
    public set innerError(value: PublicInnerError | undefined) {
        if(value) {
            this._innerError = value instanceof PublicInnerErrorImpl? value as PublicInnerErrorImpl: new PublicInnerErrorImpl(value);
        }
    };
    /**
     * Gets the message property value. A non-localized message for the developer.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. A non-localized message for the developer.
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
            detailsArrValue.push((element instanceof PublicErrorDetailImpl? element as PublicErrorDetailImpl:new PublicErrorDetailImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PublicErrorDetailImpl>("details", detailsArrValue);
        }
        if(this.innerError){
            writer.writeObjectValue<PublicInnerErrorImpl>("innerError", (this.innerError instanceof PublicInnerErrorImpl? this.innerError as PublicInnerErrorImpl: new PublicInnerErrorImpl(this.innerError)));
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
