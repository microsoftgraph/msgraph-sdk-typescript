/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamsAppInstallationFromDiscriminatorValue, serializeTeamsAppInstallation, type TeamsAppInstallation } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { TeamsAppRequestBuilderRequestsMetadata, type TeamsAppRequestBuilder } from './teamsApp/index.js';
// @ts-ignore
import { TeamsAppDefinitionRequestBuilderRequestsMetadata, type TeamsAppDefinitionRequestBuilder } from './teamsAppDefinition/index.js';
// @ts-ignore
import { type UpgradeRequestBuilder, UpgradeRequestBuilderRequestsMetadata } from './upgrade/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
 */
export interface TeamsAppInstallationItemRequestBuilder extends BaseRequestBuilder<TeamsAppInstallationItemRequestBuilder> {
    /**
     * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
     */
    get teamsApp(): TeamsAppRequestBuilder;
    /**
     * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
     */
    get teamsAppDefinition(): TeamsAppDefinitionRequestBuilder;
    /**
     * Provides operations to call the upgrade method.
     */
    get upgrade(): UpgradeRequestBuilder;
    /**
     * Delete navigation property installedApps for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The apps installed in this team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsAppInstallation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TeamsAppInstallationItemRequestBuilderGetQueryParameters> | undefined) : Promise<TeamsAppInstallation | undefined>;
    /**
     * Update the navigation property installedApps in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsAppInstallation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TeamsAppInstallation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamsAppInstallation | undefined>;
    /**
     * Delete navigation property installedApps for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The apps installed in this team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamsAppInstallationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property installedApps in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TeamsAppInstallation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The apps installed in this team.
 */
export interface TeamsAppInstallationItemRequestBuilderGetQueryParameters {
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
export const TeamsAppInstallationItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/installedApps/{teamsAppInstallation%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TeamsAppInstallationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamsAppInstallationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamsAppInstallationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    teamsApp: {
        requestsMetadata: TeamsAppRequestBuilderRequestsMetadata,
    },
    teamsAppDefinition: {
        requestsMetadata: TeamsAppDefinitionRequestBuilderRequestsMetadata,
    },
    upgrade: {
        requestsMetadata: UpgradeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamsAppInstallationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TeamsAppInstallationItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TeamsAppInstallationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsAppInstallationFromDiscriminatorValue,
        queryParametersMapper: TeamsAppInstallationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TeamsAppInstallationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsAppInstallationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamsAppInstallation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
