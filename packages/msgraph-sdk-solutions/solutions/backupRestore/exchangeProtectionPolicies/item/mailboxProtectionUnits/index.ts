/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMailboxProtectionUnitCollectionResponseFromDiscriminatorValue, type MailboxProtectionUnitCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MailboxProtectionUnitItemRequestBuilderRequestsMetadata, type MailboxProtectionUnitItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mailboxProtectionUnits property of the microsoft.graph.exchangeProtectionPolicy entity.
 */
export interface MailboxProtectionUnitsRequestBuilder extends BaseRequestBuilder<MailboxProtectionUnitsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the mailboxProtectionUnits property of the microsoft.graph.exchangeProtectionPolicy entity.
     * @param mailboxProtectionUnitId The unique identifier of mailboxProtectionUnit
     * @returns {MailboxProtectionUnitItemRequestBuilder}
     */
     byMailboxProtectionUnitId(mailboxProtectionUnitId: string) : MailboxProtectionUnitItemRequestBuilder;
    /**
     * The protection units (mailboxes) that are  protected under the Exchange protection policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailboxProtectionUnitCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MailboxProtectionUnitsRequestBuilderGetQueryParameters> | undefined) : Promise<MailboxProtectionUnitCollectionResponse | undefined>;
    /**
     * The protection units (mailboxes) that are  protected under the Exchange protection policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MailboxProtectionUnitsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The protection units (mailboxes) that are  protected under the Exchange protection policy.
 */
export interface MailboxProtectionUnitsRequestBuilderGetQueryParameters {
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
export const MailboxProtectionUnitsRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy%2Did}/mailboxProtectionUnits{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MailboxProtectionUnitsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MailboxProtectionUnitsRequestBuilderNavigationMetadata: Record<Exclude<keyof MailboxProtectionUnitsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMailboxProtectionUnitId: {
        requestsMetadata: MailboxProtectionUnitItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mailboxProtectionUnit%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MailboxProtectionUnitsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MailboxProtectionUnitsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailboxProtectionUnitCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MailboxProtectionUnitsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
