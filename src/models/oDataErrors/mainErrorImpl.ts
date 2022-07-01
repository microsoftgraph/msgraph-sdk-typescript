import {createErrorDetailsFromDiscriminatorValue} from './createErrorDetailsFromDiscriminatorValue';
import {createInnerErrorFromDiscriminatorValue} from './createInnerErrorFromDiscriminatorValue';
import {ErrorDetails} from './errorDetails';
import {ErrorDetailsImpl, InnerErrorImpl} from './index';
import {InnerError} from './innerError';
import {MainError} from './mainError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MainErrorImpl implements MainError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The code property */
    private _code?: string | undefined;
    /** The details property */
    private _details?: ErrorDetails[] | undefined;
    /** The innererror property */
    private _innererror?: InnerError | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
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
     * Instantiates a new MainError and sets the default values.
     * @param mainErrorParameterValue 
     */
    public constructor(mainErrorParameterValue?: MainError | undefined) {
        this._additionalData = mainErrorParameterValue?.additionalData ? mainErrorParameterValue?.additionalData! : {};
        this._code = mainErrorParameterValue?.code;
        this._details = mainErrorParameterValue?.details;
        this._innererror = mainErrorParameterValue?.innererror;
        this._message = mainErrorParameterValue?.message;
        this._target = mainErrorParameterValue?.target;
    };
    /**
     * Gets the details property value. The details property
     * @returns a ErrorDetailsInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The details property
     * @param value Value to set for the details property.
     */
    public set details(value: ErrorDetails[] | undefined) {
        if(value) {
            const detailsArrValue: ErrorDetailsImpl[] = [];
            this.details?.forEach(element => {
                detailsArrValue.push((element instanceof ErrorDetailsImpl? element:new ErrorDetailsImpl(element)));
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
            "details": n => { this.details = n.getCollectionOfObjectValues<ErrorDetailsImpl>(createErrorDetailsFromDiscriminatorValue); },
            "innererror": n => { this.innererror = n.getObjectValue<InnerErrorImpl>(createInnerErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the innererror property value. The innererror property
     * @returns a InnerErrorInterface
     */
    public get innererror() {
        return this._innererror;
    };
    /**
     * Sets the innererror property value. The innererror property
     * @param value Value to set for the innererror property.
     */
    public set innererror(value: InnerError | undefined) {
        if(value) {
            this._innererror = value instanceof InnerErrorImpl? value : new InnerErrorImpl(value);
        }
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
        if(this.details && this.details.length != 0){        const detailsArrValue: ErrorDetailsImpl[] = [];
        this.details?.forEach(element => {
            detailsArrValue.push((element instanceof ErrorDetailsImpl? element:new ErrorDetailsImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ErrorDetailsImpl>("details", detailsArrValue);
        }
        if(this.innererror){
            writer.writeObjectValue<InnerErrorImpl>("innererror", (!this.innererror || this.innererror instanceof InnerErrorImpl? this.innererror : new InnerErrorImpl(this.innererror)));
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
