import { type PermissionGrantPolicyCollectionResponse } from '../../models/';
import { createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue } from '../../models/createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue';
import { createPermissionGrantPolicyFromDiscriminatorValue } from '../../models/createPermissionGrantPolicyFromDiscriminatorValue';
import { deserializeIntoPermissionGrantPolicy } from '../../models/deserializeIntoPermissionGrantPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type PermissionGrantPolicy } from '../../models/permissionGrantPolicy';
import { serializePermissionGrantPolicy } from '../../models/serializePermissionGrantPolicy';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PermissionGrantPolicyItemRequestBuilder } from './item/permissionGrantPolicyItemRequestBuilder';
import { type PermissionGrantPoliciesRequestBuilderGetRequestConfiguration } from './permissionGrantPoliciesRequestBuilderGetRequestConfiguration';
import { type PermissionGrantPoliciesRequestBuilderPostRequestConfiguration } from './permissionGrantPoliciesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity.
 */
export class PermissionGrantPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity.
     * @param permissionGrantPolicyId The unique identifier of permissionGrantPolicy
     * @returns a PermissionGrantPolicyItemRequestBuilder
     */
    public byPermissionGrantPolicyId(permissionGrantPolicyId: string) : PermissionGrantPolicyItemRequestBuilder {
        if(!permissionGrantPolicyId) throw new Error("permissionGrantPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantPolicy%2Did"] = permissionGrantPolicyId
        return new PermissionGrantPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PermissionGrantPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/permissionGrantPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of permissionGrantPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PermissionGrantPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<PermissionGrantPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantPolicyCollectionResponse>(requestInfo, createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Creates a permissionGrantPolicy. A permission grant policy is used to describe the conditions under which permissions can be granted (for example, during application consent). After creating the permission grant policy, you can add include condition sets to add matching rules, and add exclude condition sets to add exclusion rules.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantPolicy
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-post-permissiongrantpolicies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PermissionGrantPolicy, requestConfiguration?: PermissionGrantPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<PermissionGrantPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantPolicy>(requestInfo, createPermissionGrantPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of permissionGrantPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionGrantPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Creates a permissionGrantPolicy. A permission grant policy is used to describe the conditions under which permissions can be granted (for example, during application consent). After creating the permission grant policy, you can add include condition sets to add matching rules, and add exclude condition sets to add exclusion rules.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PermissionGrantPolicy, requestConfiguration?: PermissionGrantPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePermissionGrantPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a permissionGrantPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : PermissionGrantPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PermissionGrantPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
