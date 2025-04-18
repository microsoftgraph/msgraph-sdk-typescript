/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupFromDiscriminatorValue, serializeGroup, type Group } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AcceptedSendersRequestBuilderNavigationMetadata, AcceptedSendersRequestBuilderRequestsMetadata, type AcceptedSendersRequestBuilder } from './acceptedSenders/index.js';
// @ts-ignore
import { AddFavoriteRequestBuilderRequestsMetadata, type AddFavoriteRequestBuilder } from './addFavorite/index.js';
// @ts-ignore
import { AppRoleAssignmentsRequestBuilderNavigationMetadata, AppRoleAssignmentsRequestBuilderRequestsMetadata, type AppRoleAssignmentsRequestBuilder } from './appRoleAssignments/index.js';
// @ts-ignore
import { AssignLicenseRequestBuilderRequestsMetadata, type AssignLicenseRequestBuilder } from './assignLicense/index.js';
// @ts-ignore
import { CalendarRequestBuilderNavigationMetadata, CalendarRequestBuilderRequestsMetadata, type CalendarRequestBuilder } from './calendar/index.js';
// @ts-ignore
import { CalendarViewRequestBuilderNavigationMetadata, CalendarViewRequestBuilderRequestsMetadata, type CalendarViewRequestBuilder } from './calendarView/index.js';
// @ts-ignore
import { CheckGrantedPermissionsForAppRequestBuilderRequestsMetadata, type CheckGrantedPermissionsForAppRequestBuilder } from './checkGrantedPermissionsForApp/index.js';
// @ts-ignore
import { CheckMemberGroupsRequestBuilderRequestsMetadata, type CheckMemberGroupsRequestBuilder } from './checkMemberGroups/index.js';
// @ts-ignore
import { CheckMemberObjectsRequestBuilderRequestsMetadata, type CheckMemberObjectsRequestBuilder } from './checkMemberObjects/index.js';
// @ts-ignore
import { ConversationsRequestBuilderNavigationMetadata, ConversationsRequestBuilderRequestsMetadata, type ConversationsRequestBuilder } from './conversations/index.js';
// @ts-ignore
import { CreatedOnBehalfOfRequestBuilderRequestsMetadata, type CreatedOnBehalfOfRequestBuilder } from './createdOnBehalfOf/index.js';
// @ts-ignore
import { DriveRequestBuilderRequestsMetadata, type DriveRequestBuilder } from './drive/index.js';
// @ts-ignore
import { DrivesRequestBuilderNavigationMetadata, DrivesRequestBuilderRequestsMetadata, type DrivesRequestBuilder } from './drives/index.js';
// @ts-ignore
import { EventsRequestBuilderNavigationMetadata, EventsRequestBuilderRequestsMetadata, type EventsRequestBuilder } from './events/index.js';
// @ts-ignore
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, type ExtensionsRequestBuilder } from './extensions/index.js';
// @ts-ignore
import { GetMemberGroupsRequestBuilderRequestsMetadata, type GetMemberGroupsRequestBuilder } from './getMemberGroups/index.js';
// @ts-ignore
import { GetMemberObjectsRequestBuilderRequestsMetadata, type GetMemberObjectsRequestBuilder } from './getMemberObjects/index.js';
// @ts-ignore
import { GroupLifecyclePoliciesRequestBuilderNavigationMetadata, GroupLifecyclePoliciesRequestBuilderRequestsMetadata, type GroupLifecyclePoliciesRequestBuilder } from './groupLifecyclePolicies/index.js';
// @ts-ignore
import { MemberOfRequestBuilderNavigationMetadata, MemberOfRequestBuilderRequestsMetadata, type MemberOfRequestBuilder } from './memberOf/index.js';
// @ts-ignore
import { MembersRequestBuilderNavigationMetadata, MembersRequestBuilderRequestsMetadata, type MembersRequestBuilder } from './members/index.js';
// @ts-ignore
import { MembersWithLicenseErrorsRequestBuilderNavigationMetadata, MembersWithLicenseErrorsRequestBuilderRequestsMetadata, type MembersWithLicenseErrorsRequestBuilder } from './membersWithLicenseErrors/index.js';
// @ts-ignore
import { OnenoteRequestBuilderNavigationMetadata, OnenoteRequestBuilderRequestsMetadata, type OnenoteRequestBuilder } from './onenote/index.js';
// @ts-ignore
import { OwnersRequestBuilderNavigationMetadata, OwnersRequestBuilderRequestsMetadata, type OwnersRequestBuilder } from './owners/index.js';
// @ts-ignore
import { PermissionGrantsRequestBuilderNavigationMetadata, PermissionGrantsRequestBuilderRequestsMetadata, type PermissionGrantsRequestBuilder } from './permissionGrants/index.js';
// @ts-ignore
import { PhotoRequestBuilderNavigationMetadata, PhotoRequestBuilderRequestsMetadata, type PhotoRequestBuilder } from './photo/index.js';
// @ts-ignore
import { PhotosRequestBuilderNavigationMetadata, PhotosRequestBuilderRequestsMetadata, type PhotosRequestBuilder } from './photos/index.js';
// @ts-ignore
import { PlannerRequestBuilderNavigationMetadata, PlannerRequestBuilderRequestsMetadata, type PlannerRequestBuilder } from './planner/index.js';
// @ts-ignore
import { RejectedSendersRequestBuilderNavigationMetadata, RejectedSendersRequestBuilderRequestsMetadata, type RejectedSendersRequestBuilder } from './rejectedSenders/index.js';
// @ts-ignore
import { RemoveFavoriteRequestBuilderRequestsMetadata, type RemoveFavoriteRequestBuilder } from './removeFavorite/index.js';
// @ts-ignore
import { RenewRequestBuilderRequestsMetadata, type RenewRequestBuilder } from './renew/index.js';
// @ts-ignore
import { ResetUnseenCountRequestBuilderRequestsMetadata, type ResetUnseenCountRequestBuilder } from './resetUnseenCount/index.js';
// @ts-ignore
import { RestoreRequestBuilderRequestsMetadata, type RestoreRequestBuilder } from './restore/index.js';
// @ts-ignore
import { RetryServiceProvisioningRequestBuilderRequestsMetadata, type RetryServiceProvisioningRequestBuilder } from './retryServiceProvisioning/index.js';
// @ts-ignore
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/index.js';
// @ts-ignore
import { SettingsRequestBuilderNavigationMetadata, SettingsRequestBuilderRequestsMetadata, type SettingsRequestBuilder } from './settings/index.js';
// @ts-ignore
import { SitesRequestBuilderNavigationMetadata, SitesRequestBuilderRequestsMetadata, type SitesRequestBuilder } from './sites/index.js';
// @ts-ignore
import { SubscribeByMailRequestBuilderRequestsMetadata, type SubscribeByMailRequestBuilder } from './subscribeByMail/index.js';
// @ts-ignore
import { TeamRequestBuilderNavigationMetadata, TeamRequestBuilderRequestsMetadata, type TeamRequestBuilder } from './team/index.js';
// @ts-ignore
import { ThreadsRequestBuilderNavigationMetadata, ThreadsRequestBuilderRequestsMetadata, type ThreadsRequestBuilder } from './threads/index.js';
// @ts-ignore
import { TransitiveMemberOfRequestBuilderNavigationMetadata, TransitiveMemberOfRequestBuilderRequestsMetadata, type TransitiveMemberOfRequestBuilder } from './transitiveMemberOf/index.js';
// @ts-ignore
import { TransitiveMembersRequestBuilderNavigationMetadata, TransitiveMembersRequestBuilderRequestsMetadata, type TransitiveMembersRequestBuilder } from './transitiveMembers/index.js';
// @ts-ignore
import { type UnsubscribeByMailRequestBuilder, UnsubscribeByMailRequestBuilderRequestsMetadata } from './unsubscribeByMail/index.js';
// @ts-ignore
import { type ValidatePropertiesRequestBuilder, ValidatePropertiesRequestBuilderRequestsMetadata } from './validateProperties/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of group entities.
 */
