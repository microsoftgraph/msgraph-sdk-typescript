/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationAssignmentSettingsFromDiscriminatorValue, serializeEducationAssignmentSettings, type EducationAssignmentSettings } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GradingCategoriesRequestBuilderNavigationMetadata, GradingCategoriesRequestBuilderRequestsMetadata, type GradingCategoriesRequestBuilder } from './gradingCategories/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentSettings property of the microsoft.graph.educationClass entity.
 */
export interface AssignmentSettingsRequestBuilder extends BaseRequestBuilder<AssignmentSettingsRequestBuilder> {
    /**
     * Provides operations to manage the gradingCategories property of the microsoft.graph.educationAssignmentSettings entity.
     */
    get gradingCategories(): GradingCategoriesRequestBuilder;
    /**
     * Delete navigation property assignmentSettings for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Specifies class-level assignments settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationAssignmentSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentSettingsRequestBuilderGetQueryParameters> | undefined) : Promise<EducationAssignmentSettings | undefined>;
    /**
     * Update the properties of an educationAssignmentSettings object. Only teachers can update these settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationAssignmentSettings>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationassignmentsettings-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: EducationAssignmentSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationAssignmentSettings | undefined>;
    /**
     * Delete navigation property assignmentSettings for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Specifies class-level assignments settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentSettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an educationAssignmentSettings object. Only teachers can update these settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EducationAssignmentSettings, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Specifies class-level assignments settings.
 */
export interface AssignmentSettingsRequestBuilderGetQueryParameters {
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
export const AssignmentSettingsRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/assignmentSettings{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AssignmentSettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AssignmentSettingsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentSettingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    gradingCategories: {
        requestsMetadata: GradingCategoriesRequestBuilderRequestsMetadata,
        navigationMetadata: GradingCategoriesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignmentSettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AssignmentSettingsRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AssignmentSettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationAssignmentSettingsFromDiscriminatorValue,
        queryParametersMapper: AssignmentSettingsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AssignmentSettingsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationAssignmentSettingsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationAssignmentSettings,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
