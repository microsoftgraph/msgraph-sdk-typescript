import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {BookingCustomerBase, Phone, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomer extends BookingCustomerBase implements Parsable {
    /** Addresses associated with the customer. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others. */
    private _addresses?: PhysicalAddress[] | undefined;
    /** The name of the customer. */
    private _displayName?: string | undefined;
    /** The SMTP address of the customer. */
    private _emailAddress?: string | undefined;
    /** Phone numbers associated with the customer, including home, business and mobile numbers. */
    private _phones?: Phone[] | undefined;
    /**
     * Gets the addresses property value. Addresses associated with the customer. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     * @returns a physicalAddress
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. Addresses associated with the customer. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalAddress[] | undefined) {
        this._addresses = value;
    };
    /**
     * Instantiates a new BookingCustomer and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.bookingCustomer";
    };
    /**
     * Gets the displayName property value. The name of the customer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the customer.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the emailAddress property value. The SMTP address of the customer.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The SMTP address of the customer.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the phones property value. Phone numbers associated with the customer, including home, business and mobile numbers.
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. Phone numbers associated with the customer, including home, business and mobile numbers.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PhysicalAddress>("addresses", this.addresses);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
    };
}
