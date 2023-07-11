import {GroupLifecyclePolicyCollectionResponse} from '../models/';
import {createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue} from '../models/createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue';
import {createGroupLifecyclePolicyFromDiscriminatorValue} from '../models/createGroupLifecyclePolicyFromDiscriminatorValue';
import {deserializeIntoGroupLifecyclePolicy} from '../models/deserializeIntoGroupLifecyclePolicy';
import {GroupLifecyclePolicy} from '../models/groupLifecyclePolicy';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeGroupLifecyclePolicy} from '../models/serializeGroupLifecyclePolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilderGetRequestConfiguration} from './groupLifecyclePoliciesRequestBuilderGetRequestConfiguration';
import {GroupLifecyclePoliciesRequestBuilderPostRequestConfiguration} from './groupLifecyclePoliciesRequestBuilderPostRequestConfiguration';
import {GroupLifecyclePolicyItemRequestBuilder} from './item/groupLifecyclePolicyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of groupLifecyclePolicy entities.
 */
export class GroupLifecyclePoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of groupLifecyclePolicy entities.
     * @param groupLifecyclePolicyId Unique identifier of the item
     * @returns a GroupLifecyclePolicyItemRequestBuilder
     */
    public byGroupLifecyclePolicyId(groupLifecyclePolicyId: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!groupLifecyclePolicyId) throw new Error("groupLifecyclePolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy%2Did"] = groupLifecyclePolicyId
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupLifecyclePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupLifecyclePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all the groupLifecyclePolicies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupLifecyclePolicyCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/grouplifecyclepolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: GroupLifecyclePoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupLifecyclePolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupLifecyclePolicyCollectionResponse>(requestInfo, createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Creates a new groupLifecyclePolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupLifecyclePolicy
     * @see {@link https://docs.microsoft.com/graph/api/grouplifecyclepolicy-post-grouplifecyclepolicies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GroupLifecyclePolicy | undefined, requestConfiguration?: GroupLifecyclePoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<GroupLifecyclePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupLifecyclePolicy>(requestInfo, createGroupLifecyclePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * List all the groupLifecyclePolicies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GroupLifecyclePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Creates a new groupLifecyclePolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GroupLifecyclePolicy | undefined, requestConfiguration?: GroupLifecyclePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGroupLifecyclePolicy);
        return requestInfo;
    };
}
