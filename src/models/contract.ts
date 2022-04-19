import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contract extends DirectoryObject implements Parsable {
    /** Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below.  */
    private _contractType?: string | undefined;
    /** The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource.  */
    private _customerId?: string | undefined;
    /** A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes.  */
    private _defaultDomainName?: string | undefined;
    /** A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes.  */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new contract and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contractType property value. Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below.
     * @returns a string
     */
    public get contractType() {
        return this._contractType;
    };
    /**
     * Sets the contractType property value. Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below.
     * @param value Value to set for the contractType property.
     */
    public set contractType(value: string | undefined) {
        this._contractType = value;
    };
    /**
     * Gets the customerId property value. The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource.
     * @returns a string
     */
    public get customerId() {
        return this._customerId;
    };
    /**
     * Sets the customerId property value. The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource.
     * @param value Value to set for the customerId property.
     */
    public set customerId(value: string | undefined) {
        this._customerId = value;
    };
    /**
     * Gets the defaultDomainName property value. A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes.
     * @returns a string
     */
    public get defaultDomainName() {
        return this._defaultDomainName;
    };
    /**
     * Sets the defaultDomainName property value. A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes.
     * @param value Value to set for the defaultDomainName property.
     */
    public set defaultDomainName(value: string | undefined) {
        this._defaultDomainName = value;
    };
    /**
     * Gets the displayName property value. A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
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
        writer.writeStringValue("contractType", this.contractType);
        writer.writeStringValue("customerId", this.customerId);
        writer.writeStringValue("defaultDomainName", this.defaultDomainName);
        writer.writeStringValue("displayName", this.displayName);
    };
}
