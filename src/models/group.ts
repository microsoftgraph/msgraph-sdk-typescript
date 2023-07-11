import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLabel} from './assignedLabel';
import {AssignedLicense} from './assignedLicense';
import {Calendar} from './calendar';
import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {Event} from './event';
import {Extension} from './extension';
import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupSetting} from './groupSetting';
import {LicenseProcessingState} from './licenseProcessingState';
import {Onenote} from './onenote';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {PlannerGroup} from './plannerGroup';
import {ProfilePhoto} from './profilePhoto';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {Site} from './site';
import {Team} from './team';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Group extends DirectoryObject, Parsable {
    /**
     * The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     */
    acceptedSenders?: DirectoryObject[] | undefined;
    /**
     * Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    allowExternalSenders?: boolean | undefined;
    /**
     * Represents the app roles a group has been granted for an application. Supports $expand.
     */
    appRoleAssignments?: AppRoleAssignment[] | undefined;
    /**
     * The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
     */
    assignedLabels?: AssignedLabel[] | undefined;
    /**
     * The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq).Read-only.
     */
    assignedLicenses?: AssignedLicense[] | undefined;
    /**
     * Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    autoSubscribeNewMembers?: boolean | undefined;
    /**
     * The group's calendar. Read-only.
     */
    calendar?: Calendar | undefined;
    /**
     * The calendar view for the calendar. Read-only.
     */
    calendarView?: Event[] | undefined;
    /**
     * Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     */
    classification?: string | undefined;
    /**
     * The group's conversations.
     */
    conversations?: Conversation[] | undefined;
    /**
     * Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only.
     */
    createdOnBehalfOf?: DirectoryObject | undefined;
    /**
     * An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     */
    description?: string | undefined;
    /**
     * The display name for the group. This property is required when a group is created and cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     */
    displayName?: string | undefined;
    /**
     * The group's default drive. Read-only.
     */
    drive?: Drive | undefined;
    /**
     * The group's drives. Read-only.
     */
    drives?: Drive[] | undefined;
    /**
     * The group's calendar events.
     */
    events?: Event[] | undefined;
    /**
     * Timestamp of when the group is set to expire. Is null for security groups but for Microsoft 365 groups, it represents when the group is set to expire as defined in the groupLifecyclePolicy. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     */
    expirationDateTime?: Date | undefined;
    /**
     * The collection of open extensions defined for the group. Read-only. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * The collection of lifecycle policies for this group. Read-only. Nullable.
     */
    groupLifecyclePolicies?: GroupLifecyclePolicy[] | undefined;
    /**
     * Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not).
     */
    groupTypes?: string[] | undefined;
    /**
     * Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true). See an example. Supports $filter (eq).
     */
    hasMembersWithLicenseErrors?: boolean | undefined;
    /**
     * True if the group is not displayed in certain parts of the Outlook UI: the Address Book, address lists for selecting message recipients, and the Browse Groups dialog for searching groups; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    hideFromAddressLists?: boolean | undefined;
    /**
     * True if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web; otherwise, false. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    hideFromOutlookClients?: boolean | undefined;
    /**
     * When a group is associated with a team this property determines whether the team is in read-only mode.To read this property, use the /group/{groupId}/team endpoint or the Get team API. To update this property, use the archiveTeam and unarchiveTeam APIs.
     */
    isArchived?: boolean | undefined;
    /**
     * Indicates whether this group can be assigned to an Azure Active Directory role or not. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true, visibility must be Hidden, and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global Administrator and Privileged Role Administrator roles can set this property. The caller must also be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsUsing this feature requires a Azure AD Premium P1 license. Returned by default. Supports $filter (eq, ne, not).
     */
    isAssignableToRole?: boolean | undefined;
    /**
     * Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    isSubscribedByMail?: boolean | undefined;
    /**
     * Indicates status of the group license assignment to all members of the group. Default value is false. Read-only. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.Returned only on $select. Read-only.
     */
    licenseProcessingState?: LicenseProcessingState | undefined;
    /**
     * The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    mail?: string | undefined;
    /**
     * Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not).
     */
    mailEnabled?: boolean | undefined;
    /**
     * The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : <> , SPACE. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    mailNickname?: string | undefined;
    /**
     * Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     */
    memberOf?: DirectoryObject[] | undefined;
    /**
     * The members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     */
    members?: DirectoryObject[] | undefined;
    /**
     * The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     */
    membershipRule?: string | undefined;
    /**
     * Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     */
    membershipRuleProcessingState?: string | undefined;
    /**
     * A list of group members with license errors from this group-based license assignment. Read-only.
     */
    membersWithLicenseErrors?: DirectoryObject[] | undefined;
    /**
     * The onenote property
     */
    onenote?: Onenote | undefined;
    /**
     * The onPremisesDomainName property
     */
    onPremisesDomainName?: string | undefined;
    /**
     * Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     */
    onPremisesLastSyncDateTime?: Date | undefined;
    /**
     * The onPremisesNetBiosName property
     */
    onPremisesNetBiosName?: string | undefined;
    /**
     * Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /**
     * Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     */
    onPremisesSamAccountName?: string | undefined;
    /**
     * Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only.
     */
    onPremisesSecurityIdentifier?: string | undefined;
    /**
     * true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     */
    onPremisesSyncEnabled?: boolean | undefined;
    /**
     * The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     */
    owners?: DirectoryObject[] | undefined;
    /**
     * The permission that has been granted for a group to a specific application. Supports $expand.
     */
    permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * The group's profile photo
     */
    photo?: ProfilePhoto | undefined;
    /**
     * The profile photos owned by the group. Read-only. Nullable.
     */
    photos?: ProfilePhoto[] | undefined;
    /**
     * Entry-point to Planner resource that might exist for a Unified Group.
     */
    planner?: PlannerGroup | undefined;
    /**
     * The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default.
     */
    preferredDataLocation?: string | undefined;
    /**
     * The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    preferredLanguage?: string | undefined;
    /**
     * Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required to filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0).
     */
    proxyAddresses?: string[] | undefined;
    /**
     * The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     */
    rejectedSenders?: DirectoryObject[] | undefined;
    /**
     * Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     */
    renewedDateTime?: Date | undefined;
    /**
     * Specifies whether the group is a security group. Required. Returned by default. Supports $filter (eq, ne, not, in).
     */
    securityEnabled?: boolean | undefined;
    /**
     * Security identifier of the group, used in Windows scenarios. Returned by default.
     */
    securityIdentifier?: string | undefined;
    /**
     * Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
     */
    settings?: GroupSetting[] | undefined;
    /**
     * The list of SharePoint sites in this group. Access the default site with /sites/root.
     */
    sites?: Site[] | undefined;
    /**
     * The team associated with this group.
     */
    team?: Team | undefined;
    /**
     * Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     */
    theme?: string | undefined;
    /**
     * The group's conversation threads. Nullable.
     */
    threads?: ConversationThread[] | undefined;
    /**
     * The groups that a group is a member of, either directly and through nested membership. Nullable.
     */
    transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * The direct and transitive members of a group. Nullable.
     */
    transitiveMembers?: DirectoryObject[] | undefined;
    /**
     * Count of conversations that have received new posts since the signed-in user last visited the group. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    unseenCount?: number | undefined;
    /**
     * Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or HiddenMembership. HiddenMembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     */
    visibility?: string | undefined;
}
