import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhysicalAddressImpl implements AdditionalDataHolder, Parsable, PhysicalAddress {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The city. */
    public city?: string | undefined;
    /** The country or region. It's a free-format string value, for example, 'United States'. */
    public countryOrRegion?: string | undefined;
    /** The postal code. */
    public postalCode?: string | undefined;
    /** The state. */
    public state?: string | undefined;
    /** The street. */
    public street?: string | undefined;
    /**
     * Instantiates a new physicalAddress and sets the default values.
     * @param physicalAddressParameterValue 
     */
    public constructor(physicalAddressParameterValue?: PhysicalAddress | undefined) {
        this.additionalData = physicalAddressParameterValue?.additionalData ? physicalAddressParameterValue?.additionalData! : {}
        this.city = physicalAddressParameterValue?.city ;
        this.countryOrRegion = physicalAddressParameterValue?.countryOrRegion ;
        this.postalCode = physicalAddressParameterValue?.postalCode ;
        this.state = physicalAddressParameterValue?.state ;
        this.street = physicalAddressParameterValue?.street ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
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
        writer.writeStringValue("city", this.city);
        }
        if(this.countryOrRegion){
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        }
        if(this.postalCode){
        writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.street){
        writer.writeStringValue("street", this.street);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
