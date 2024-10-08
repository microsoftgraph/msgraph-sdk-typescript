/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveProtectionRuleCollectionResponseFromDiscriminatorValue, type DriveProtectionRuleCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DriveProtectionRuleItemRequestBuilderRequestsMetadata, type DriveProtectionRuleItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the driveInclusionRules property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
 */
export interface DriveInclusionRulesRequestBuilder extends BaseRequestBuilder<DriveInclusionRulesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the driveInclusionRules property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
     * @param driveProtectionRuleId The unique identifier of driveProtectionRule
     * @returns {DriveProtectionRuleItemRequestBuilder}
     */
     byDriveProtectionRuleId(driveProtectionRuleId: string) : DriveProtectionRuleItemRequestBuilder;
    /**
     * Get a list of the driveProtectionRule objects that are associated with a OneDrive for Business protection policy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveProtectionRuleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/onedriveforbusinessprotectionpolicy-list-driveinclusionrules?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DriveInclusionRulesRequestBuilderGetQueryParameters> | undefined) : Promise<DriveProtectionRuleCollectionResponse | undefined>;
    /**
     * Get a list of the driveProtectionRule objects that are associated with a OneDrive for Business protection policy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DriveInclusionRulesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of the driveProtectionRule objects that are associated with a OneDrive for Business protection policy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
 */
export interface DriveInclusionRulesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const DriveInclusionRulesRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy%2Did}/driveInclusionRules{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DriveInclusionRulesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DriveInclusionRulesRequestBuilderNavigationMetadata: Record<Exclude<keyof DriveInclusionRulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDriveProtectionRuleId: {
        requestsMetadata: DriveProtectionRuleItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["driveProtectionRule%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DriveInclusionRulesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DriveInclusionRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveProtectionRuleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DriveInclusionRulesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
