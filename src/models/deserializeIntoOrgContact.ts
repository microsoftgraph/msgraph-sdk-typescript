import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalOfficeAddressFromDiscriminatorValue} from './createPhysicalOfficeAddressFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
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

export function deserializeIntoOrgContact(orgContact: OrgContact | undefined = {} as OrgContact) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(orgContact),
        "addresses": n => { orgContact.addresses = n.getCollectionOfObjectValues<PhysicalOfficeAddress>(createPhysicalOfficeAddressFromDiscriminatorValue); },
        "companyName": n => { orgContact.companyName = n.getStringValue(); },
        "department": n => { orgContact.department = n.getStringValue(); },
        "directReports": n => { orgContact.directReports = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "displayName": n => { orgContact.displayName = n.getStringValue(); },
        "givenName": n => { orgContact.givenName = n.getStringValue(); },
        "jobTitle": n => { orgContact.jobTitle = n.getStringValue(); },
        "mail": n => { orgContact.mail = n.getStringValue(); },
        "mailNickname": n => { orgContact.mailNickname = n.getStringValue(); },
        "manager": n => { orgContact.manager = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "memberOf": n => { orgContact.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "onPremisesLastSyncDateTime": n => { orgContact.onPremisesLastSyncDateTime = n.getDateValue(); },
        "onPremisesProvisioningErrors": n => { orgContact.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
        "onPremisesSyncEnabled": n => { orgContact.onPremisesSyncEnabled = n.getBooleanValue(); },
        "phones": n => { orgContact.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
        "proxyAddresses": n => { orgContact.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "surname": n => { orgContact.surname = n.getStringValue(); },
        "transitiveMemberOf": n => { orgContact.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
