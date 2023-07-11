import {EmailAddress} from './emailAddress';
import {Extension} from './extension';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OutlookItem} from './outlookItem';
import {PhysicalAddress} from './physicalAddress';
import {ProfilePhoto} from './profilePhoto';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Contact extends OutlookItem, Parsable {
    /**
     * The name of the contact's assistant.
     */
    assistantName?: string | undefined;
    /**
     * The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    birthday?: Date | undefined;
    /**
     * The contact's business address.
     */
    businessAddress?: PhysicalAddress | undefined;
    /**
     * The business home page of the contact.
     */
    businessHomePage?: string | undefined;
    /**
     * The contact's business phone numbers.
     */
    businessPhones?: string[] | undefined;
    /**
     * The names of the contact's children.
     */
    children?: string[] | undefined;
    /**
     * The name of the contact's company.
     */
    companyName?: string | undefined;
    /**
     * The contact's department.
     */
    department?: string | undefined;
    /**
     * The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     */
    displayName?: string | undefined;
    /**
     * The contact's email addresses.
     */
    emailAddresses?: EmailAddress[] | undefined;
    /**
     * The collection of open extensions defined for the contact. Read-only. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * The name the contact is filed under.
     */
    fileAs?: string | undefined;
    /**
     * The contact's generation.
     */
    generation?: string | undefined;
    /**
     * The contact's given name.
     */
    givenName?: string | undefined;
    /**
     * The contact's home address.
     */
    homeAddress?: PhysicalAddress | undefined;
    /**
     * The contact's home phone numbers.
     */
    homePhones?: string[] | undefined;
    /**
     * The imAddresses property
     */
    imAddresses?: string[] | undefined;
    /**
     * The initials property
     */
    initials?: string | undefined;
    /**
     * The jobTitle property
     */
    jobTitle?: string | undefined;
    /**
     * The manager property
     */
    manager?: string | undefined;
    /**
     * The middleName property
     */
    middleName?: string | undefined;
    /**
     * The mobilePhone property
     */
    mobilePhone?: string | undefined;
    /**
     * The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * The nickName property
     */
    nickName?: string | undefined;
    /**
     * The officeLocation property
     */
    officeLocation?: string | undefined;
    /**
     * The otherAddress property
     */
    otherAddress?: PhysicalAddress | undefined;
    /**
     * The parentFolderId property
     */
    parentFolderId?: string | undefined;
    /**
     * The personalNotes property
     */
    personalNotes?: string | undefined;
    /**
     * Optional contact picture. You can get or set a photo for a contact.
     */
    photo?: ProfilePhoto | undefined;
    /**
     * The profession property
     */
    profession?: string | undefined;
    /**
     * The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * The spouseName property
     */
    spouseName?: string | undefined;
    /**
     * The surname property
     */
    surname?: string | undefined;
    /**
     * The title property
     */
    title?: string | undefined;
    /**
     * The yomiCompanyName property
     */
    yomiCompanyName?: string | undefined;
    /**
     * The yomiGivenName property
     */
    yomiGivenName?: string | undefined;
    /**
     * The yomiSurname property
     */
    yomiSurname?: string | undefined;
}
