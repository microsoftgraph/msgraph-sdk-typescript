/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUsageRightsIncludedFromDiscriminatorValue, type UsageRightsIncluded } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rights property of the microsoft.graph.sensitivityLabel entity.
 */
export interface RightsRequestBuilder extends BaseRequestBuilder<RightsRequestBuilder> {
    /**
     * Get the usage rights granted to the calling user for a specific sensitivity label that has admin-defined permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UsageRightsIncluded>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/usagerightsincluded-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RightsRequestBuilderGetQueryParameters> | undefined) : Promise<UsageRightsIncluded | undefined>;
    /**
     * Get the usage rights granted to the calling user for a specific sensitivity label that has admin-defined permissions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RightsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the usage rights granted to the calling user for a specific sensitivity label that has admin-defined permissions.
 */
export interface RightsRequestBuilderGetQueryParameters {
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
export const RightsRequestBuilderUriTemplate = "{+baseurl}/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel%2Did}/rights{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RightsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RightsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RightsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUsageRightsIncludedFromDiscriminatorValue,
        queryParametersMapper: RightsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
