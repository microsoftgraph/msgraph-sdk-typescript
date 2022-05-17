import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhysicalOfficeAddressImpl implements AdditionalDataHolder, Parsable, PhysicalOfficeAddress {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The city. */
    city?: string | undefined;
    /** The country or region. It's a free-format string value, for example, 'United States'. */
    countryOrRegion?: string | undefined;
    /** Office location such as building and office number for an organizational contact. */
    officeLocation?: string | undefined;
    /** The postal code. */
    postalCode?: string | undefined;
    /** The state. */
    state?: string | undefined;
    /** The street. */
    street?: string | undefined;
    /**
     * Instantiates a new physicalOfficeAddress and sets the default values.
     * @param physicalOfficeAddressParameterValue 
     */
    public constructor(physicalOfficeAddressParameterValue?: PhysicalOfficeAddress | undefined) {
        this.additionalData = {};
        this.additionalData = physicalOfficeAddressParameterValue?.additionalData ? {} : physicalOfficeAddressParameterValue?.additionalData!
        this.city = physicalOfficeAddressParameterValue?.city ;
        this.countryOrRegion = physicalOfficeAddressParameterValue?.countryOrRegion ;
        this.officeLocation = physicalOfficeAddressParameterValue?.officeLocation ;
        this.postalCode = physicalOfficeAddressParameterValue?.postalCode ;
        this.state = physicalOfficeAddressParameterValue?.state ;
        this.street = physicalOfficeAddressParameterValue?.street ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "street": n => { this.street = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.city){
        if(this.city)
        writer.writeStringValue("city", this.city);
        }
        if(this.countryOrRegion){
        if(this.countryOrRegion)
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        }
        if(this.officeLocation){
        if(this.officeLocation)
        writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.postalCode){
        if(this.postalCode)
        writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.state){
        if(this.state)
        writer.writeStringValue("state", this.state);
        }
        if(this.street){
        if(this.street)
        writer.writeStringValue("street", this.street);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
