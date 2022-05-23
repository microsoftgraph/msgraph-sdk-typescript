import {BookingCurrency} from './bookingCurrency';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the solutionsRoot singleton. */
export class BookingCurrencyImpl extends EntityImpl implements BookingCurrency, Parsable {
    /** The currency symbol. For example, the currency symbol for the US dollar and for the Australian dollar is $. */
    public symbol?: string | undefined;
    /**
     * Instantiates a new bookingCurrency and sets the default values.
     * @param bookingCurrencyParameterValue 
     */
    public constructor(bookingCurrencyParameterValue?: BookingCurrency | undefined) {
        super();
        this.symbol = bookingCurrencyParameterValue?.symbol ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "symbol": n => { this.symbol = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.symbol){
        writer.writeStringValue("symbol", this.symbol);
        }
    };
}
