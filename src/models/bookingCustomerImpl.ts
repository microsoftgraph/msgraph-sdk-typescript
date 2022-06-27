import {BookingCustomer} from './bookingCustomer';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {BookingCustomerBaseImpl, PhoneImpl, PhysicalAddressImpl} from './index';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomerImpl extends BookingCustomerBaseImpl implements BookingCustomer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Addresses associated with the customer, including home, business and other addresses. */
    public addresses?: PhysicalAddress[] | undefined;
    /** The name of the customer. */
    public displayName?: string | undefined;
    /** The SMTP address of the customer. */
    public emailAddress?: string | undefined;
    /** Phone numbers associated with the customer, including home, business and mobile numbers. */
    public phones?: Phone[] | undefined;
    /**
     * Instantiates a new BookingCustomer and sets the default values.
     * @param bookingCustomerParameterValue 
     */
    public constructor(bookingCustomerParameterValue?: BookingCustomer | undefined) {
        super(bookingCustomerParameterValue);
        this.additionalData = bookingCustomerParameterValue?.additionalData ? bookingCustomerParameterValue?.additionalData! : {};
        const addressesArrValue: PhysicalAddressImpl[] = []; bookingCustomerParameterValue.addresses?.forEach(element => {addressesArrValue.push(element instanceof PhysicalAddressImpl? element : new PhysicalAddressImpl(element));});
        this.addresses = addressesArrValue;
        this.displayName = bookingCustomerParameterValue?.displayName;
        this.emailAddress = bookingCustomerParameterValue?.emailAddress;
        const phonesArrValue: PhoneImpl[] = []; bookingCustomerParameterValue.phones?.forEach(element => {phonesArrValue.push(element instanceof PhoneImpl? element : new PhoneImpl(element));});
        this.phones = phonesArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addresses && this.addresses.length != 0){        const addressesArrValue: PhysicalAddressImpl[] = []; this.addresses?.forEach(element => {addressesArrValue.push(element instanceof PhysicalAddressImpl? element : new PhysicalAddressImpl(element));});
            writer.writeCollectionOfObjectValues<PhysicalAddressImpl>("addresses", addressesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = []; this.phones?.forEach(element => {phonesArrValue.push(element instanceof PhoneImpl? element : new PhoneImpl(element));});
            writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
