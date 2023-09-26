import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { type VulnerabilityCollectionResponse } from '../../../models/security/';
import { createVulnerabilityFromDiscriminatorValue, deserializeIntoVulnerability, serializeVulnerability, type Vulnerability } from '../../../models/security/vulnerability';
import { createVulnerabilityCollectionResponseFromDiscriminatorValue } from '../../../models/security/vulnerabilityCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { VulnerabilityItemRequestBuilder } from './item/vulnerabilityItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface VulnerabilitiesRequestBuilderGetQueryParameters {
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
export interface VulnerabilitiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: VulnerabilitiesRequestBuilderGetQueryParameters;
}
export interface VulnerabilitiesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
 */
export class VulnerabilitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
     * @param vulnerabilityId The unique identifier of vulnerability
     * @returns a VulnerabilityItemRequestBuilder
     */
    public byVulnerabilityId(vulnerabilityId: string) : VulnerabilityItemRequestBuilder {
        if(!vulnerabilityId) throw new Error("vulnerabilityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vulnerability%2Did"] = vulnerabilityId
        return new VulnerabilityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VulnerabilitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/vulnerabilities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VulnerabilityCollectionResponse
     */
    public get(requestConfiguration?: VulnerabilitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<VulnerabilityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VulnerabilityCollectionResponse>(requestInfo, createVulnerabilityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to vulnerabilities for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Vulnerability
     */
    public post(body: Vulnerability, requestConfiguration?: VulnerabilitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<Vulnerability | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Vulnerability>(requestInfo, createVulnerabilityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VulnerabilitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to vulnerabilities for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Vulnerability, requestConfiguration?: VulnerabilitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeVulnerability);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a vulnerabilitiesRequestBuilder
     */
    public withUrl(rawUrl: string) : VulnerabilitiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VulnerabilitiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
