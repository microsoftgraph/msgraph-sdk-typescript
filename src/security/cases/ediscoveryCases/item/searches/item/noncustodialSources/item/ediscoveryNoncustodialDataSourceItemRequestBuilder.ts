import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../models/oDataErrors/oDataError';
import { type EdiscoveryNoncustodialDataSource } from '../../../../../../../../models/security/';
import { createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue } from '../../../../../../../../models/security/ediscoveryNoncustodialDataSource';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
 */
export class EdiscoveryNoncustodialDataSourceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EdiscoveryNoncustodialDataSourceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}/noncustodialSources/{ediscoveryNoncustodialDataSource%2Did}{?%24select,%24expand}");
    };
    /**
     * Remove an ediscoveryNoncustodialDataSource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-delete-noncustodialsources?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     */
    public get(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo, createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove an ediscoveryNoncustodialDataSource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EdiscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
