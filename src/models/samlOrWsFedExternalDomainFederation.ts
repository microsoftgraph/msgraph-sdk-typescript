import {createExternalDomainNameFromDiscriminatorValue} from './createExternalDomainNameFromDiscriminatorValue';
import {ExternalDomainName, SamlOrWsFedProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlOrWsFedExternalDomainFederation extends SamlOrWsFedProvider implements Parsable {
    /** Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq). */
    private _domains?: ExternalDomainName[] | undefined;
    /**
     * Instantiates a new SamlOrWsFedExternalDomainFederation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the domains property value. Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq).
     * @returns a externalDomainName
     */
    public get domains() {
        return this._domains;
    };
    /**
     * Sets the domains property value. Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq).
     * @param value Value to set for the domains property.
     */
    public set domains(value: ExternalDomainName[] | undefined) {
        this._domains = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "domains": n => { this.domains = n.getCollectionOfObjectValues<ExternalDomainName>(createExternalDomainNameFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ExternalDomainName>("domains", this.domains);
    };
}
