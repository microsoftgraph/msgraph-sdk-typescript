import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import {MainError} from './index';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ODataError extends ApiError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new ODataError and sets the default values.
     */
    public constructor() {
        super();
        this._additionalData = {};
    };
    /**
     * Gets the error property value. 
     * @returns a MainError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. 
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: MainError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "error": (o, n) => { (o as unknown as ODataError).error_escaped = n.getObjectValue<MainError>(createMainErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<MainError>("error", this.error_escaped);
        writer.writeAdditionalData(this.additionalData);
    };
}
