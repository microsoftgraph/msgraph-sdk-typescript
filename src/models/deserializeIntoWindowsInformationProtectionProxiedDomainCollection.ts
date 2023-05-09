import {createProxiedDomainFromDiscriminatorValue} from './createProxiedDomainFromDiscriminatorValue';
import {ProxiedDomain} from './proxiedDomain';
import {serializeProxiedDomain} from './serializeProxiedDomain';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionProxiedDomainCollection(windowsInformationProtectionProxiedDomainCollection: WindowsInformationProtectionProxiedDomainCollection | undefined = {} as WindowsInformationProtectionProxiedDomainCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionProxiedDomainCollection.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionProxiedDomainCollection.odataType = n.getStringValue(); },
        "proxiedDomains": n => { windowsInformationProtectionProxiedDomainCollection.proxiedDomains = n.getCollectionOfObjectValues<ProxiedDomain>(createProxiedDomainFromDiscriminatorValue); },
    }
}
