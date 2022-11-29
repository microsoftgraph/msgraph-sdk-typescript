import {PermissionGrantPolicy} from '../../../models/';
import {createPermissionGrantPolicyFromDiscriminatorValue} from '../../../models/createPermissionGrantPolicyFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ExcludesRequestBuilder} from './excludes/excludesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as i1de425db59fc7a06aa6b53fd64ff14ab529beb4d0ae123c9d20ff450221dc84c} from './excludes/item/permissionGrantConditionSetItemRequestBuilder';
import {IncludesRequestBuilder} from './includes/includesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as i9067e26394e951d2b2b0e68ce6a008b8c038bd570d8dff07053a60f58777011f} from './includes/item/permissionGrantConditionSetItemRequestBuilder';
import {PermissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderDeleteRequestConfiguration';
import {PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderGetRequestConfiguration';
import {PermissionGrantPolicyItemRequestBuilderPatchRequestConfiguration} from './permissionGrantPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity. */
export class PermissionGrantPolicyItemRequestBuilder {
    /** Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity. */
    public get excludes(): ExcludesRequestBuilder {
        return new ExcludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the includes property of the microsoft.graph.permissionGrantPolicy entity. */
    public get includes(): IncludesRequestBuilder {
        return new IncludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
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
        requestInfo.headers["Accept"] = "application/json";
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
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
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
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
     * @param id Unique identifier of the item
     * @returns a PermissionGrantConditionSetItemRequestBuilder
     */
    public excludesById(id: string) : i1de425db59fc7a06aa6b53fd64ff14ab529beb4d0ae123c9d20ff450221dc84c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet%2Did"] = id
        return new i1de425db59fc7a06aa6b53fd64ff14ab529beb4d0ae123c9d20ff450221dc84c(urlTplParams, this.requestAdapter);
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PermissionGrantPolicy
     */
    public get(requestConfiguration?: PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PermissionGrantPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PermissionGrantPolicy>(requestInfo, createPermissionGrantPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the includes property of the microsoft.graph.permissionGrantPolicy entity.
     * @param id Unique identifier of the item
     * @returns a PermissionGrantConditionSetItemRequestBuilder
     */
    public includesById(id: string) : i9067e26394e951d2b2b0e68ce6a008b8c038bd570d8dff07053a60f58777011f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet%2Did"] = id
        return new i9067e26394e951d2b2b0e68ce6a008b8c038bd570d8dff07053a60f58777011f(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property permissionGrantPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PermissionGrantPolicy
     */
    public patch(body: PermissionGrantPolicy | undefined, requestConfiguration?: PermissionGrantPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PermissionGrantPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PermissionGrantPolicy>(requestInfo, createPermissionGrantPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
}
