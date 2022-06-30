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
export class GroupImpl extends DirectoryObjectImpl implements Group {
    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post. */
    private _acceptedSenders?: DirectoryObject[] | undefined;
    /** Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _allowExternalSenders?: boolean | undefined;
    /** Represents the app roles a group has been granted for an application. Supports $expand. */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. */
    private _assignedLabels?: AssignedLabel[] | undefined;
    /** The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only. */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _autoSubscribeNewMembers?: boolean | undefined;
    /** The group's calendar. Read-only. */
    private _calendar?: Calendar | undefined;
    /** The calendar view for the calendar. Read-only. */
    private _calendarView?: Event[] | undefined;
    /** Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    private _classification?: string | undefined;
    /** The group's conversations. */
    private _conversations?: Conversation[] | undefined;
    /** Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only. */
    private _createdOnBehalfOf?: DirectoryObject | undefined;
    /** An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** The display name for the group. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** The group's default drive. Read-only. */
    private _drive?: Drive | undefined;
    /** The group's drives. Read-only. */
    private _drives?: Drive[] | undefined;
    /** The group's events. */
    private _events?: Event[] | undefined;
    /** Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _expirationDateTime?: Date | undefined;
    /** The collection of open extensions defined for the group. Read-only. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The collection of lifecycle policies for this group. Read-only. Nullable. */
    private _groupLifecyclePolicies?: GroupLifecyclePolicy[] | undefined;
    /** Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not). */
    private _groupTypes?: string[] | undefined;
    /** Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq). */
    private _hasMembersWithLicenseErrors?: boolean | undefined;
    /** true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _hideFromAddressLists?: boolean | undefined;
    /** true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _hideFromOutlookClients?: boolean | undefined;
    /** When a group is associated with a team, this property determines whether the team is in read-only mode. */
    private _isArchived?: boolean | undefined;
    /** Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not). */
    private _isAssignableToRole?: boolean | undefined;
    /** Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _isSubscribedByMail?: boolean | undefined;
    /** Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only. */
    private _licenseProcessingState?: LicenseProcessingState | undefined;
    /** The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mail?: string | undefined;
    /** Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values). */
    private _mailEnabled?: boolean | undefined;
    /** The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    private _mailNickname?: string | undefined;
    /** Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName). */
    private _members?: DirectoryObject[] | undefined;
    /** The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    private _membershipRule?: string | undefined;
    /** Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in). */
    private _membershipRuleProcessingState?: string | undefined;
    /** A list of group members with license errors from this group-based license assignment. Read-only. */
    private _membersWithLicenseErrors?: DirectoryObject[] | undefined;
    /** The onenote property */
    private _onenote?: Onenote | undefined;
    /** Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    private _onPremisesDomainName?: string | undefined;
    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    private _onPremisesNetBiosName?: string | undefined;
    /** Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not). */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only. */
    private _onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only. */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName). */
    private _owners?: DirectoryObject[] | undefined;
    /** The permissions that have been granted for a group to a specific application. Supports $expand. */
    private _permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** The group's profile photo. */
    private _photo?: ProfilePhoto | undefined;
    /** The profile photos owned by the group. Read-only. Nullable. */
    private _photos?: ProfilePhoto[] | undefined;
    /** Selective Planner services available to the group. Read-only. Nullable. */
    private _planner?: PlannerGroup | undefined;
    /** The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default. */
    private _preferredDataLocation?: string | undefined;
    /** The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _preferredLanguage?: string | undefined;
    /** Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections). */
    private _proxyAddresses?: string[] | undefined;
    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable */
    private _rejectedSenders?: DirectoryObject[] | undefined;
    /** Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _renewedDateTime?: Date | undefined;
    /** Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in). */
    private _securityEnabled?: boolean | undefined;
    /** Security identifier of the group, used in Windows scenarios. Returned by default. */
    private _securityIdentifier?: string | undefined;
    /** Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable. */
    private _settings?: GroupSetting[] | undefined;
    /** The list of SharePoint sites in this group. Access the default site with /sites/root. */
    private _sites?: Site[] | undefined;
    /** The team associated with this group. */
    private _team?: Team | undefined;
    /** Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default. */
    private _theme?: string | undefined;
    /** The group's conversation threads. Nullable. */
    private _threads?: ConversationThread[] | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** The transitiveMembers property */
    private _transitiveMembers?: DirectoryObject[] | undefined;
    /** Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _unseenCount?: number | undefined;
    /** Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable. */
    private _visibility?: string | undefined;
    /**
     * Gets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @returns a DirectoryObjectInterface
     */
    public get acceptedSenders() {
        return this._acceptedSenders;
    };
    /**
     * Sets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @param value Value to set for the acceptedSenders property.
     */
    public set acceptedSenders(value: DirectoryObject[] | undefined) {
        if(value) {
            const acceptedSendersArrValue: DirectoryObjectImpl[] = [];
            this.acceptedSenders?.forEach(element => {
                acceptedSendersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._acceptedSenders = acceptedSendersArrValue;
        }
    };
    /**
     * Gets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get allowExternalSenders() {
        return this._allowExternalSenders;
    };
    /**
     * Sets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the allowExternalSenders property.
     */
    public set allowExternalSenders(value: boolean | undefined) {
        if(value) {
            this._allowExternalSenders = value;
        }
    };
    /**
     * Gets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @returns a AppRoleAssignmentInterface
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        if(value) {
            const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
            this.appRoleAssignments?.forEach(element => {
                appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element:new AppRoleAssignmentImpl(element)));
            });
            this._appRoleAssignments = appRoleAssignmentsArrValue;
        }
    };
    /**
     * Gets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
     * @returns a AssignedLabelInterface
     */
    public get assignedLabels() {
        return this._assignedLabels;
    };
    /**
     * Sets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
     * @param value Value to set for the assignedLabels property.
     */
    public set assignedLabels(value: AssignedLabel[] | undefined) {
        if(value) {
            const assignedLabelsArrValue: AssignedLabelImpl[] = [];
            this.assignedLabels?.forEach(element => {
                assignedLabelsArrValue.push((element instanceof AssignedLabelImpl? element:new AssignedLabelImpl(element)));
            });
            this._assignedLabels = assignedLabelsArrValue;
        }
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
     * @returns a AssignedLicenseInterface
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        if(value) {
            const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
            this.assignedLicenses?.forEach(element => {
                assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element:new AssignedLicenseImpl(element)));
            });
            this._assignedLicenses = assignedLicensesArrValue;
        }
    };
    /**
     * Gets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get autoSubscribeNewMembers() {
        return this._autoSubscribeNewMembers;
    };
    /**
     * Sets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the autoSubscribeNewMembers property.
     */
    public set autoSubscribeNewMembers(value: boolean | undefined) {
        if(value) {
            this._autoSubscribeNewMembers = value;
        }
    };
    /**
     * Gets the calendar property value. The group's calendar. Read-only.
     * @returns a CalendarInterface
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The group's calendar. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        if(value) {
            this._calendar = value instanceof CalendarImpl? value : new CalendarImpl(value);
        }
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Read-only.
     * @returns a EventInterface
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        if(value) {
            const calendarViewArrValue: EventImpl[] = [];
            this.calendarView?.forEach(element => {
                calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._calendarView = calendarViewArrValue;
        }
    };
    /**
     * Gets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        if(value) {
            this._classification = value;
        }
    };
    /**
     * Instantiates a new group and sets the default values.
     * @param groupParameterValue 
     */
    public constructor(groupParameterValue?: Group | undefined) {
        super(groupParameterValue);
        this._acceptedSenders = groupParameterValue?.acceptedSenders;
        this._allowExternalSenders = groupParameterValue?.allowExternalSenders;
        this._appRoleAssignments = groupParameterValue?.appRoleAssignments;
        this._assignedLabels = groupParameterValue?.assignedLabels;
        this._assignedLicenses = groupParameterValue?.assignedLicenses;
        this._autoSubscribeNewMembers = groupParameterValue?.autoSubscribeNewMembers;
        this._calendar = groupParameterValue?.calendar;
        this._calendarView = groupParameterValue?.calendarView;
        this._classification = groupParameterValue?.classification;
        this._conversations = groupParameterValue?.conversations;
        this._createdDateTime = groupParameterValue?.createdDateTime;
        this._createdOnBehalfOf = groupParameterValue?.createdOnBehalfOf;
        this._description = groupParameterValue?.description;
        this._displayName = groupParameterValue?.displayName;
        this._drive = groupParameterValue?.drive;
        this._drives = groupParameterValue?.drives;
        this._events = groupParameterValue?.events;
        this._expirationDateTime = groupParameterValue?.expirationDateTime;
        this._extensions = groupParameterValue?.extensions;
        this._groupLifecyclePolicies = groupParameterValue?.groupLifecyclePolicies;
        this._groupTypes = groupParameterValue?.groupTypes;
        this._hasMembersWithLicenseErrors = groupParameterValue?.hasMembersWithLicenseErrors;
        this._hideFromAddressLists = groupParameterValue?.hideFromAddressLists;
        this._hideFromOutlookClients = groupParameterValue?.hideFromOutlookClients;
        this._isArchived = groupParameterValue?.isArchived;
        this._isAssignableToRole = groupParameterValue?.isAssignableToRole;
        this._isSubscribedByMail = groupParameterValue?.isSubscribedByMail;
        this._licenseProcessingState = groupParameterValue?.licenseProcessingState;
        this._mail = groupParameterValue?.mail;
        this._mailEnabled = groupParameterValue?.mailEnabled;
        this._mailNickname = groupParameterValue?.mailNickname;
        this._memberOf = groupParameterValue?.memberOf;
        this._members = groupParameterValue?.members;
        this._membershipRule = groupParameterValue?.membershipRule;
        this._membershipRuleProcessingState = groupParameterValue?.membershipRuleProcessingState;
        this._membersWithLicenseErrors = groupParameterValue?.membersWithLicenseErrors;
        this._onenote = groupParameterValue?.onenote;
        this._onPremisesDomainName = groupParameterValue?.onPremisesDomainName;
        this._onPremisesLastSyncDateTime = groupParameterValue?.onPremisesLastSyncDateTime;
        this._onPremisesNetBiosName = groupParameterValue?.onPremisesNetBiosName;
        this._onPremisesProvisioningErrors = groupParameterValue?.onPremisesProvisioningErrors;
        this._onPremisesSamAccountName = groupParameterValue?.onPremisesSamAccountName;
        this._onPremisesSecurityIdentifier = groupParameterValue?.onPremisesSecurityIdentifier;
        this._onPremisesSyncEnabled = groupParameterValue?.onPremisesSyncEnabled;
        this._owners = groupParameterValue?.owners;
        this._permissionGrants = groupParameterValue?.permissionGrants;
        this._photo = groupParameterValue?.photo;
        this._photos = groupParameterValue?.photos;
        this._planner = groupParameterValue?.planner;
        this._preferredDataLocation = groupParameterValue?.preferredDataLocation;
        this._preferredLanguage = groupParameterValue?.preferredLanguage;
        this._proxyAddresses = groupParameterValue?.proxyAddresses;
        this._rejectedSenders = groupParameterValue?.rejectedSenders;
        this._renewedDateTime = groupParameterValue?.renewedDateTime;
        this._securityEnabled = groupParameterValue?.securityEnabled;
        this._securityIdentifier = groupParameterValue?.securityIdentifier;
        this._settings = groupParameterValue?.settings;
        this._sites = groupParameterValue?.sites;
        this._team = groupParameterValue?.team;
        this._theme = groupParameterValue?.theme;
        this._threads = groupParameterValue?.threads;
        this._transitiveMemberOf = groupParameterValue?.transitiveMemberOf;
        this._transitiveMembers = groupParameterValue?.transitiveMembers;
        this._unseenCount = groupParameterValue?.unseenCount;
        this._visibility = groupParameterValue?.visibility;
    };
    /**
     * Gets the conversations property value. The group's conversations.
     * @returns a ConversationInterface
     */
    public get conversations() {
        return this._conversations;
    };
    /**
     * Sets the conversations property value. The group's conversations.
     * @param value Value to set for the conversations property.
     */
    public set conversations(value: Conversation[] | undefined) {
        if(value) {
            const conversationsArrValue: ConversationImpl[] = [];
            this.conversations?.forEach(element => {
                conversationsArrValue.push((element instanceof ConversationImpl? element:new ConversationImpl(element)));
            });
            this._conversations = conversationsArrValue;
        }
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the createdOnBehalfOf property value. The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only.
     * @returns a DirectoryObjectInterface
     */
    public get createdOnBehalfOf() {
        return this._createdOnBehalfOf;
    };
    /**
     * Sets the createdOnBehalfOf property value. The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only.
     * @param value Value to set for the createdOnBehalfOf property.
     */
    public set createdOnBehalfOf(value: DirectoryObject | undefined) {
        if(value) {
            this._createdOnBehalfOf = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the group. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the group. Required. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the drive property value. The group's default drive. Read-only.
     * @returns a DriveInterface
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The group's default drive. Read-only.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        if(value) {
            this._drive = value instanceof DriveImpl? value : new DriveImpl(value);
        }
    };
    /**
     * Gets the drives property value. The group's drives. Read-only.
     * @returns a DriveInterface
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. The group's drives. Read-only.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        if(value) {
            const drivesArrValue: DriveImpl[] = [];
            this.drives?.forEach(element => {
                drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
            });
            this._drives = drivesArrValue;
        }
    };
    /**
     * Gets the events property value. The group's events.
     * @returns a EventInterface
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The group's events.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        if(value) {
            const eventsArrValue: EventImpl[] = [];
            this.events?.forEach(element => {
                eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._events = eventsArrValue;
        }
    };
    /**
     * Gets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
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
     * Gets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @returns a GroupLifecyclePolicyInterface
     */
    public get groupLifecyclePolicies() {
        return this._groupLifecyclePolicies;
    };
    /**
     * Sets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @param value Value to set for the groupLifecyclePolicies property.
     */
    public set groupLifecyclePolicies(value: GroupLifecyclePolicy[] | undefined) {
        if(value) {
            const groupLifecyclePoliciesArrValue: GroupLifecyclePolicyImpl[] = [];
            this.groupLifecyclePolicies?.forEach(element => {
                groupLifecyclePoliciesArrValue.push((element instanceof GroupLifecyclePolicyImpl? element:new GroupLifecyclePolicyImpl(element)));
            });
            this._groupLifecyclePolicies = groupLifecyclePoliciesArrValue;
        }
    };
    /**
     * Gets the groupTypes property value. Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not).
     * @returns a string
     */
    public get groupTypes() {
        return this._groupTypes;
    };
    /**
     * Sets the groupTypes property value. Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the groupTypes property.
     */
    public set groupTypes(value: string[] | undefined) {
        if(value) {
            this._groupTypes = value;
        }
    };
    /**
     * Gets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
     * @returns a boolean
     */
    public get hasMembersWithLicenseErrors() {
        return this._hasMembersWithLicenseErrors;
    };
    /**
     * Sets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
     * @param value Value to set for the hasMembersWithLicenseErrors property.
     */
    public set hasMembersWithLicenseErrors(value: boolean | undefined) {
        if(value) {
            this._hasMembersWithLicenseErrors = value;
        }
    };
    /**
     * Gets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromAddressLists() {
        return this._hideFromAddressLists;
    };
    /**
     * Sets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromAddressLists property.
     */
    public set hideFromAddressLists(value: boolean | undefined) {
        if(value) {
            this._hideFromAddressLists = value;
        }
    };
    /**
     * Gets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromOutlookClients() {
        return this._hideFromOutlookClients;
    };
    /**
     * Sets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromOutlookClients property.
     */
    public set hideFromOutlookClients(value: boolean | undefined) {
        if(value) {
            this._hideFromOutlookClients = value;
        }
    };
    /**
     * Gets the isArchived property value. When a group is associated with a team, this property determines whether the team is in read-only mode.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Sets the isArchived property value. When a group is associated with a team, this property determines whether the team is in read-only mode.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        if(value) {
            this._isArchived = value;
        }
    };
    /**
     * Gets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isAssignableToRole() {
        return this._isAssignableToRole;
    };
    /**
     * Sets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @param value Value to set for the isAssignableToRole property.
     */
    public set isAssignableToRole(value: boolean | undefined) {
        if(value) {
            this._isAssignableToRole = value;
        }
    };
    /**
     * Gets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get isSubscribedByMail() {
        return this._isSubscribedByMail;
    };
    /**
     * Sets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the isSubscribedByMail property.
     */
    public set isSubscribedByMail(value: boolean | undefined) {
        if(value) {
            this._isSubscribedByMail = value;
        }
    };
    /**
     * Gets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only.
     * @returns a LicenseProcessingStateInterface
     */
    public get licenseProcessingState() {
        return this._licenseProcessingState;
    };
    /**
     * Sets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only.
     * @param value Value to set for the licenseProcessingState property.
     */
    public set licenseProcessingState(value: LicenseProcessingState | undefined) {
        if(value) {
            this._licenseProcessingState = value instanceof LicenseProcessingStateImpl? value : new LicenseProcessingStateImpl(value);
        }
    };
    /**
     * Gets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        if(value) {
            this._mail = value;
        }
    };
    /**
     * Gets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values).
     * @returns a boolean
     */
    public get mailEnabled() {
        return this._mailEnabled;
    };
    /**
     * Sets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values).
     * @param value Value to set for the mailEnabled property.
     */
    public set mailEnabled(value: boolean | undefined) {
        if(value) {
            this._mailEnabled = value;
        }
    };
    /**
     * Gets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : . <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        if(value) {
            this._mailNickname = value;
        }
    };
    /**
     * Gets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const memberOfArrValue: DirectoryObjectImpl[] = [];
            this.memberOf?.forEach(element => {
                memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._memberOf = memberOfArrValue;
        }
    };
    /**
     * Gets the members property value. Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @returns a DirectoryObjectInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        if(value) {
            const membersArrValue: DirectoryObjectImpl[] = [];
            this.members?.forEach(element => {
                membersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._members = membersArrValue;
        }
    };
    /**
     * Gets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get membershipRule() {
        return this._membershipRule;
    };
    /**
     * Sets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the membershipRule property.
     */
    public set membershipRule(value: string | undefined) {
        if(value) {
            this._membershipRule = value;
        }
    };
    /**
     * Gets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a string
     */
    public get membershipRuleProcessingState() {
        return this._membershipRuleProcessingState;
    };
    /**
     * Sets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the membershipRuleProcessingState property.
     */
    public set membershipRuleProcessingState(value: string | undefined) {
        if(value) {
            this._membershipRuleProcessingState = value;
        }
    };
    /**
     * Gets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @returns a DirectoryObjectInterface
     */
    public get membersWithLicenseErrors() {
        return this._membersWithLicenseErrors;
    };
    /**
     * Sets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @param value Value to set for the membersWithLicenseErrors property.
     */
    public set membersWithLicenseErrors(value: DirectoryObject[] | undefined) {
        if(value) {
            const membersWithLicenseErrorsArrValue: DirectoryObjectImpl[] = [];
            this.membersWithLicenseErrors?.forEach(element => {
                membersWithLicenseErrorsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._membersWithLicenseErrors = membersWithLicenseErrorsArrValue;
        }
    };
    /**
     * Gets the onenote property value. The onenote property
     * @returns a OnenoteInterface
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. The onenote property
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        if(value) {
            this._onenote = value instanceof OnenoteImpl? value : new OnenoteImpl(value);
        }
    };
    /**
     * Gets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesDomainName() {
        return this._onPremisesDomainName;
    };
    /**
     * Sets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesDomainName property.
     */
    public set onPremisesDomainName(value: string | undefined) {
        if(value) {
            this._onPremisesDomainName = value;
        }
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        if(value) {
            this._onPremisesLastSyncDateTime = value;
        }
    };
    /**
     * Gets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesNetBiosName() {
        return this._onPremisesNetBiosName;
    };
    /**
     * Sets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesNetBiosName property.
     */
    public set onPremisesNetBiosName(value: string | undefined) {
        if(value) {
            this._onPremisesNetBiosName = value;
        }
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @returns a OnPremisesProvisioningErrorInterface
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        if(value) {
            const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
            this.onPremisesProvisioningErrors?.forEach(element => {
                onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element:new OnPremisesProvisioningErrorImpl(element)));
            });
            this._onPremisesProvisioningErrors = onPremisesProvisioningErrorsArrValue;
        }
    };
    /**
     * Gets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @returns a string
     */
    public get onPremisesSamAccountName() {
        return this._onPremisesSamAccountName;
    };
    /**
     * Sets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @param value Value to set for the onPremisesSamAccountName property.
     */
    public set onPremisesSamAccountName(value: string | undefined) {
        if(value) {
            this._onPremisesSamAccountName = value;
        }
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        if(value) {
            this._onPremisesSecurityIdentifier = value;
        }
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        if(value) {
            this._onPremisesSyncEnabled = value;
        }
    };
    /**
     * Gets the owners property value. The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @returns a DirectoryObjectInterface
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownersArrValue: DirectoryObjectImpl[] = [];
            this.owners?.forEach(element => {
                ownersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._owners = ownersArrValue;
        }
    };
    /**
     * Gets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
     * @returns a ResourceSpecificPermissionGrantInterface
     */
    public get permissionGrants() {
        return this._permissionGrants;
    };
    /**
     * Sets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
     * @param value Value to set for the permissionGrants property.
     */
    public set permissionGrants(value: ResourceSpecificPermissionGrant[] | undefined) {
        if(value) {
            const permissionGrantsArrValue: ResourceSpecificPermissionGrantImpl[] = [];
            this.permissionGrants?.forEach(element => {
                permissionGrantsArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element:new ResourceSpecificPermissionGrantImpl(element)));
            });
            this._permissionGrants = permissionGrantsArrValue;
        }
    };
    /**
     * Gets the photo property value. The group's profile photo.
     * @returns a ProfilePhotoInterface
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The group's profile photo.
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        if(value) {
            this._photo = value instanceof ProfilePhotoImpl? value : new ProfilePhotoImpl(value);
        }
    };
    /**
     * Gets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @returns a ProfilePhotoInterface
     */
    public get photos() {
        return this._photos;
    };
    /**
     * Sets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @param value Value to set for the photos property.
     */
    public set photos(value: ProfilePhoto[] | undefined) {
        if(value) {
            const photosArrValue: ProfilePhotoImpl[] = [];
            this.photos?.forEach(element => {
                photosArrValue.push((element instanceof ProfilePhotoImpl? element:new ProfilePhotoImpl(element)));
            });
            this._photos = photosArrValue;
        }
    };
    /**
     * Gets the planner property value. Selective Planner services available to the group. Read-only. Nullable.
     * @returns a PlannerGroupInterface
     */
    public get planner() {
        return this._planner;
    };
    /**
     * Sets the planner property value. Selective Planner services available to the group. Read-only. Nullable.
     * @param value Value to set for the planner property.
     */
    public set planner(value: PlannerGroup | undefined) {
        if(value) {
            this._planner = value instanceof PlannerGroupImpl? value : new PlannerGroupImpl(value);
        }
    };
    /**
     * Gets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @returns a string
     */
    public get preferredDataLocation() {
        return this._preferredDataLocation;
    };
    /**
     * Sets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @param value Value to set for the preferredDataLocation property.
     */
    public set preferredDataLocation(value: string | undefined) {
        if(value) {
            this._preferredDataLocation = value;
        }
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        if(value) {
            this._preferredLanguage = value;
        }
    };
    /**
     * Gets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        if(value) {
            this._proxyAddresses = value;
        }
    };
    /**
     * Gets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @returns a DirectoryObjectInterface
     */
    public get rejectedSenders() {
        return this._rejectedSenders;
    };
    /**
     * Sets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @param value Value to set for the rejectedSenders property.
     */
    public set rejectedSenders(value: DirectoryObject[] | undefined) {
        if(value) {
            const rejectedSendersArrValue: DirectoryObjectImpl[] = [];
            this.rejectedSenders?.forEach(element => {
                rejectedSendersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._rejectedSenders = rejectedSendersArrValue;
        }
    };
    /**
     * Gets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get renewedDateTime() {
        return this._renewedDateTime;
    };
    /**
     * Sets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the renewedDateTime property.
     */
    public set renewedDateTime(value: Date | undefined) {
        if(value) {
            this._renewedDateTime = value;
        }
    };
    /**
     * Gets the securityEnabled property value. Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get securityEnabled() {
        return this._securityEnabled;
    };
    /**
     * Sets the securityEnabled property value. Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the securityEnabled property.
     */
    public set securityEnabled(value: boolean | undefined) {
        if(value) {
            this._securityEnabled = value;
        }
    };
    /**
     * Gets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @returns a string
     */
    public get securityIdentifier() {
        return this._securityIdentifier;
    };
    /**
     * Sets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @param value Value to set for the securityIdentifier property.
     */
    public set securityIdentifier(value: string | undefined) {
        if(value) {
            this._securityIdentifier = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptedSenders && this.acceptedSenders.length != 0){        const acceptedSendersArrValue: DirectoryObjectImpl[] = [];
        this.acceptedSenders?.forEach(element => {
            acceptedSendersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("acceptedSenders", acceptedSendersArrValue);
        }
        if(this.allowExternalSenders){
            writer.writeBooleanValue("allowExternalSenders", this.allowExternalSenders);
        }
        if(this.appRoleAssignments && this.appRoleAssignments.length != 0){        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
        this.appRoleAssignments?.forEach(element => {
            appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element:new AppRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.assignedLabels && this.assignedLabels.length != 0){        const assignedLabelsArrValue: AssignedLabelImpl[] = [];
        this.assignedLabels?.forEach(element => {
            assignedLabelsArrValue.push((element instanceof AssignedLabelImpl? element:new AssignedLabelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedLabelImpl>("assignedLabels", assignedLabelsArrValue);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
        this.assignedLicenses?.forEach(element => {
            assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element:new AssignedLicenseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.autoSubscribeNewMembers){
            writer.writeBooleanValue("autoSubscribeNewMembers", this.autoSubscribeNewMembers);
        }
        if(this.calendar){
            writer.writeObjectValue<CalendarImpl>("calendar", (!this.calendar || this.calendar instanceof CalendarImpl? this.calendar : new CalendarImpl(this.calendar)));
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = [];
        this.calendarView?.forEach(element => {
            calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EventImpl>("calendarView", calendarViewArrValue);
        }
        if(this.classification){
            writer.writeStringValue("classification", this.classification);
        }
        if(this.conversations && this.conversations.length != 0){        const conversationsArrValue: ConversationImpl[] = [];
        this.conversations?.forEach(element => {
            conversationsArrValue.push((element instanceof ConversationImpl? element:new ConversationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationImpl>("conversations", conversationsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdOnBehalfOf){
            writer.writeObjectValue<DirectoryObjectImpl>("createdOnBehalfOf", (!this.createdOnBehalfOf || this.createdOnBehalfOf instanceof DirectoryObjectImpl? this.createdOnBehalfOf : new DirectoryObjectImpl(this.createdOnBehalfOf)));
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
            writer.writeObjectValue<DriveImpl>("drive", (!this.drive || this.drive instanceof DriveImpl? this.drive : new DriveImpl(this.drive)));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = [];
        this.drives?.forEach(element => {
            drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = [];
        this.events?.forEach(element => {
            eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EventImpl>("events", eventsArrValue);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.groupLifecyclePolicies && this.groupLifecyclePolicies.length != 0){        const groupLifecyclePoliciesArrValue: GroupLifecyclePolicyImpl[] = [];
        this.groupLifecyclePolicies?.forEach(element => {
            groupLifecyclePoliciesArrValue.push((element instanceof GroupLifecyclePolicyImpl? element:new GroupLifecyclePolicyImpl(element)));
        });
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
            writer.writeObjectValue<LicenseProcessingStateImpl>("licenseProcessingState", (!this.licenseProcessingState || this.licenseProcessingState instanceof LicenseProcessingStateImpl? this.licenseProcessingState : new LicenseProcessingStateImpl(this.licenseProcessingState)));
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
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = [];
        this.memberOf?.forEach(element => {
            memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.membershipRule){
            writer.writeStringValue("membershipRule", this.membershipRule);
        }
        if(this.membershipRuleProcessingState){
            writer.writeStringValue("membershipRuleProcessingState", this.membershipRuleProcessingState);
        }
        if(this.membersWithLicenseErrors && this.membersWithLicenseErrors.length != 0){        const membersWithLicenseErrorsArrValue: DirectoryObjectImpl[] = [];
        this.membersWithLicenseErrors?.forEach(element => {
            membersWithLicenseErrorsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("membersWithLicenseErrors", membersWithLicenseErrorsArrValue);
        }
        if(this.onenote){
            writer.writeObjectValue<OnenoteImpl>("onenote", (!this.onenote || this.onenote instanceof OnenoteImpl? this.onenote : new OnenoteImpl(this.onenote)));
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
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
        this.onPremisesProvisioningErrors?.forEach(element => {
            onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element:new OnPremisesProvisioningErrorImpl(element)));
        });
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
        if(this.owners && this.owners.length != 0){        const ownersArrValue: DirectoryObjectImpl[] = [];
        this.owners?.forEach(element => {
            ownersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.permissionGrants && this.permissionGrants.length != 0){        const permissionGrantsArrValue: ResourceSpecificPermissionGrantImpl[] = [];
        this.permissionGrants?.forEach(element => {
            permissionGrantsArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element:new ResourceSpecificPermissionGrantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("permissionGrants", permissionGrantsArrValue);
        }
        if(this.photo){
            writer.writeObjectValue<ProfilePhotoImpl>("photo", (!this.photo || this.photo instanceof ProfilePhotoImpl? this.photo : new ProfilePhotoImpl(this.photo)));
        }
        if(this.photos && this.photos.length != 0){        const photosArrValue: ProfilePhotoImpl[] = [];
        this.photos?.forEach(element => {
            photosArrValue.push((element instanceof ProfilePhotoImpl? element:new ProfilePhotoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProfilePhotoImpl>("photos", photosArrValue);
        }
        if(this.planner){
            writer.writeObjectValue<PlannerGroupImpl>("planner", (!this.planner || this.planner instanceof PlannerGroupImpl? this.planner : new PlannerGroupImpl(this.planner)));
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
        if(this.rejectedSenders && this.rejectedSenders.length != 0){        const rejectedSendersArrValue: DirectoryObjectImpl[] = [];
        this.rejectedSenders?.forEach(element => {
            rejectedSendersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
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
        if(this.settings && this.settings.length != 0){        const settingsArrValue: GroupSettingImpl[] = [];
        this.settings?.forEach(element => {
            settingsArrValue.push((element instanceof GroupSettingImpl? element:new GroupSettingImpl(element)));
        });
            writer.writeCollectionOfObjectValues<GroupSettingImpl>("settings", settingsArrValue);
        }
        if(this.sites && this.sites.length != 0){        const sitesArrValue: SiteImpl[] = [];
        this.sites?.forEach(element => {
            sitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SiteImpl>("sites", sitesArrValue);
        }
        if(this.team){
            writer.writeObjectValue<TeamImpl>("team", (!this.team || this.team instanceof TeamImpl? this.team : new TeamImpl(this.team)));
        }
        if(this.theme){
            writer.writeStringValue("theme", this.theme);
        }
        if(this.threads && this.threads.length != 0){        const threadsArrValue: ConversationThreadImpl[] = [];
        this.threads?.forEach(element => {
            threadsArrValue.push((element instanceof ConversationThreadImpl? element:new ConversationThreadImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationThreadImpl>("threads", threadsArrValue);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMemberOf?.forEach(element => {
            transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
        if(this.transitiveMembers && this.transitiveMembers.length != 0){        const transitiveMembersArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMembers?.forEach(element => {
            transitiveMembersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMembers", transitiveMembersArrValue);
        }
        if(this.unseenCount){
            writer.writeNumberValue("unseenCount", this.unseenCount);
        }
        if(this.visibility){
            writer.writeStringValue("visibility", this.visibility);
        }
    };
    /**
     * Gets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
     * @returns a GroupSettingInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
     * @param value Value to set for the settings property.
     */
    public set settings(value: GroupSetting[] | undefined) {
        if(value) {
            const settingsArrValue: GroupSettingImpl[] = [];
            this.settings?.forEach(element => {
                settingsArrValue.push((element instanceof GroupSettingImpl? element:new GroupSettingImpl(element)));
            });
            this._settings = settingsArrValue;
        }
    };
    /**
     * Gets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @returns a SiteInterface
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        if(value) {
            const sitesArrValue: SiteImpl[] = [];
            this.sites?.forEach(element => {
                sitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
            });
            this._sites = sitesArrValue;
        }
    };
    /**
     * Gets the team property value. The team associated with this group.
     * @returns a TeamInterface
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. The team associated with this group.
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        if(value) {
            this._team = value instanceof TeamImpl? value : new TeamImpl(value);
        }
    };
    /**
     * Gets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @returns a string
     */
    public get theme() {
        return this._theme;
    };
    /**
     * Sets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @param value Value to set for the theme property.
     */
    public set theme(value: string | undefined) {
        if(value) {
            this._theme = value;
        }
    };
    /**
     * Gets the threads property value. The group's conversation threads. Nullable.
     * @returns a ConversationThreadInterface
     */
    public get threads() {
        return this._threads;
    };
    /**
     * Sets the threads property value. The group's conversation threads. Nullable.
     * @param value Value to set for the threads property.
     */
    public set threads(value: ConversationThread[] | undefined) {
        if(value) {
            const threadsArrValue: ConversationThreadImpl[] = [];
            this.threads?.forEach(element => {
                threadsArrValue.push((element instanceof ConversationThreadImpl? element:new ConversationThreadImpl(element)));
            });
            this._threads = threadsArrValue;
        }
    };
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMemberOf?.forEach(element => {
                transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._transitiveMemberOf = transitiveMemberOfArrValue;
        }
    };
    /**
     * Gets the transitiveMembers property value. The transitiveMembers property
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMembers() {
        return this._transitiveMembers;
    };
    /**
     * Sets the transitiveMembers property value. The transitiveMembers property
     * @param value Value to set for the transitiveMembers property.
     */
    public set transitiveMembers(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMembersArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMembers?.forEach(element => {
                transitiveMembersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._transitiveMembers = transitiveMembersArrValue;
        }
    };
    /**
     * Gets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a integer
     */
    public get unseenCount() {
        return this._unseenCount;
    };
    /**
     * Sets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the unseenCount property.
     */
    public set unseenCount(value: number | undefined) {
        if(value) {
            this._unseenCount = value;
        }
    };
    /**
     * Gets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        if(value) {
            this._visibility = value;
        }
    };
}
