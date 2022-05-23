import {PermissionGrantPolicyImpl} from '../../../models/';
import {createPermissionGrantPolicyFromDiscriminatorValue} from '../../../models/createPermissionGrantPolicyFromDiscriminatorValue';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {PermissionGrantPolicy} from '../../../models/permissionGrantPolicy';
import {ExcludesRequestBuilder} from './excludes/excludesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as icdcaecb83e1a96823841e24d4d4a38ca237ec43d8d6f0a211ddf19094fe784e7} from './excludes/item/permissionGrantConditionSetItemRequestBuilder';
import {IncludesRequestBuilder} from './includes/includesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as if6b0fc6e3bf6ebc5e7e4db0060a5a67ea185eac93d504145bd6be716c61fa0d4} from './includes/item/permissionGrantConditionSetItemRequestBuilder';
import {PermissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration';
import {PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderGetRequestConfiguration';
import {PermissionGrantPolicyItemRequestBuilderPatchRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity. */
export class PermissionGrantPolicyItemRequestBuilder {
    /** The excludes property */
    public get excludes(): ExcludesRequestBuilder {
        return new ExcludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The includes property */
    public get includes(): IncludesRequestBuilder {
        return new IncludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PermissionGrantPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property permissionGrantPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: PermissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property permissionGrantPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PermissionGrantPolicy | undefined, requestConfiguration?: PermissionGrantPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new PermissionGrantPolicyImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property permissionGrantPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: PermissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies.item.excludes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetItemRequestBuilder
     */
    public excludesById(id: string) : icdcaecb83e1a96823841e24d4d4a38ca237ec43d8d6f0a211ddf19094fe784e7 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet%2Did"] = id
        return new icdcaecb83e1a96823841e24d4d4a38ca237ec43d8d6f0a211ddf19094fe784e7(urlTplParams, this.requestAdapter);
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PermissionGrantPolicy
     */
    public get(requestConfiguration?: PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PermissionGrantPolicyImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PermissionGrantPolicyImpl>(requestInfo, createPermissionGrantPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies.item.includes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetItemRequestBuilder
     */
    public includesById(id: string) : if6b0fc6e3bf6ebc5e7e4db0060a5a67ea185eac93d504145bd6be716c61fa0d4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet%2Did"] = id
        return new if6b0fc6e3bf6ebc5e7e4db0060a5a67ea185eac93d504145bd6be716c61fa0d4(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property permissionGrantPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: PermissionGrantPolicy | undefined, requestConfiguration?: PermissionGrantPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
