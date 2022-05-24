import {CurrencyColumn} from './currencyColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CurrencyColumnImpl implements AdditionalDataHolder, CurrencyColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies the locale from which to infer the currency symbol. */
    public locale?: string | undefined;
    /**
     * Instantiates a new currencyColumn and sets the default values.
     * @param currencyColumnParameterValue 
     */
    public constructor(currencyColumnParameterValue?: CurrencyColumn | undefined) {
        this.additionalData = currencyColumnParameterValue?.additionalData ? currencyColumnParameterValue?.additionalData! : {}
        this.locale = currencyColumnParameterValue?.locale ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "locale": n => { this.locale = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.locale){
        writer.writeStringValue("locale", this.locale);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
