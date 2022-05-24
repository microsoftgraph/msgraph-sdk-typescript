import {Contract} from './contract';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of contract entities. */
export class ContractImpl extends DirectoryObjectImpl implements Contract, Parsable {
    /** Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below. */
    public contractType?: string | undefined;
    /** The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource. */
    public customerId?: string | undefined;
    /** A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes. */
    public defaultDomainName?: string | undefined;
    /** A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new contract and sets the default values.
     * @param contractParameterValue 
     */
    public constructor(contractParameterValue?: Contract | undefined) {
        super();
        this.contractType = contractParameterValue?.contractType ;
        this.customerId = contractParameterValue?.customerId ;
        this.defaultDomainName = contractParameterValue?.defaultDomainName ;
        this.displayName = contractParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contractType": n => { this.contractType = n.getStringValue(); },
            "customerId": n => { this.customerId = n.getStringValue(); },
            "defaultDomainName": n => { this.defaultDomainName = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contractType){
        writer.writeStringValue("contractType", this.contractType);
        }
        if(this.customerId){
        writer.writeStringValue("customerId", this.customerId);
        }
        if(this.defaultDomainName){
        writer.writeStringValue("defaultDomainName", this.defaultDomainName);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
    };
}
