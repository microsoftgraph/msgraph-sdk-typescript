import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { type SubdomainCollectionResponse } from '../../../models/security/';
import { createSubdomainFromDiscriminatorValue, deserializeIntoSubdomain, serializeSubdomain, type Subdomain } from '../../../models/security/subdomain';
import { createSubdomainCollectionResponseFromDiscriminatorValue } from '../../../models/security/subdomainCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SubdomainItemRequestBuilder } from './item/subdomainItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SubdomainsRequestBuilderGetQueryParameters {
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
export interface SubdomainsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SubdomainsRequestBuilderGetQueryParameters;
}
export interface SubdomainsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the subdomains property of the microsoft.graph.security.threatIntelligence entity.
 */
export class SubdomainsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the subdomains property of the microsoft.graph.security.threatIntelligence entity.
     * @param subdomainId The unique identifier of subdomain
     * @returns a SubdomainItemRequestBuilder
     */
    public bySubdomainId(subdomainId: string) : SubdomainItemRequestBuilder {
        if(!subdomainId) throw new Error("subdomainId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subdomain%2Did"] = subdomainId
        return new SubdomainItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SubdomainsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/subdomains{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a subdomain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubdomainCollectionResponse
     */
    public get(requestConfiguration?: SubdomainsRequestBuilderGetRequestConfiguration | undefined) : Promise<SubdomainCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubdomainCollectionResponse>(requestInfo, createSubdomainCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to subdomains for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Subdomain
     */
    public post(body: Subdomain, requestConfiguration?: SubdomainsRequestBuilderPostRequestConfiguration | undefined) : Promise<Subdomain | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Subdomain>(requestInfo, createSubdomainFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a subdomain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubdomainsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to subdomains for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Subdomain, requestConfiguration?: SubdomainsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSubdomain);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a subdomainsRequestBuilder
     */
    public withUrl(rawUrl: string) : SubdomainsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SubdomainsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
