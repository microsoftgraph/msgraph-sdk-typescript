import {Contact} from './contact';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {EmailAddress} from './emailAddress';
import {Extension} from './extension';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {PhysicalAddress} from './physicalAddress';
import {ProfilePhoto} from './profilePhoto';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeExtension} from './serializeExtension';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContact(contact: Contact | undefined = {} as Contact) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(contact),
        "assistantName": n => { contact.assistantName = n.getStringValue(); },
        "birthday": n => { contact.birthday = n.getDateValue(); },
        "businessAddress": n => { contact.businessAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "businessHomePage": n => { contact.businessHomePage = n.getStringValue(); },
        "businessPhones": n => { contact.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
        "children": n => { contact.children = n.getCollectionOfPrimitiveValues<string>(); },
        "companyName": n => { contact.companyName = n.getStringValue(); },
        "department": n => { contact.department = n.getStringValue(); },
        "displayName": n => { contact.displayName = n.getStringValue(); },
        "emailAddresses": n => { contact.emailAddresses = n.getCollectionOfObjectValues<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        "extensions": n => { contact.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "fileAs": n => { contact.fileAs = n.getStringValue(); },
        "generation": n => { contact.generation = n.getStringValue(); },
        "givenName": n => { contact.givenName = n.getStringValue(); },
        "homeAddress": n => { contact.homeAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "homePhones": n => { contact.homePhones = n.getCollectionOfPrimitiveValues<string>(); },
        "imAddresses": n => { contact.imAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "initials": n => { contact.initials = n.getStringValue(); },
        "jobTitle": n => { contact.jobTitle = n.getStringValue(); },
        "manager": n => { contact.manager = n.getStringValue(); },
        "middleName": n => { contact.middleName = n.getStringValue(); },
        "mobilePhone": n => { contact.mobilePhone = n.getStringValue(); },
        "multiValueExtendedProperties": n => { contact.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "nickName": n => { contact.nickName = n.getStringValue(); },
        "officeLocation": n => { contact.officeLocation = n.getStringValue(); },
        "otherAddress": n => { contact.otherAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "parentFolderId": n => { contact.parentFolderId = n.getStringValue(); },
        "personalNotes": n => { contact.personalNotes = n.getStringValue(); },
        "photo": n => { contact.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "profession": n => { contact.profession = n.getStringValue(); },
        "singleValueExtendedProperties": n => { contact.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "spouseName": n => { contact.spouseName = n.getStringValue(); },
        "surname": n => { contact.surname = n.getStringValue(); },
        "title": n => { contact.title = n.getStringValue(); },
        "yomiCompanyName": n => { contact.yomiCompanyName = n.getStringValue(); },
        "yomiGivenName": n => { contact.yomiGivenName = n.getStringValue(); },
        "yomiSurname": n => { contact.yomiSurname = n.getStringValue(); },
    }
}
