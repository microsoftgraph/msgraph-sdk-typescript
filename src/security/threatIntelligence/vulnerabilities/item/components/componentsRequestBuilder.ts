import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type VulnerabilityComponentCollectionResponse } from '../../../../../models/security/';
import { createVulnerabilityComponentCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/createVulnerabilityComponentCollectionResponseFromDiscriminatorValue';
import { createVulnerabilityComponentFromDiscriminatorValue } from '../../../../../models/security/createVulnerabilityComponentFromDiscriminatorValue';
import { deserializeIntoVulnerabilityComponent } from '../../../../../models/security/deserializeIntoVulnerabilityComponent';
import { serializeVulnerabilityComponent } from '../../../../../models/security/serializeVulnerabilityComponent';
import { type VulnerabilityComponent } from '../../../../../models/security/vulnerabilityComponent';
import { type ComponentsRequestBuilderGetRequestConfiguration } from './componentsRequestBuilderGetRequestConfiguration';
import { type ComponentsRequestBuilderPostRequestConfiguration } from './componentsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { VulnerabilityComponentItemRequestBuilder } from './item/vulnerabilityComponentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the components property of the microsoft.graph.security.vulnerability entity.
 */
export class ComponentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the components property of the microsoft.graph.security.vulnerability entity.
     * @param vulnerabilityComponentId The unique identifier of vulnerabilityComponent
     * @returns a VulnerabilityComponentItemRequestBuilder
     */
    public byVulnerabilityComponentId(vulnerabilityComponentId: string) : VulnerabilityComponentItemRequestBuilder {
        if(!vulnerabilityComponentId) throw new Error("vulnerabilityComponentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vulnerabilityComponent%2Did"] = vulnerabilityComponentId
        return new VulnerabilityComponentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ComponentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/vulnerabilities/{vulnerability%2Did}/components{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the microsoft.graph.security.vulnerabilityComponent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VulnerabilityComponentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-vulnerability-list-components?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ComponentsRequestBuilderGetRequestConfiguration | undefined) : Promise<VulnerabilityComponentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VulnerabilityComponentCollectionResponse>(requestInfo, createVulnerabilityComponentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to components for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VulnerabilityComponent
     */
    public post(body: VulnerabilityComponent, requestConfiguration?: ComponentsRequestBuilderPostRequestConfiguration | undefined) : Promise<VulnerabilityComponent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VulnerabilityComponent>(requestInfo, createVulnerabilityComponentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the microsoft.graph.security.vulnerabilityComponent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ComponentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to components for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: VulnerabilityComponent, requestConfiguration?: ComponentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeVulnerabilityComponent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a componentsRequestBuilder
     */
    public withUrl(rawUrl: string) : ComponentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ComponentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
