import {DirectoryObject} from './directoryObject';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {OrgContact} from './orgContact';
import {Phone} from './phone';
import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {serializePhone} from './serializePhone';
import {serializePhysicalOfficeAddress} from './serializePhysicalOfficeAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrgContact(writer: SerializationWriter, orgContact: OrgContact | undefined = {} as OrgContact) : void {
        serializeDirectoryObject(writer, orgContact)
        writer.writeCollectionOfObjectValues<PhysicalOfficeAddress>("addresses", orgContact.addresses, serializePhysicalOfficeAddress);
        writer.writeStringValue("companyName", orgContact.companyName);
        writer.writeStringValue("department", orgContact.department);
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", orgContact.directReports, serializeDirectoryObject);
        writer.writeStringValue("displayName", orgContact.displayName);
        writer.writeStringValue("givenName", orgContact.givenName);
        writer.writeStringValue("jobTitle", orgContact.jobTitle);
        writer.writeStringValue("mail", orgContact.mail);
        writer.writeStringValue("mailNickname", orgContact.mailNickname);
        writer.writeObjectValue<DirectoryObject>("manager", orgContact.manager, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", orgContact.memberOf, serializeDirectoryObject);
        writer.writeDateValue("onPremisesLastSyncDateTime", orgContact.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", orgContact.onPremisesProvisioningErrors, serializeOnPremisesProvisioningError);
        writer.writeBooleanValue("onPremisesSyncEnabled", orgContact.onPremisesSyncEnabled);
        writer.writeCollectionOfObjectValues<Phone>("phones", orgContact.phones, serializePhone);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", orgContact.proxyAddresses);
        writer.writeStringValue("surname", orgContact.surname);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", orgContact.transitiveMemberOf, serializeDirectoryObject);
}
