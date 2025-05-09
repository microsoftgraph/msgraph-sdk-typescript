/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createEdiscoverySearchFromDiscriminatorValue, serializeEdiscoverySearch, type EdiscoverySearch } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { AdditionalSourcesRequestBuilderNavigationMetadata, AdditionalSourcesRequestBuilderRequestsMetadata, type AdditionalSourcesRequestBuilder } from './additionalSources/index.js';
// @ts-ignore
import { AddToReviewSetOperationRequestBuilderRequestsMetadata, type AddToReviewSetOperationRequestBuilder } from './addToReviewSetOperation/index.js';
// @ts-ignore
import { CustodianSourcesRequestBuilderNavigationMetadata, CustodianSourcesRequestBuilderRequestsMetadata, type CustodianSourcesRequestBuilder } from './custodianSources/index.js';
// @ts-ignore
import { LastEstimateStatisticsOperationRequestBuilderRequestsMetadata, type LastEstimateStatisticsOperationRequestBuilder } from './lastEstimateStatisticsOperation/index.js';
// @ts-ignore
import { MicrosoftGraphSecurityEstimateStatisticsRequestBuilderRequestsMetadata, type MicrosoftGraphSecurityEstimateStatisticsRequestBuilder } from './microsoftGraphSecurityEstimateStatistics/index.js';
// @ts-ignore
import { MicrosoftGraphSecurityExportReportRequestBuilderRequestsMetadata, type MicrosoftGraphSecurityExportReportRequestBuilder } from './microsoftGraphSecurityExportReport/index.js';
// @ts-ignore
import { MicrosoftGraphSecurityExportResultRequestBuilderRequestsMetadata, type MicrosoftGraphSecurityExportResultRequestBuilder } from './microsoftGraphSecurityExportResult/index.js';
// @ts-ignore
import { MicrosoftGraphSecurityPurgeDataRequestBuilderRequestsMetadata, type MicrosoftGraphSecurityPurgeDataRequestBuilder } from './microsoftGraphSecurityPurgeData/index.js';
// @ts-ignore
import { NoncustodialSourcesRequestBuilderNavigationMetadata, NoncustodialSourcesRequestBuilderRequestsMetadata, type NoncustodialSourcesRequestBuilder } from './noncustodialSources/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity.
 */
export interface EdiscoverySearchItemRequestBuilder extends BaseRequestBuilder<EdiscoverySearchItemRequestBuilder> {
    /**
     * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
     */
    get additionalSources(): AdditionalSourcesRequestBuilder;
    /**
     * Provides operations to manage the addToReviewSetOperation property of the microsoft.graph.security.ediscoverySearch entity.
     */
    get addToReviewSetOperation(): AddToReviewSetOperationRequestBuilder;
    /**
     * Provides operations to manage the custodianSources property of the microsoft.graph.security.ediscoverySearch entity.
     */
    get custodianSources(): CustodianSourcesRequestBuilder;
    /**
     * Provides operations to manage the lastEstimateStatisticsOperation property of the microsoft.graph.security.ediscoverySearch entity.
     */
    get lastEstimateStatisticsOperation(): LastEstimateStatisticsOperationRequestBuilder;
    /**
     * Provides operations to call the estimateStatistics method.
     */
    get microsoftGraphSecurityEstimateStatistics(): MicrosoftGraphSecurityEstimateStatisticsRequestBuilder;
    /**
     * Provides operations to call the exportReport method.
     */
    get microsoftGraphSecurityExportReport(): MicrosoftGraphSecurityExportReportRequestBuilder;
    /**
     * Provides operations to call the exportResult method.
     */
    get microsoftGraphSecurityExportResult(): MicrosoftGraphSecurityExportResultRequestBuilder;
    /**
     * Provides operations to call the purgeData method.
     */
    get microsoftGraphSecurityPurgeData(): MicrosoftGraphSecurityPurgeDataRequestBuilder;
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
     */
    get noncustodialSources(): NoncustodialSourcesRequestBuilder;
    /**
     * Delete an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-delete-searches?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoverySearch>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EdiscoverySearchItemRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoverySearch | undefined>;
    /**
     * Update the properties of an ediscoverySearch object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoverySearch>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: EdiscoverySearch, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EdiscoverySearch | undefined>;
    /**
     * Delete an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdiscoverySearchItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an ediscoverySearch object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EdiscoverySearch, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an ediscoverySearch object.
 */
export interface EdiscoverySearchItemRequestBuilderGetQueryParameters {
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
export const EdiscoverySearchItemRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EdiscoverySearchItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EdiscoverySearchItemRequestBuilderNavigationMetadata: Record<Exclude<keyof EdiscoverySearchItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    additionalSources: {
        requestsMetadata: AdditionalSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: AdditionalSourcesRequestBuilderNavigationMetadata,
    },
    addToReviewSetOperation: {
        requestsMetadata: AddToReviewSetOperationRequestBuilderRequestsMetadata,
    },
    custodianSources: {
        requestsMetadata: CustodianSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: CustodianSourcesRequestBuilderNavigationMetadata,
    },
    lastEstimateStatisticsOperation: {
        requestsMetadata: LastEstimateStatisticsOperationRequestBuilderRequestsMetadata,
    },
    microsoftGraphSecurityEstimateStatistics: {
        requestsMetadata: MicrosoftGraphSecurityEstimateStatisticsRequestBuilderRequestsMetadata,
    },
    microsoftGraphSecurityExportReport: {
        requestsMetadata: MicrosoftGraphSecurityExportReportRequestBuilderRequestsMetadata,
    },
    microsoftGraphSecurityExportResult: {
        requestsMetadata: MicrosoftGraphSecurityExportResultRequestBuilderRequestsMetadata,
    },
    microsoftGraphSecurityPurgeData: {
        requestsMetadata: MicrosoftGraphSecurityPurgeDataRequestBuilderRequestsMetadata,
    },
    noncustodialSources: {
        requestsMetadata: NoncustodialSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: NoncustodialSourcesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdiscoverySearchItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EdiscoverySearchItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EdiscoverySearchItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoverySearchFromDiscriminatorValue,
        queryParametersMapper: EdiscoverySearchItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EdiscoverySearchItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoverySearchFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdiscoverySearch,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
