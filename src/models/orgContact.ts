import {DirectoryObject} from './directoryObject';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {Phone} from './phone';
import {PhysicalOfficeAddress} from './physicalOfficeAddress';

export interface OrgContact extends DirectoryObject{
    /** Postal addresses for this organizational contact. For now a contact can only have one physical address. */
    addresses?:PhysicalOfficeAddress[] | undefined;
    /** Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    companyName?:string | undefined;
    /** The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    department?:string | undefined;
    /** The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand. */
    directReports?:DirectoryObject[] | undefined;
    /** Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    displayName?:string | undefined;
    /** First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    givenName?:string | undefined;
    /** Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    jobTitle?:string | undefined;
    /** The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mail?:string | undefined;
    /** Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mailNickname?:string | undefined;
    /** The user or contact that is this contact's manager. Read-only. Supports $expand. */
    manager?:DirectoryObject | undefined;
    /** Groups that this contact is a member of. Read-only. Nullable. Supports $expand. */
    memberOf?:DirectoryObject[] | undefined;
    /** Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?:Date | undefined;
    /** List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not). */
    onPremisesProvisioningErrors?:OnPremisesProvisioningError[] | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?:boolean | undefined;
    /** List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in). */
    phones?:Phone[] | undefined;
    /** For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections). */
    proxyAddresses?:string[] | undefined;
    /** Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values) */
    surname?:string | undefined;
    /** The transitiveMemberOf property */
    transitiveMemberOf?:DirectoryObject[] | undefined;
}
