import {DirectoryObject} from './directoryObject';
import {Domain} from './domain';
import {DomainDnsRecord} from './domainDnsRecord';
import {DomainState} from './domainState';
import {InternalDomainFederation} from './internalDomainFederation';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {serializeDomainState} from './serializeDomainState';
import {serializeEntity} from './serializeEntity';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomain(writer: SerializationWriter, domain: Domain | undefined = {} as Domain) : void {
        serializeEntity(writer, domain)
        writer.writeStringValue("authenticationType", domain.authenticationType);
        writer.writeStringValue("availabilityStatus", domain.availabilityStatus);
        writer.writeCollectionOfObjectValues<DirectoryObject>("domainNameReferences", domain.domainNameReferences, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<InternalDomainFederation>("federationConfiguration", domain.federationConfiguration, serializeInternalDomainFederation);
        writer.writeBooleanValue("isAdminManaged", domain.isAdminManaged);
        writer.writeBooleanValue("isDefault", domain.isDefault);
        writer.writeBooleanValue("isInitial", domain.isInitial);
        writer.writeBooleanValue("isRoot", domain.isRoot);
        writer.writeBooleanValue("isVerified", domain.isVerified);
        writer.writeStringValue("manufacturer", domain.manufacturer);
        writer.writeStringValue("model", domain.model);
        writer.writeNumberValue("passwordNotificationWindowInDays", domain.passwordNotificationWindowInDays);
        writer.writeNumberValue("passwordValidityPeriodInDays", domain.passwordValidityPeriodInDays);
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("serviceConfigurationRecords", domain.serviceConfigurationRecords, serializeDomainDnsRecord);
        writer.writeObjectValue<DomainState>("state", domain.state, serializeDomainState);
        writer.writeCollectionOfPrimitiveValues<string>("supportedServices", domain.supportedServices);
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("verificationDnsRecords", domain.verificationDnsRecords, serializeDomainDnsRecord);
}
