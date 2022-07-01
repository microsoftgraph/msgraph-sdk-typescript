import {ActionResultPart} from './actionResultPart';
import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {PublicErrorImpl} from './index';
import {PublicError} from './publicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActionResultPartImpl implements ActionResultPart {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The error that occurred, if any, during the course of the bulk operation. */
    private _error_escaped?: PublicError | undefined;
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
     * Instantiates a new actionResultPart and sets the default values.
     * @param actionResultPartParameterValue 
     */
    public constructor(actionResultPartParameterValue?: ActionResultPart | undefined) {
        this._additionalData = actionResultPartParameterValue?.additionalData ? actionResultPartParameterValue?.additionalData! : {};
        this._error_escaped = actionResultPartParameterValue?.error_escaped;
    };
    /**
     * Gets the error property value. The error that occurred, if any, during the course of the bulk operation.
     * @returns a PublicErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error that occurred, if any, during the course of the bulk operation.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        if(value) {
            this._error_escaped = value instanceof PublicErrorImpl? value : new PublicErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.error_escaped){
            writer.writeObjectValue<PublicErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof PublicErrorImpl? this.error_escaped : new PublicErrorImpl(this.error_escaped)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
