import { type ProxiedDomain } from './proxiedDomain';
import { serializeProxiedDomain } from './serializeProxiedDomain';
import { type WindowsInformationProtectionProxiedDomainCollection } from './windowsInformationProtectionProxiedDomainCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionProxiedDomainCollection(writer: SerializationWriter, windowsInformationProtectionProxiedDomainCollection: WindowsInformationProtectionProxiedDomainCollection | undefined = {} as WindowsInformationProtectionProxiedDomainCollection) : void {
        writer.writeStringValue("displayName", windowsInformationProtectionProxiedDomainCollection.displayName);
        writer.writeStringValue("@odata.type", windowsInformationProtectionProxiedDomainCollection.odataType);
        writer.writeCollectionOfObjectValues<ProxiedDomain>("proxiedDomains", windowsInformationProtectionProxiedDomainCollection.proxiedDomains, serializeProxiedDomain);
        writer.writeAdditionalData(windowsInformationProtectionProxiedDomainCollection.additionalData);
}
