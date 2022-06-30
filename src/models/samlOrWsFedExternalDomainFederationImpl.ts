import {createExternalDomainNameFromDiscriminatorValue} from './createExternalDomainNameFromDiscriminatorValue';
import {ExternalDomainName} from './externalDomainName';
import {ExternalDomainNameImpl, SamlOrWsFedProviderImpl} from './index';
import {SamlOrWsFedExternalDomainFederation} from './samlOrWsFedExternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlOrWsFedExternalDomainFederationImpl extends SamlOrWsFedProviderImpl implements SamlOrWsFedExternalDomainFederation {
    /** Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq). */
    private _domains?: ExternalDomainName[] | undefined;
    /**
     * Instantiates a new SamlOrWsFedExternalDomainFederation and sets the default values.
     * @param samlOrWsFedExternalDomainFederationParameterValue 
     */
    public constructor(samlOrWsFedExternalDomainFederationParameterValue?: SamlOrWsFedExternalDomainFederation | undefined) {
        super(samlOrWsFedExternalDomainFederationParameterValue);
        this._domains = samlOrWsFedExternalDomainFederationParameterValue?.domains;
    };
    /**
     * Gets the domains property value. Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq).
     * @returns a ExternalDomainNameInterface
     */
    public get domains() {
        return this._domains;
    };
    /**
     * Sets the domains property value. Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq).
     * @param value Value to set for the domains property.
     */
    public set domains(value: ExternalDomainName[] | undefined) {
        if(value) {
            const domainsArrValue: ExternalDomainNameImpl[] = [];
            this.domains?.forEach(element => {
                domainsArrValue.push((element instanceof ExternalDomainNameImpl? element:new ExternalDomainNameImpl(element)));
            });
            this._domains = domainsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "domains": n => { this.domains = n.getCollectionOfObjectValues<ExternalDomainNameImpl>(createExternalDomainNameFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.domains && this.domains.length != 0){        const domainsArrValue: ExternalDomainNameImpl[] = [];
        this.domains?.forEach(element => {
            domainsArrValue.push((element instanceof ExternalDomainNameImpl? element:new ExternalDomainNameImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExternalDomainNameImpl>("domains", domainsArrValue);
        }
    };
}
