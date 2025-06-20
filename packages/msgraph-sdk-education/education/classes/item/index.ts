/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationClassFromDiscriminatorValue, serializeEducationClass, type EducationClass } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignmentCategoriesRequestBuilderNavigationMetadata, AssignmentCategoriesRequestBuilderRequestsMetadata, type AssignmentCategoriesRequestBuilder } from './assignmentCategories/index.js';
// @ts-ignore
import { AssignmentDefaultsRequestBuilderRequestsMetadata, type AssignmentDefaultsRequestBuilder } from './assignmentDefaults/index.js';
// @ts-ignore
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/index.js';
// @ts-ignore
import { AssignmentSettingsRequestBuilderNavigationMetadata, AssignmentSettingsRequestBuilderRequestsMetadata, type AssignmentSettingsRequestBuilder } from './assignmentSettings/index.js';
// @ts-ignore
import { GetRecentlyModifiedSubmissionsRequestBuilderRequestsMetadata, type GetRecentlyModifiedSubmissionsRequestBuilder } from './getRecentlyModifiedSubmissions/index.js';
// @ts-ignore
import { GroupRequestBuilderNavigationMetadata, GroupRequestBuilderRequestsMetadata, type GroupRequestBuilder } from './group/index.js';
// @ts-ignore
import { MembersRequestBuilderNavigationMetadata, MembersRequestBuilderRequestsMetadata, type MembersRequestBuilder } from './members/index.js';
// @ts-ignore
import { ModulesRequestBuilderNavigationMetadata, ModulesRequestBuilderRequestsMetadata, type ModulesRequestBuilder } from './modules/index.js';
// @ts-ignore
import { SchoolsRequestBuilderNavigationMetadata, SchoolsRequestBuilderRequestsMetadata, type SchoolsRequestBuilder } from './schools/index.js';
// @ts-ignore
import { TeachersRequestBuilderNavigationMetadata, TeachersRequestBuilderRequestsMetadata, type TeachersRequestBuilder } from './teachers/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
 */
export interface EducationClassItemRequestBuilder extends BaseRequestBuilder<EducationClassItemRequestBuilder> {
    /**
     * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
     */
    get assignmentCategories(): AssignmentCategoriesRequestBuilder;
    /**
     * Provides operations to manage the assignmentDefaults property of the microsoft.graph.educationClass entity.
     */
    get assignmentDefaults(): AssignmentDefaultsRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.educationClass entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the assignmentSettings property of the microsoft.graph.educationClass entity.
     */
    get assignmentSettings(): AssignmentSettingsRequestBuilder;
    /**
     * Provides operations to call the getRecentlyModifiedSubmissions method.
     */
    get getRecentlyModifiedSubmissions(): GetRecentlyModifiedSubmissionsRequestBuilder;
    /**
     * Provides operations to manage the group property of the microsoft.graph.educationClass entity.
     */
    get group(): GroupRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.educationClass entity.
     */
    get members(): MembersRequestBuilder;
    /**
     * Provides operations to manage the modules property of the microsoft.graph.educationClass entity.
     */
    get modules(): ModulesRequestBuilder;
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationClass entity.
     */
    get schools(): SchoolsRequestBuilder;
    /**
     * Provides operations to manage the teachers property of the microsoft.graph.educationClass entity.
     */
    get teachers(): TeachersRequestBuilder;
    /**
     * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you're using the delegated token, the user will only see classes in which they are members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationClass>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EducationClassItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationClass | undefined>;
    /**
     * Update the properties of an educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationClass>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: EducationClass, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationClass | undefined>;
    /**
     * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you're using the delegated token, the user will only see classes in which they are members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationClassItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EducationClass, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you're using the delegated token, the user will only see classes in which they are members.
 */
export interface EducationClassItemRequestBuilderGetQueryParameters {
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
export const EducationClassItemRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EducationClassItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EducationClassItemRequestBuilderNavigationMetadata: Record<Exclude<keyof EducationClassItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assignmentCategories: {
        requestsMetadata: AssignmentCategoriesRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentCategoriesRequestBuilderNavigationMetadata,
    },
    assignmentDefaults: {
        requestsMetadata: AssignmentDefaultsRequestBuilderRequestsMetadata,
    },
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    assignmentSettings: {
        requestsMetadata: AssignmentSettingsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentSettingsRequestBuilderNavigationMetadata,
    },
    getRecentlyModifiedSubmissions: {
        requestsMetadata: GetRecentlyModifiedSubmissionsRequestBuilderRequestsMetadata,
    },
    group: {
        requestsMetadata: GroupRequestBuilderRequestsMetadata,
        navigationMetadata: GroupRequestBuilderNavigationMetadata,
    },
    members: {
        requestsMetadata: MembersRequestBuilderRequestsMetadata,
        navigationMetadata: MembersRequestBuilderNavigationMetadata,
    },
    modules: {
        requestsMetadata: ModulesRequestBuilderRequestsMetadata,
        navigationMetadata: ModulesRequestBuilderNavigationMetadata,
    },
    schools: {
        requestsMetadata: SchoolsRequestBuilderRequestsMetadata,
        navigationMetadata: SchoolsRequestBuilderNavigationMetadata,
    },
    teachers: {
        requestsMetadata: TeachersRequestBuilderRequestsMetadata,
        navigationMetadata: TeachersRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationClassItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EducationClassItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EducationClassItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationClassFromDiscriminatorValue,
        queryParametersMapper: EducationClassItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EducationClassItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationClassFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationClass,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
