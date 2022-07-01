import {BookingCustomer} from './bookingCustomer';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {BookingCustomerBaseImpl, PhoneImpl, PhysicalAddressImpl} from './index';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomerImpl extends BookingCustomerBaseImpl implements BookingCustomer {
    /** Addresses associated with the customer, including home, business and other addresses. */
    private _addresses?: PhysicalAddress[] | undefined;
    /** The name of the customer. */
    private _displayName?: string | undefined;
    /** The SMTP address of the customer. */
    private _emailAddress?: string | undefined;
    /** Phone numbers associated with the customer, including home, business and mobile numbers. */
    private _phones?: Phone[] | undefined;
    /**
     * Gets the addresses property value. Addresses associated with the customer, including home, business and other addresses.
     * @returns a PhysicalAddressInterface
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. Addresses associated with the customer, including home, business and other addresses.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalAddress[] | undefined) {
        if(value) {
            const addressesArrValue: PhysicalAddressImpl[] = [];
            this.addresses?.forEach(element => {
                addressesArrValue.push((element instanceof PhysicalAddressImpl? element as PhysicalAddressImpl:new PhysicalAddressImpl(element)));
            });
            this._addresses = addressesArrValue;
        }
    };
    /**
     * Instantiates a new BookingCustomer and sets the default values.
     * @param bookingCustomerParameterValue 
     */
    public constructor(bookingCustomerParameterValue?: BookingCustomer | undefined) {
        super(bookingCustomerParameterValue);
        this._addresses = bookingCustomerParameterValue?.addresses;
        this._displayName = bookingCustomerParameterValue?.displayName;
        this._emailAddress = bookingCustomerParameterValue?.emailAddress;
        this._phones = bookingCustomerParameterValue?.phones;
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
        if(value) {
            this._displayName = value;
        }
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
        if(value) {
            this._emailAddress = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<PhoneImpl>(createPhoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the phones property value. Phone numbers associated with the customer, including home, business and mobile numbers.
     * @returns a PhoneInterface
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. Phone numbers associated with the customer, including home, business and mobile numbers.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        if(value) {
            const phonesArrValue: PhoneImpl[] = [];
            this.phones?.forEach(element => {
                phonesArrValue.push((element instanceof PhoneImpl? element as PhoneImpl:new PhoneImpl(element)));
            });
            this._phones = phonesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addresses && this.addresses.length != 0){        const addressesArrValue: PhysicalAddressImpl[] = [];
        this.addresses?.forEach(element => {
            addressesArrValue.push((element instanceof PhysicalAddressImpl? element as PhysicalAddressImpl:new PhysicalAddressImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhysicalAddressImpl>("addresses", addressesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = [];
        this.phones?.forEach(element => {
            phonesArrValue.push((element instanceof PhoneImpl? element as PhoneImpl:new PhoneImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
    };
}
