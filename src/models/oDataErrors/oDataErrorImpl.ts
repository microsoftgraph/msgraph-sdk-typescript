import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import {MainErrorImpl} from './index';
import {MainError} from './mainError';
import {ODataError} from './oDataError';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ODataErrorImpl extends ApiError implements ODataError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The error property */
    private _error_escaped?: MainError | undefined;
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
     * Instantiates a new ODataError and sets the default values.
     * @param oDataErrorParameterValue 
     */
    public constructor(oDataErrorParameterValue?: ODataError | undefined) {
        super();
        this._additionalData = oDataErrorParameterValue?.additionalData ? oDataErrorParameterValue?.additionalData! : {};
        this._error_escaped = oDataErrorParameterValue?.error_escaped;
    };
    /**
     * Gets the error property value. The error property
     * @returns a MainErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: MainError | undefined) {
        if(value) {
            this._error_escaped = value instanceof MainErrorImpl? value : new MainErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<MainErrorImpl>(createMainErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.error_escaped){
            writer.writeObjectValue<MainErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof MainErrorImpl? this.error_escaped : new MainErrorImpl(this.error_escaped)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
