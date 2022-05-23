import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLabel} from './assignedLabel';
import {AssignedLicense} from './assignedLicense';
import {Calendar} from './calendar';
import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAssignedLabelFromDiscriminatorValue} from './createAssignedLabelFromDiscriminatorValue';
import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createConversationFromDiscriminatorValue} from './createConversationFromDiscriminatorValue';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {createGroupSettingFromDiscriminatorValue} from './createGroupSettingFromDiscriminatorValue';
import {createLicenseProcessingStateFromDiscriminatorValue} from './createLicenseProcessingStateFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPlannerGroupFromDiscriminatorValue} from './createPlannerGroupFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {Event} from './event';
import {Extension} from './extension';
import {Group} from './group';
import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupSetting} from './groupSetting';
import {AppRoleAssignmentImpl, AssignedLabelImpl, AssignedLicenseImpl, CalendarImpl, ConversationImpl, ConversationThreadImpl, DirectoryObjectImpl, DriveImpl, EventImpl, ExtensionImpl, GroupLifecyclePolicyImpl, GroupSettingImpl, LicenseProcessingStateImpl, OnenoteImpl, OnPremisesProvisioningErrorImpl, PlannerGroupImpl, ProfilePhotoImpl, ResourceSpecificPermissionGrantImpl, SiteImpl, TeamImpl} from './index';
import {LicenseProcessingState} from './licenseProcessingState';
import {Onenote} from './onenote';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {PlannerGroup} from './plannerGroup';
import {ProfilePhoto} from './profilePhoto';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {Site} from './site';
import {Team} from './team';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class GroupImpl extends DirectoryObjectImpl implements Group, Parsable {
    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post. */
    public acceptedSenders?: DirectoryObject[] | undefined;
    /** Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public allowExternalSenders?: boolean | undefined;
    /** Represents the app roles a group has been granted for an application. Supports $expand. */
    public appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. */
    public assignedLabels?: AssignedLabel[] | undefined;
    /** The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only. */
    public assignedLicenses?: AssignedLicense[] | undefined;
    /** Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public autoSubscribeNewMembers?: boolean | undefined;
    /** The group's calendar. Read-only. */
    public calendar?: Calendar | undefined;
    /** The calendar view for the calendar. Read-only. */
    public calendarView?: Event[] | undefined;
    /** Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    public classification?: string | undefined;
    /** The group's conversations. */
    public conversations?: Conversation[] | undefined;
    /** Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    public createdDateTime?: Date | undefined;
    /** The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only. */
    public createdOnBehalfOf?: DirectoryObject | undefined;
    /** An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    public description?: string | undefined;
    /** The display name for the group. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    public displayName?: string | undefined;
    /** The group's default drive. Read-only. */
    public drive?: Drive | undefined;
    /** The group's drives. Read-only. */
    public drives?: Drive[] | undefined;
    /** The group's events. */
    public events?: Event[] | undefined;
    /** Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    public expirationDateTime?: Date | undefined;
    /** The collection of open extensions defined for the group. Read-only. Nullable. */
    public extensions?: Extension[] | undefined;
    /** The collection of lifecycle policies for this group. Read-only. Nullable. */
    public groupLifecyclePolicies?: GroupLifecyclePolicy[] | undefined;
    /** Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not). */
    public groupTypes?: string[] | undefined;
    /** Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq). */
    public hasMembersWithLicenseErrors?: boolean | undefined;
    /** true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public hideFromAddressLists?: boolean | undefined;
    /** true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public hideFromOutlookClients?: boolean | undefined;
    /** When a group is associated with a team, this property determines whether the team is in read-only mode. */
    public isArchived?: boolean | undefined;
    /** Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not). */
    public isAssignableToRole?: boolean | undefined;
    /** Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public isSubscribedByMail?: boolean | undefined;
    /** Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only. */
    public licenseProcessingState?: LicenseProcessingState | undefined;
    /** The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public mail?: string | undefined;
    /** Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values). */
    public mailEnabled?: boolean | undefined;
    /** The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    public mailNickname?: string | undefined;
    /** Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand. */
    public memberOf?: DirectoryObject[] | undefined;
    /** Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName). */
    public members?: DirectoryObject[] | undefined;
    /** The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    public membershipRule?: string | undefined;
    /** Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in). */
    public membershipRuleProcessingState?: string | undefined;
    /** A list of group members with license errors from this group-based license assignment. Read-only. */
    public membersWithLicenseErrors?: DirectoryObject[] | undefined;
    /** Read-only. */
    public onenote?: Onenote | undefined;
    /** Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    public onPremisesDomainName?: string | undefined;
    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    public onPremisesLastSyncDateTime?: Date | undefined;
    /** Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    public onPremisesNetBiosName?: string | undefined;
    /** Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not). */
    public onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only. */
    public onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only. */
    public onPremisesSecurityIdentifier?: string | undefined;
    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    public onPremisesSyncEnabled?: boolean | undefined;
    /** The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName). */
    public owners?: DirectoryObject[] | undefined;
    /** The permissions that have been granted for a group to a specific application. Supports $expand. */
    public permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** The group's profile photo. */
    public photo?: ProfilePhoto | undefined;
    /** The profile photos owned by the group. Read-only. Nullable. */
    public photos?: ProfilePhoto[] | undefined;
    /** Selective Planner services available to the group. Read-only. Nullable. */
    public planner?: PlannerGroup | undefined;
    /** The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default. */
    public preferredDataLocation?: string | undefined;
    /** The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public preferredLanguage?: string | undefined;
    /** Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections). */
    public proxyAddresses?: string[] | undefined;
    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable */
    public rejectedSenders?: DirectoryObject[] | undefined;
    /** Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    public renewedDateTime?: Date | undefined;
    /** Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in). */
    public securityEnabled?: boolean | undefined;
    /** Security identifier of the group, used in Windows scenarios. Returned by default. */
    public securityIdentifier?: string | undefined;
    /** Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable. */
    public settings?: GroupSetting[] | undefined;
    /** The list of SharePoint sites in this group. Access the default site with /sites/root. */
    public sites?: Site[] | undefined;
    /** The team associated with this group. */
    public team?: Team | undefined;
    /** Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default. */
    public theme?: string | undefined;
    /** The group's conversation threads. Nullable. */
    public threads?: ConversationThread[] | undefined;
    /** The transitiveMemberOf property */
    public transitiveMemberOf?: DirectoryObject[] | undefined;
    /** The transitiveMembers property */
    public transitiveMembers?: DirectoryObject[] | undefined;
    /** Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    public unseenCount?: number | undefined;
    /** Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable. */
    public visibility?: string | undefined;
    /**
     * Instantiates a new group and sets the default values.
     * @param groupParameterValue 
     */
    public constructor(groupParameterValue?: Group | undefined) {
        super();
        this.acceptedSenders = groupParameterValue?.acceptedSenders ;
        this.allowExternalSenders = groupParameterValue?.allowExternalSenders ;
        this.appRoleAssignments = groupParameterValue?.appRoleAssignments ;
        this.assignedLabels = groupParameterValue?.assignedLabels ;
        this.assignedLicenses = groupParameterValue?.assignedLicenses ;
        this.autoSubscribeNewMembers = groupParameterValue?.autoSubscribeNewMembers ;
        this.calendar = groupParameterValue?.calendar ;
        this.calendarView = groupParameterValue?.calendarView ;
        this.classification = groupParameterValue?.classification ;
        this.conversations = groupParameterValue?.conversations ;
        this.createdDateTime = groupParameterValue?.createdDateTime ;
        this.createdOnBehalfOf = groupParameterValue?.createdOnBehalfOf ;
        this.description = groupParameterValue?.description ;
        this.displayName = groupParameterValue?.displayName ;
        this.drive = groupParameterValue?.drive ;
        this.drives = groupParameterValue?.drives ;
        this.events = groupParameterValue?.events ;
        this.expirationDateTime = groupParameterValue?.expirationDateTime ;
        this.extensions = groupParameterValue?.extensions ;
        this.groupLifecyclePolicies = groupParameterValue?.groupLifecyclePolicies ;
        this.groupTypes = groupParameterValue?.groupTypes ;
        this.hasMembersWithLicenseErrors = groupParameterValue?.hasMembersWithLicenseErrors ;
        this.hideFromAddressLists = groupParameterValue?.hideFromAddressLists ;
        this.hideFromOutlookClients = groupParameterValue?.hideFromOutlookClients ;
        this.isArchived = groupParameterValue?.isArchived ;
        this.isAssignableToRole = groupParameterValue?.isAssignableToRole ;
        this.isSubscribedByMail = groupParameterValue?.isSubscribedByMail ;
        this.licenseProcessingState = groupParameterValue?.licenseProcessingState ;
        this.mail = groupParameterValue?.mail ;
        this.mailEnabled = groupParameterValue?.mailEnabled ;
        this.mailNickname = groupParameterValue?.mailNickname ;
        this.memberOf = groupParameterValue?.memberOf ;
        this.members = groupParameterValue?.members ;
        this.membershipRule = groupParameterValue?.membershipRule ;
        this.membershipRuleProcessingState = groupParameterValue?.membershipRuleProcessingState ;
        this.membersWithLicenseErrors = groupParameterValue?.membersWithLicenseErrors ;
        this.onenote = groupParameterValue?.onenote ;
        this.onPremisesDomainName = groupParameterValue?.onPremisesDomainName ;
        this.onPremisesLastSyncDateTime = groupParameterValue?.onPremisesLastSyncDateTime ;
        this.onPremisesNetBiosName = groupParameterValue?.onPremisesNetBiosName ;
        this.onPremisesProvisioningErrors = groupParameterValue?.onPremisesProvisioningErrors ;
        this.onPremisesSamAccountName = groupParameterValue?.onPremisesSamAccountName ;
        this.onPremisesSecurityIdentifier = groupParameterValue?.onPremisesSecurityIdentifier ;
        this.onPremisesSyncEnabled = groupParameterValue?.onPremisesSyncEnabled ;
        this.owners = groupParameterValue?.owners ;
        this.permissionGrants = groupParameterValue?.permissionGrants ;
        this.photo = groupParameterValue?.photo ;
        this.photos = groupParameterValue?.photos ;
        this.planner = groupParameterValue?.planner ;
        this.preferredDataLocation = groupParameterValue?.preferredDataLocation ;
        this.preferredLanguage = groupParameterValue?.preferredLanguage ;
        this.proxyAddresses = groupParameterValue?.proxyAddresses ;
        this.rejectedSenders = groupParameterValue?.rejectedSenders ;
        this.renewedDateTime = groupParameterValue?.renewedDateTime ;
        this.securityEnabled = groupParameterValue?.securityEnabled ;
        this.securityIdentifier = groupParameterValue?.securityIdentifier ;
        this.settings = groupParameterValue?.settings ;
        this.sites = groupParameterValue?.sites ;
        this.team = groupParameterValue?.team ;
        this.theme = groupParameterValue?.theme ;
        this.threads = groupParameterValue?.threads ;
        this.transitiveMemberOf = groupParameterValue?.transitiveMemberOf ;
        this.transitiveMembers = groupParameterValue?.transitiveMembers ;
        this.unseenCount = groupParameterValue?.unseenCount ;
        this.visibility = groupParameterValue?.visibility ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptedSenders": n => { this.acceptedSenders = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "allowExternalSenders": n => { this.allowExternalSenders = n.getBooleanValue(); },
            "appRoleAssignments": n => { this.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignmentImpl>(createAppRoleAssignmentFromDiscriminatorValue); },
            "assignedLabels": n => { this.assignedLabels = n.getCollectionOfObjectValues<AssignedLabelImpl>(createAssignedLabelFromDiscriminatorValue); },
            "assignedLicenses": n => { this.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicenseImpl>(createAssignedLicenseFromDiscriminatorValue); },
            "autoSubscribeNewMembers": n => { this.autoSubscribeNewMembers = n.getBooleanValue(); },
            "calendar": n => { this.calendar = n.getObjectValue<CalendarImpl>(createCalendarFromDiscriminatorValue); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "classification": n => { this.classification = n.getStringValue(); },
            "conversations": n => { this.conversations = n.getCollectionOfObjectValues<ConversationImpl>(createConversationFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdOnBehalfOf": n => { this.createdOnBehalfOf = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<DriveImpl>(createDriveFromDiscriminatorValue); },
            "drives": n => { this.drives = n.getCollectionOfObjectValues<DriveImpl>(createDriveFromDiscriminatorValue); },
            "events": n => { this.events = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "groupLifecyclePolicies": n => { this.groupLifecyclePolicies = n.getCollectionOfObjectValues<GroupLifecyclePolicyImpl>(createGroupLifecyclePolicyFromDiscriminatorValue); },
            "groupTypes": n => { this.groupTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "hasMembersWithLicenseErrors": n => { this.hasMembersWithLicenseErrors = n.getBooleanValue(); },
            "hideFromAddressLists": n => { this.hideFromAddressLists = n.getBooleanValue(); },
            "hideFromOutlookClients": n => { this.hideFromOutlookClients = n.getBooleanValue(); },
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "isAssignableToRole": n => { this.isAssignableToRole = n.getBooleanValue(); },
            "isSubscribedByMail": n => { this.isSubscribedByMail = n.getBooleanValue(); },
            "licenseProcessingState": n => { this.licenseProcessingState = n.getObjectValue<LicenseProcessingStateImpl>(createLicenseProcessingStateFromDiscriminatorValue); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailEnabled": n => { this.mailEnabled = n.getBooleanValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "membershipRule": n => { this.membershipRule = n.getStringValue(); },
            "membershipRuleProcessingState": n => { this.membershipRuleProcessingState = n.getStringValue(); },
            "membersWithLicenseErrors": n => { this.membersWithLicenseErrors = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "onenote": n => { this.onenote = n.getObjectValue<OnenoteImpl>(createOnenoteFromDiscriminatorValue); },
            "onPremisesDomainName": n => { this.onPremisesDomainName = n.getStringValue(); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesNetBiosName": n => { this.onPremisesNetBiosName = n.getStringValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSamAccountName": n => { this.onPremisesSamAccountName = n.getStringValue(); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "permissionGrants": n => { this.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
            "photos": n => { this.photos = n.getCollectionOfObjectValues<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
            "planner": n => { this.planner = n.getObjectValue<PlannerGroupImpl>(createPlannerGroupFromDiscriminatorValue); },
            "preferredDataLocation": n => { this.preferredDataLocation = n.getStringValue(); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "rejectedSenders": n => { this.rejectedSenders = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "renewedDateTime": n => { this.renewedDateTime = n.getDateValue(); },
            "securityEnabled": n => { this.securityEnabled = n.getBooleanValue(); },
            "securityIdentifier": n => { this.securityIdentifier = n.getStringValue(); },
            "settings": n => { this.settings = n.getCollectionOfObjectValues<GroupSettingImpl>(createGroupSettingFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
            "team": n => { this.team = n.getObjectValue<TeamImpl>(createTeamFromDiscriminatorValue); },
            "theme": n => { this.theme = n.getStringValue(); },
            "threads": n => { this.threads = n.getCollectionOfObjectValues<ConversationThreadImpl>(createConversationThreadFromDiscriminatorValue); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "transitiveMembers": n => { this.transitiveMembers = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "unseenCount": n => { this.unseenCount = n.getNumberValue(); },
            "visibility": n => { this.visibility = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptedSenders && this.acceptedSenders.length != 0){        const acceptedSendersArrValue: DirectoryObjectImpl[] = []; this.acceptedSenders?.forEach(element => {acceptedSendersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("acceptedSenders", acceptedSendersArrValue);
        }
        if(this.allowExternalSenders){
        writer.writeBooleanValue("allowExternalSenders", this.allowExternalSenders);
        }
        if(this.appRoleAssignments && this.appRoleAssignments.length != 0){        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = []; this.appRoleAssignments?.forEach(element => {appRoleAssignmentsArrValue.push(new AppRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.assignedLabels && this.assignedLabels.length != 0){        const assignedLabelsArrValue: AssignedLabelImpl[] = []; this.assignedLabels?.forEach(element => {assignedLabelsArrValue.push(new AssignedLabelImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLabelImpl>("assignedLabels", assignedLabelsArrValue);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = []; this.assignedLicenses?.forEach(element => {assignedLicensesArrValue.push(new AssignedLicenseImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.autoSubscribeNewMembers){
        writer.writeBooleanValue("autoSubscribeNewMembers", this.autoSubscribeNewMembers);
        }
        if(this.calendar){
        writer.writeObjectValue<CalendarImpl>("calendar", new CalendarImpl(this.calendar));
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = []; this.calendarView?.forEach(element => {calendarViewArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("calendarView", calendarViewArrValue);
        }
        if(this.classification){
        writer.writeStringValue("classification", this.classification);
        }
        if(this.conversations && this.conversations.length != 0){        const conversationsArrValue: ConversationImpl[] = []; this.conversations?.forEach(element => {conversationsArrValue.push(new ConversationImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationImpl>("conversations", conversationsArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdOnBehalfOf){
        writer.writeObjectValue<DirectoryObjectImpl>("createdOnBehalfOf", new DirectoryObjectImpl(this.createdOnBehalfOf));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
        writer.writeObjectValue<DriveImpl>("drive", new DriveImpl(this.drive));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = []; this.drives?.forEach(element => {drivesArrValue.push(new DriveImpl(element));});
        writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = []; this.events?.forEach(element => {eventsArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("events", eventsArrValue);
        }
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.groupLifecyclePolicies && this.groupLifecyclePolicies.length != 0){        const groupLifecyclePoliciesArrValue: GroupLifecyclePolicyImpl[] = []; this.groupLifecyclePolicies?.forEach(element => {groupLifecyclePoliciesArrValue.push(new GroupLifecyclePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicyImpl>("groupLifecyclePolicies", groupLifecyclePoliciesArrValue);
        }
        if(this.groupTypes){
        writer.writeCollectionOfPrimitiveValues<string>("groupTypes", this.groupTypes);
        }
        if(this.hasMembersWithLicenseErrors){
        writer.writeBooleanValue("hasMembersWithLicenseErrors", this.hasMembersWithLicenseErrors);
        }
        if(this.hideFromAddressLists){
        writer.writeBooleanValue("hideFromAddressLists", this.hideFromAddressLists);
        }
        if(this.hideFromOutlookClients){
        writer.writeBooleanValue("hideFromOutlookClients", this.hideFromOutlookClients);
        }
        if(this.isArchived){
        writer.writeBooleanValue("isArchived", this.isArchived);
        }
        if(this.isAssignableToRole){
        writer.writeBooleanValue("isAssignableToRole", this.isAssignableToRole);
        }
        if(this.isSubscribedByMail){
        writer.writeBooleanValue("isSubscribedByMail", this.isSubscribedByMail);
        }
        if(this.licenseProcessingState){
        writer.writeObjectValue<LicenseProcessingStateImpl>("licenseProcessingState", new LicenseProcessingStateImpl(this.licenseProcessingState));
        }
        if(this.mail){
        writer.writeStringValue("mail", this.mail);
        }
        if(this.mailEnabled){
        writer.writeBooleanValue("mailEnabled", this.mailEnabled);
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = []; this.memberOf?.forEach(element => {memberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.membershipRule){
        writer.writeStringValue("membershipRule", this.membershipRule);
        }
        if(this.membershipRuleProcessingState){
        writer.writeStringValue("membershipRuleProcessingState", this.membershipRuleProcessingState);
        }
        if(this.membersWithLicenseErrors && this.membersWithLicenseErrors.length != 0){        const membersWithLicenseErrorsArrValue: DirectoryObjectImpl[] = []; this.membersWithLicenseErrors?.forEach(element => {membersWithLicenseErrorsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("membersWithLicenseErrors", membersWithLicenseErrorsArrValue);
        }
        if(this.onenote){
        writer.writeObjectValue<OnenoteImpl>("onenote", new OnenoteImpl(this.onenote));
        }
        if(this.onPremisesDomainName){
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        }
        if(this.onPremisesLastSyncDateTime){
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesNetBiosName){
        writer.writeStringValue("onPremisesNetBiosName", this.onPremisesNetBiosName);
        }
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = []; this.onPremisesProvisioningErrors?.forEach(element => {onPremisesProvisioningErrorsArrValue.push(new OnPremisesProvisioningErrorImpl(element));});
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>("onPremisesProvisioningErrors", onPremisesProvisioningErrorsArrValue);
        }
        if(this.onPremisesSamAccountName){
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        }
        if(this.onPremisesSecurityIdentifier){
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        }
        if(this.onPremisesSyncEnabled){
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.owners && this.owners.length != 0){        const ownersArrValue: DirectoryObjectImpl[] = []; this.owners?.forEach(element => {ownersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.permissionGrants && this.permissionGrants.length != 0){        const permissionGrantsArrValue: ResourceSpecificPermissionGrantImpl[] = []; this.permissionGrants?.forEach(element => {permissionGrantsArrValue.push(new ResourceSpecificPermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("permissionGrants", permissionGrantsArrValue);
        }
        if(this.photo){
        writer.writeObjectValue<ProfilePhotoImpl>("photo", new ProfilePhotoImpl(this.photo));
        }
        if(this.photos && this.photos.length != 0){        const photosArrValue: ProfilePhotoImpl[] = []; this.photos?.forEach(element => {photosArrValue.push(new ProfilePhotoImpl(element));});
        writer.writeCollectionOfObjectValues<ProfilePhotoImpl>("photos", photosArrValue);
        }
        if(this.planner){
        writer.writeObjectValue<PlannerGroupImpl>("planner", new PlannerGroupImpl(this.planner));
        }
        if(this.preferredDataLocation){
        writer.writeStringValue("preferredDataLocation", this.preferredDataLocation);
        }
        if(this.preferredLanguage){
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        }
        if(this.proxyAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        }
        if(this.rejectedSenders && this.rejectedSenders.length != 0){        const rejectedSendersArrValue: DirectoryObjectImpl[] = []; this.rejectedSenders?.forEach(element => {rejectedSendersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("rejectedSenders", rejectedSendersArrValue);
        }
        if(this.renewedDateTime){
        writer.writeDateValue("renewedDateTime", this.renewedDateTime);
        }
        if(this.securityEnabled){
        writer.writeBooleanValue("securityEnabled", this.securityEnabled);
        }
        if(this.securityIdentifier){
        writer.writeStringValue("securityIdentifier", this.securityIdentifier);
        }
        if(this.settings && this.settings.length != 0){        const settingsArrValue: GroupSettingImpl[] = []; this.settings?.forEach(element => {settingsArrValue.push(new GroupSettingImpl(element));});
        writer.writeCollectionOfObjectValues<GroupSettingImpl>("settings", settingsArrValue);
        }
        if(this.sites && this.sites.length != 0){        const sitesArrValue: SiteImpl[] = []; this.sites?.forEach(element => {sitesArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("sites", sitesArrValue);
        }
        if(this.team){
        writer.writeObjectValue<TeamImpl>("team", new TeamImpl(this.team));
        }
        if(this.theme){
        writer.writeStringValue("theme", this.theme);
        }
        if(this.threads && this.threads.length != 0){        const threadsArrValue: ConversationThreadImpl[] = []; this.threads?.forEach(element => {threadsArrValue.push(new ConversationThreadImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationThreadImpl>("threads", threadsArrValue);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = []; this.transitiveMemberOf?.forEach(element => {transitiveMemberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
        if(this.transitiveMembers && this.transitiveMembers.length != 0){        const transitiveMembersArrValue: DirectoryObjectImpl[] = []; this.transitiveMembers?.forEach(element => {transitiveMembersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMembers", transitiveMembersArrValue);
        }
        if(this.unseenCount){
        writer.writeNumberValue("unseenCount", this.unseenCount);
        }
        if(this.visibility){
        writer.writeStringValue("visibility", this.visibility);
        }
    };
}
