import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { type EdiscoveryCaseCollectionResponse } from '../../../models/security/';
import { createEdiscoveryCaseFromDiscriminatorValue, deserializeIntoEdiscoveryCase, serializeEdiscoveryCase, type EdiscoveryCase } from '../../../models/security/ediscoveryCase';
import { createEdiscoveryCaseCollectionResponseFromDiscriminatorValue } from '../../../models/security/ediscoveryCaseCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EdiscoveryCaseItemRequestBuilder } from './item/ediscoveryCaseItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EdiscoveryCasesRequestBuilderGetQueryParameters {
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
export interface EdiscoveryCasesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EdiscoveryCasesRequestBuilderGetQueryParameters;
}
export interface EdiscoveryCasesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
 */
export class EdiscoveryCasesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
     * @param ediscoveryCaseId The unique identifier of ediscoveryCase
     * @returns a EdiscoveryCaseItemRequestBuilder
     */
    public byEdiscoveryCaseId(ediscoveryCaseId: string) : EdiscoveryCaseItemRequestBuilder {
        if(!ediscoveryCaseId) throw new Error("ediscoveryCaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryCase%2Did"] = ediscoveryCaseId
        return new EdiscoveryCaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoveryCasesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the ediscoveryCase objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCaseCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-casesroot-list-ediscoverycases?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryCasesRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCaseCollectionResponse>(requestInfo, createEdiscoveryCaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryCase object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCase
     * @see {@link https://learn.microsoft.com/graph/api/security-casesroot-post-ediscoverycases?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryCase, requestConfiguration?: EdiscoveryCasesRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryCase | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the ediscoveryCase objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryCasesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryCase object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryCase, requestConfiguration?: EdiscoveryCasesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryCase);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ediscoveryCasesRequestBuilder
     */
    public withUrl(rawUrl: string) : EdiscoveryCasesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EdiscoveryCasesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
