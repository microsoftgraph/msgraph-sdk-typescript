import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Booking entities that provide a display name. */
export class BookingStaffMemberBaseImpl extends EntityImpl implements BookingStaffMemberBase, Parsable {
    /**
     * Instantiates a new bookingStaffMemberBase and sets the default values.
     * @param bookingStaffMemberBaseParameterValue 
     */
    public constructor(bookingStaffMemberBaseParameterValue?: BookingStaffMemberBase | undefined) {
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