export interface GroupItemRequestBuilder extends BaseRequestBuilder<GroupItemRequestBuilder> {
    /**
     * Provides operations to manage the acceptedSenders property of the microsoft.graph.group entity.
     */
    get acceptedSenders(): AcceptedSendersRequestBuilder;
    /**
     * Provides operations to call the addFavorite method.
     */
    get addFavorite(): AddFavoriteRequestBuilder;
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.group entity.
     */
    get appRoleAssignments(): AppRoleAssignmentsRequestBuilder;
    /**
     * Provides operations to call the assignLicense method.
     */
    get assignLicense(): AssignLicenseRequestBuilder;
    /**
     * Provides operations to manage the calendar property of the microsoft.graph.group entity.
     */
    get calendar(): CalendarRequestBuilder;
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.group entity.
     */
    get calendarView(): CalendarViewRequestBuilder;
    /**
     * Provides operations to call the checkGrantedPermissionsForApp method.
     */
    get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder;
    /**
     * Provides operations to call the checkMemberGroups method.
     */
    get checkMemberGroups(): CheckMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the checkMemberObjects method.
     */
    get checkMemberObjects(): CheckMemberObjectsRequestBuilder;
    /**
     * Provides operations to manage the conversations property of the microsoft.graph.group entity.
     */
    get conversations(): ConversationsRequestBuilder;
    /**
     * Provides operations to manage the createdOnBehalfOf property of the microsoft.graph.group entity.
     */
    get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder;
    /**
     * Provides operations to manage the drive property of the microsoft.graph.group entity.
     */
    get drive(): DriveRequestBuilder;
    /**
     * Provides operations to manage the drives property of the microsoft.graph.group entity.
     */
    get drives(): DrivesRequestBuilder;
    /**
     * Provides operations to manage the events property of the microsoft.graph.group entity.
     */
    get events(): EventsRequestBuilder;
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.group entity.
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Provides operations to call the getMemberGroups method.
     */
    get getMemberGroups(): GetMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the getMemberObjects method.
     */
    get getMemberObjects(): GetMemberObjectsRequestBuilder;
    /**
     * Provides operations to manage the groupLifecyclePolicies property of the microsoft.graph.group entity.
     */
    get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder;
    /**
     * Provides operations to manage the memberOf property of the microsoft.graph.group entity.
     */
    get memberOf(): MemberOfRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.group entity.
     */
    get members(): MembersRequestBuilder;
    /**
     * Provides operations to manage the membersWithLicenseErrors property of the microsoft.graph.group entity.
     */
    get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder;
    /**
     * Provides operations to manage the onenote property of the microsoft.graph.group entity.
     */
    get onenote(): OnenoteRequestBuilder;
    /**
     * Provides operations to manage the owners property of the microsoft.graph.group entity.
     */
    get owners(): OwnersRequestBuilder;
    /**
     * Provides operations to manage the permissionGrants property of the microsoft.graph.group entity.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
    /**
     * Provides operations to manage the photo property of the microsoft.graph.group entity.
     */
    get photo(): PhotoRequestBuilder;
    /**
     * Provides operations to manage the photos property of the microsoft.graph.group entity.
     */
    get photos(): PhotosRequestBuilder;
    /**
     * Provides operations to manage the planner property of the microsoft.graph.group entity.
     */
    get planner(): PlannerRequestBuilder;
    /**
     * Provides operations to manage the rejectedSenders property of the microsoft.graph.group entity.
     */
    get rejectedSenders(): RejectedSendersRequestBuilder;
    /**
     * Provides operations to call the removeFavorite method.
     */
    get removeFavorite(): RemoveFavoriteRequestBuilder;
    /**
     * Provides operations to call the renew method.
     */
    get renew(): RenewRequestBuilder;
    /**
     * Provides operations to call the resetUnseenCount method.
     */
    get resetUnseenCount(): ResetUnseenCountRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Provides operations to call the retryServiceProvisioning method.
     */
    get retryServiceProvisioning(): RetryServiceProvisioningRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * Provides operations to manage the settings property of the microsoft.graph.group entity.
     */
    get settings(): SettingsRequestBuilder;
    /**
     * Provides operations to manage the sites property of the microsoft.graph.group entity.
     */
    get sites(): SitesRequestBuilder;
    /**
     * Provides operations to call the subscribeByMail method.
     */
    get subscribeByMail(): SubscribeByMailRequestBuilder;
    /**
     * Provides operations to manage the team property of the microsoft.graph.group entity.
     */
    get team(): TeamRequestBuilder;
    /**
     * Provides operations to manage the threads property of the microsoft.graph.group entity.
     */
    get threads(): ThreadsRequestBuilder;
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.group entity.
     */
    get transitiveMemberOf(): TransitiveMemberOfRequestBuilder;
    /**
     * Provides operations to manage the transitiveMembers property of the microsoft.graph.group entity.
     */
    get transitiveMembers(): TransitiveMembersRequestBuilder;
    /**
     * Provides operations to call the unsubscribeByMail method.
     */
    get unsubscribeByMail(): UnsubscribeByMailRequestBuilder;
    /**
     * Provides operations to call the validateProperties method.
     */
    get validateProperties(): ValidatePropertiesRequestBuilder;
    /**
     * Delete a group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that aren't_ returned by default, specify them in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and aren't returned in the $select query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Group>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GroupItemRequestBuilderGetQueryParameters> | undefined) : Promise<Group | undefined>;
    /**
     * Create a new group object if it doesn't exist, or update the properties of an existing group object.You can create or update the following types of group: By default, this operation returns only a subset of the properties for each group. For a list of properties that are returned by default, see the Properties section of the group resource. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Group>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-upsert?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Group, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Group | undefined>;
    /**
     * Delete a group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that aren't_ returned by default, specify them in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and aren't returned in the $select query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new group object if it doesn't exist, or update the properties of an existing group object.You can create or update the following types of group: By default, this operation returns only a subset of the properties for each group. For a list of properties that are returned by default, see the Properties section of the group resource. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Group, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that aren't_ returned by default, specify them in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and aren't returned in the $select query.
 */
export interface GroupItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const GroupItemRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GroupItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GroupItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    acceptedSenders: {
        requestsMetadata: AcceptedSendersRequestBuilderRequestsMetadata,
        navigationMetadata: AcceptedSendersRequestBuilderNavigationMetadata,
    },
    addFavorite: {
        requestsMetadata: AddFavoriteRequestBuilderRequestsMetadata,
    },
    appRoleAssignments: {
        requestsMetadata: AppRoleAssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AppRoleAssignmentsRequestBuilderNavigationMetadata,
    },
    assignLicense: {
        requestsMetadata: AssignLicenseRequestBuilderRequestsMetadata,
    },
    calendar: {
        requestsMetadata: CalendarRequestBuilderRequestsMetadata,
        navigationMetadata: CalendarRequestBuilderNavigationMetadata,
    },
    calendarView: {
        requestsMetadata: CalendarViewRequestBuilderRequestsMetadata,
        navigationMetadata: CalendarViewRequestBuilderNavigationMetadata,
    },
    checkGrantedPermissionsForApp: {
        requestsMetadata: CheckGrantedPermissionsForAppRequestBuilderRequestsMetadata,
    },
    checkMemberGroups: {
        requestsMetadata: CheckMemberGroupsRequestBuilderRequestsMetadata,
    },
    checkMemberObjects: {
        requestsMetadata: CheckMemberObjectsRequestBuilderRequestsMetadata,
    },
    conversations: {
        requestsMetadata: ConversationsRequestBuilderRequestsMetadata,
        navigationMetadata: ConversationsRequestBuilderNavigationMetadata,
    },
    createdOnBehalfOf: {
        requestsMetadata: CreatedOnBehalfOfRequestBuilderRequestsMetadata,
    },
    drive: {
        requestsMetadata: DriveRequestBuilderRequestsMetadata,
    },
    drives: {
        requestsMetadata: DrivesRequestBuilderRequestsMetadata,
        navigationMetadata: DrivesRequestBuilderNavigationMetadata,
    },
    events: {
        requestsMetadata: EventsRequestBuilderRequestsMetadata,
        navigationMetadata: EventsRequestBuilderNavigationMetadata,
    },
    extensions: {
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
    getMemberGroups: {
        requestsMetadata: GetMemberGroupsRequestBuilderRequestsMetadata,
    },
    getMemberObjects: {
        requestsMetadata: GetMemberObjectsRequestBuilderRequestsMetadata,
    },
    groupLifecyclePolicies: {
        requestsMetadata: GroupLifecyclePoliciesRequestBuilderRequestsMetadata,
        navigationMetadata: GroupLifecyclePoliciesRequestBuilderNavigationMetadata,
    },
    memberOf: {
        requestsMetadata: MemberOfRequestBuilderRequestsMetadata,
        navigationMetadata: MemberOfRequestBuilderNavigationMetadata,
    },
    members: {
        requestsMetadata: MembersRequestBuilderRequestsMetadata,
        navigationMetadata: MembersRequestBuilderNavigationMetadata,
    },
    membersWithLicenseErrors: {
        requestsMetadata: MembersWithLicenseErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: MembersWithLicenseErrorsRequestBuilderNavigationMetadata,
    },
    onenote: {
        requestsMetadata: OnenoteRequestBuilderRequestsMetadata,
        navigationMetadata: OnenoteRequestBuilderNavigationMetadata,
    },
    owners: {
        requestsMetadata: OwnersRequestBuilderRequestsMetadata,
        navigationMetadata: OwnersRequestBuilderNavigationMetadata,
    },
    permissionGrants: {
        requestsMetadata: PermissionGrantsRequestBuilderRequestsMetadata,
        navigationMetadata: PermissionGrantsRequestBuilderNavigationMetadata,
    },
    photo: {
        requestsMetadata: PhotoRequestBuilderRequestsMetadata,
        navigationMetadata: PhotoRequestBuilderNavigationMetadata,
    },
    photos: {
        requestsMetadata: PhotosRequestBuilderRequestsMetadata,
        navigationMetadata: PhotosRequestBuilderNavigationMetadata,
    },
    planner: {
        requestsMetadata: PlannerRequestBuilderRequestsMetadata,
        navigationMetadata: PlannerRequestBuilderNavigationMetadata,
    },
    rejectedSenders: {
        requestsMetadata: RejectedSendersRequestBuilderRequestsMetadata,
        navigationMetadata: RejectedSendersRequestBuilderNavigationMetadata,
    },
    removeFavorite: {
        requestsMetadata: RemoveFavoriteRequestBuilderRequestsMetadata,
    },
    renew: {
        requestsMetadata: RenewRequestBuilderRequestsMetadata,
    },
    resetUnseenCount: {
        requestsMetadata: ResetUnseenCountRequestBuilderRequestsMetadata,
    },
    restore: {
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
    retryServiceProvisioning: {
        requestsMetadata: RetryServiceProvisioningRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
    settings: {
        requestsMetadata: SettingsRequestBuilderRequestsMetadata,
        navigationMetadata: SettingsRequestBuilderNavigationMetadata,
    },
    sites: {
        requestsMetadata: SitesRequestBuilderRequestsMetadata,
        navigationMetadata: SitesRequestBuilderNavigationMetadata,
    },
    subscribeByMail: {
        requestsMetadata: SubscribeByMailRequestBuilderRequestsMetadata,
    },
    team: {
        requestsMetadata: TeamRequestBuilderRequestsMetadata,
        navigationMetadata: TeamRequestBuilderNavigationMetadata,
    },
    threads: {
        requestsMetadata: ThreadsRequestBuilderRequestsMetadata,
        navigationMetadata: ThreadsRequestBuilderNavigationMetadata,
    },
    transitiveMemberOf: {
        requestsMetadata: TransitiveMemberOfRequestBuilderRequestsMetadata,
        navigationMetadata: TransitiveMemberOfRequestBuilderNavigationMetadata,
    },
    transitiveMembers: {
        requestsMetadata: TransitiveMembersRequestBuilderRequestsMetadata,
        navigationMetadata: TransitiveMembersRequestBuilderNavigationMetadata,
    },
    unsubscribeByMail: {
        requestsMetadata: UnsubscribeByMailRequestBuilderRequestsMetadata,
    },
    validateProperties: {
        requestsMetadata: ValidatePropertiesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GroupItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupFromDiscriminatorValue,
        queryParametersMapper: GroupItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
