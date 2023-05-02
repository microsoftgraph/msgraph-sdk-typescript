import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDomainDnsRecordFromDiscriminatorValue} from './createDomainDnsRecordFromDiscriminatorValue';
import {createDomainStateFromDiscriminatorValue} from './createDomainStateFromDiscriminatorValue';
import {createInternalDomainFederationFromDiscriminatorValue} from './createInternalDomainFederationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {Domain} from './domain';
import {DomainDnsRecord} from './domainDnsRecord';
import {DomainState} from './domainState';
import {InternalDomainFederation} from './internalDomainFederation';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {serializeDomainState} from './serializeDomainState';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomain(domain: Domain | undefined = {} as Domain) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(domain),
        "authenticationType": n => { domain.authenticationType = n.getStringValue(); },
        "availabilityStatus": n => { domain.availabilityStatus = n.getStringValue(); },
        "domainNameReferences": n => { domain.domainNameReferences = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "federationConfiguration": n => { domain.federationConfiguration = n.getCollectionOfObjectValues<InternalDomainFederation>(createInternalDomainFederationFromDiscriminatorValue); },
        "isAdminManaged": n => { domain.isAdminManaged = n.getBooleanValue(); },
        "isDefault": n => { domain.isDefault = n.getBooleanValue(); },
        "isInitial": n => { domain.isInitial = n.getBooleanValue(); },
        "isRoot": n => { domain.isRoot = n.getBooleanValue(); },
        "isVerified": n => { domain.isVerified = n.getBooleanValue(); },
        "manufacturer": n => { domain.manufacturer = n.getStringValue(); },
        "model": n => { domain.model = n.getStringValue(); },
        "passwordNotificationWindowInDays": n => { domain.passwordNotificationWindowInDays = n.getNumberValue(); },
        "passwordValidityPeriodInDays": n => { domain.passwordValidityPeriodInDays = n.getNumberValue(); },
        "serviceConfigurationRecords": n => { domain.serviceConfigurationRecords = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
        "state": n => { domain.state = n.getObjectValue<DomainState>(createDomainStateFromDiscriminatorValue); },
        "supportedServices": n => { domain.supportedServices = n.getCollectionOfPrimitiveValues<string>(); },
        "verificationDnsRecords": n => { domain.verificationDnsRecords = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
    }
}
