import {DefaultColumnValue} from './defaultColumnValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultColumnValueImpl implements AdditionalDataHolder, DefaultColumnValue, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The formula used to compute the default value for this column. */
    public formula?: string | undefined;
    /** The direct value to use as the default value for this column. */
    public value?: string | undefined;
    /**
     * Instantiates a new defaultColumnValue and sets the default values.
     * @param defaultColumnValueParameterValue 
     */
    public constructor(defaultColumnValueParameterValue?: DefaultColumnValue | undefined) {
        this.additionalData = defaultColumnValueParameterValue?.additionalData ? defaultColumnValueParameterValue?.additionalData! : {}
        this.formula = defaultColumnValueParameterValue?.formula ;
        this.value = defaultColumnValueParameterValue?.value ;
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
}
