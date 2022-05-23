import {createProxiedDomainFromDiscriminatorValue} from './createProxiedDomainFromDiscriminatorValue';
import {ProxiedDomainImpl} from './index';
import {ProxiedDomain} from './proxiedDomain';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Proxied Domain Collection */
export class WindowsInformationProtectionProxiedDomainCollectionImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionProxiedDomainCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name */
    public displayName?: string | undefined;
    /** Collection of proxied domains */
    public proxiedDomains?: ProxiedDomain[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionProxiedDomainCollection and sets the default values.
     * @param windowsInformationProtectionProxiedDomainCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionProxiedDomainCollectionParameterValue?: WindowsInformationProtectionProxiedDomainCollection | undefined) {
        this.additionalData = windowsInformationProtectionProxiedDomainCollectionParameterValue?.additionalData ? windowsInformationProtectionProxiedDomainCollectionParameterValue?.additionalData! : {}
        this.displayName = windowsInformationProtectionProxiedDomainCollectionParameterValue?.displayName ;
        this.proxiedDomains = windowsInformationProtectionProxiedDomainCollectionParameterValue?.proxiedDomains ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "proxiedDomains": n => { this.proxiedDomains = n.getCollectionOfObjectValues<ProxiedDomainImpl>(createProxiedDomainFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.proxiedDomains && this.proxiedDomains.length != 0){        const proxiedDomainsArrValue: ProxiedDomainImpl[] = []; this.proxiedDomains?.forEach(element => {proxiedDomainsArrValue.push(new ProxiedDomainImpl(element));});
        writer.writeCollectionOfObjectValues<ProxiedDomainImpl>("proxiedDomains", proxiedDomainsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
