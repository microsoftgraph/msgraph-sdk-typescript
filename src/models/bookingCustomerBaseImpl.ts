import {BookingCustomerBase} from './bookingCustomerBase';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Booking entities that provide a display name. */
export class BookingCustomerBaseImpl extends EntityImpl implements BookingCustomerBase, Parsable {
    /**
     * Instantiates a new bookingCustomerBase and sets the default values.
     * @param bookingCustomerBaseParameterValue 
     */
    public constructor(bookingCustomerBaseParameterValue?: BookingCustomerBase | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
