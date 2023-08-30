import {B2xIdentityUserFlowCollectionResponse} from '../../models/';
import type {B2xIdentityUserFlow} from '../../models/b2xIdentityUserFlow';
import {createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue} from '../../models/createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from '../../models/createB2xIdentityUserFlowFromDiscriminatorValue';
import {deserializeIntoB2xIdentityUserFlow} from '../../models/deserializeIntoB2xIdentityUserFlow';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeB2xIdentityUserFlow} from '../../models/serializeB2xIdentityUserFlow';
import {B2xUserFlowsRequestBuilderGetRequestConfiguration} from './b2xUserFlowsRequestBuilderGetRequestConfiguration';
import {B2xUserFlowsRequestBuilderPostRequestConfiguration} from './b2xUserFlowsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {B2xIdentityUserFlowItemRequestBuilder} from './item/b2xIdentityUserFlowItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
 */
export class B2xUserFlowsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
     * @param b2xIdentityUserFlowId The unique identifier of b2xIdentityUserFlow
     * @returns a B2xIdentityUserFlowItemRequestBuilder
     */
    public byB2xIdentityUserFlowId(b2xIdentityUserFlowId: string) : B2xIdentityUserFlowItemRequestBuilder {
        if(!b2xIdentityUserFlowId) throw new Error("b2xIdentityUserFlowId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["b2xIdentityUserFlow%2Did"] = b2xIdentityUserFlowId
        return new B2xIdentityUserFlowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new B2xUserFlowsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of b2xIdentityUserFlow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of B2xIdentityUserFlowCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitycontainer-list-b2xuserflows?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: B2xUserFlowsRequestBuilderGetRequestConfiguration | undefined) : Promise<B2xIdentityUserFlowCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<B2xIdentityUserFlowCollectionResponse>(requestInfo, createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new b2xIdentityUserFlow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of B2xIdentityUserFlow
     * @see {@link https://learn.microsoft.com/graph/api/identitycontainer-post-b2xuserflows?view=graph-rest-1.0|Find more info here}
     */
    public post(body: B2xIdentityUserFlow, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<B2xIdentityUserFlow>(requestInfo, createB2xIdentityUserFlowFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of b2xIdentityUserFlow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: B2xUserFlowsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new b2xIdentityUserFlow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: B2xIdentityUserFlow, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeB2xIdentityUserFlow);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a b2xUserFlowsRequestBuilder
     */
    public withUrl(rawUrl: string) : B2xUserFlowsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new B2xUserFlowsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
