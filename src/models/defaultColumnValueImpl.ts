import {DefaultColumnValue} from './defaultColumnValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultColumnValueImpl implements DefaultColumnValue {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The formula used to compute the default value for this column. */
    private _formula?: string | undefined;
    /** The direct value to use as the default value for this column. */
    private _value?: string | undefined;
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
     * Instantiates a new defaultColumnValue and sets the default values.
     * @param defaultColumnValueParameterValue 
     */
    public constructor(defaultColumnValueParameterValue?: DefaultColumnValue | undefined) {
        this._additionalData = defaultColumnValueParameterValue?.additionalData ? defaultColumnValueParameterValue?.additionalData! : {};
        this._formula = defaultColumnValueParameterValue?.formula;
        this._value = defaultColumnValueParameterValue?.value;
    };
    /**
     * Gets the formula property value. The formula used to compute the default value for this column.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula used to compute the default value for this column.
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        if(value) {
            this._formula = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "formula": n => { this.formula = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.formula){
            writer.writeStringValue("formula", this.formula);
        }
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The direct value to use as the default value for this column.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The direct value to use as the default value for this column.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        if(value) {
            this._value = value;
        }
    };
}
