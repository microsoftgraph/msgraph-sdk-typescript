import {B2xIdentityUserFlow, B2xIdentityUserFlowCollectionResponse} from '../../models/';
import {createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue} from '../../models/createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from '../../models/createB2xIdentityUserFlowFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {B2xUserFlowsRequestBuilderGetRequestConfiguration} from './b2xUserFlowsRequestBuilderGetRequestConfiguration';
import {B2xUserFlowsRequestBuilderPostRequestConfiguration} from './b2xUserFlowsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {B2xIdentityUserFlowItemRequestBuilder} from './item/b2xIdentityUserFlowItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
 */
export class B2xUserFlowsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
     * @param b2xIdentityUserFlowId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlowCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/identitycontainer-list-b2xuserflows?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: B2xUserFlowsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlowCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlowCollectionResponse>(requestInfo, createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new b2xIdentityUserFlow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     * @see {@link https://docs.microsoft.com/graph/api/identitycontainer-post-b2xuserflows?view=graph-rest-1.0|Find more info here}
     */
    public post(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlow>(requestInfo, createB2xIdentityUserFlowFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
