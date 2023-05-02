import {HomeRealmDiscoveryPolicyCollectionResponse} from '../../models/';
import {createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from '../../models/createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {deserializeIntoHomeRealmDiscoveryPolicy} from '../../models/deserializeIntoHomeRealmDiscoveryPolicy';
import {HomeRealmDiscoveryPolicy} from '../../models/homeRealmDiscoveryPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeHomeRealmDiscoveryPolicy} from '../../models/serializeHomeRealmDiscoveryPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration} from './homeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration';
import {HomeRealmDiscoveryPoliciesRequestBuilderPostRequestConfiguration} from './homeRealmDiscoveryPoliciesRequestBuilderPostRequestConfiguration';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.policyRoot entity.
 */
export class HomeRealmDiscoveryPoliciesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.policyRoot entity.
     * @param homeRealmDiscoveryPolicyId Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public byHomeRealmDiscoveryPolicyId(homeRealmDiscoveryPolicyId: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!homeRealmDiscoveryPolicyId) throw new Error("homeRealmDiscoveryPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy%2Did"] = homeRealmDiscoveryPolicyId
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HomeRealmDiscoveryPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/homeRealmDiscoveryPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The policy to control Azure AD authentication behavior for federated users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of HomeRealmDiscoveryPolicyCollectionResponse
     */
    public get(requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<HomeRealmDiscoveryPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<HomeRealmDiscoveryPolicyCollectionResponse>(requestInfo, createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to homeRealmDiscoveryPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of HomeRealmDiscoveryPolicy
     */
    public post(body: HomeRealmDiscoveryPolicy | undefined, requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<HomeRealmDiscoveryPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<HomeRealmDiscoveryPolicy>(requestInfo, createHomeRealmDiscoveryPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The policy to control Azure AD authentication behavior for federated users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to homeRealmDiscoveryPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: HomeRealmDiscoveryPolicy | undefined, requestConfiguration?: HomeRealmDiscoveryPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeHomeRealmDiscoveryPolicy);
        return requestInfo;
    };
}
