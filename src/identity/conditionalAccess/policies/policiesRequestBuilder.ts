import {ConditionalAccessPolicyCollectionResponse} from '../../../models/';
import type {ConditionalAccessPolicy} from '../../../models/conditionalAccessPolicy';
import {createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue} from '../../../models/createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue';
import {createConditionalAccessPolicyFromDiscriminatorValue} from '../../../models/createConditionalAccessPolicyFromDiscriminatorValue';
import {deserializeIntoConditionalAccessPolicy} from '../../../models/deserializeIntoConditionalAccessPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeConditionalAccessPolicy} from '../../../models/serializeConditionalAccessPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ConditionalAccessPolicyItemRequestBuilder} from './item/conditionalAccessPolicyItemRequestBuilder';
import {PoliciesRequestBuilderGetRequestConfiguration} from './policiesRequestBuilderGetRequestConfiguration';
import {PoliciesRequestBuilderPostRequestConfiguration} from './policiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policies property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class PoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the policies property of the microsoft.graph.conditionalAccessRoot entity.
     * @param conditionalAccessPolicyId Unique identifier of the item
     * @returns a ConditionalAccessPolicyItemRequestBuilder
     */
    public byConditionalAccessPolicyId(conditionalAccessPolicyId: string) : ConditionalAccessPolicyItemRequestBuilder {
        if(!conditionalAccessPolicyId) throw new Error("conditionalAccessPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessPolicy%2Did"] = conditionalAccessPolicyId
        return new ConditionalAccessPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/policies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of conditionalAccessPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-list-policies?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<ConditionalAccessPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicyCollectionResponse>(requestInfo, createConditionalAccessPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new conditionalAccessPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ConditionalAccessPolicy | undefined, requestConfiguration?: PoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<ConditionalAccessPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessPolicy>(requestInfo, createConditionalAccessPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of conditionalAccessPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new conditionalAccessPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConditionalAccessPolicy | undefined, requestConfiguration?: PoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeConditionalAccessPolicy);
        return requestInfo;
    };
}
