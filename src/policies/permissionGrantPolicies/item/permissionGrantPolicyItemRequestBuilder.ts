import {PermissionGrantPolicy} from '../../../models/microsoft/graph/';
import {createPermissionGrantPolicyFromDiscriminatorValue} from '../../../models/microsoft/graph/createPermissionGrantPolicyFromDiscriminatorValue';
import {ODataError} from '../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ExcludesRequestBuilder} from './excludes/excludesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as i9edd8e4de9412285275a765d06f54ff6478fce722d4aca09d1af5dabf18daa5a} from './excludes/item/permissionGrantConditionSetItemRequestBuilder';
import {IncludesRequestBuilder} from './includes/includesRequestBuilder';
import {PermissionGrantConditionSetItemRequestBuilder as if9859889de051bd4455dfb7953bbf113c7f3d3ec253cfedc2ce81fadb8e20e22} from './includes/item/permissionGrantConditionSetItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity.  */
export class PermissionGrantPolicyItemRequestBuilder {
    public get excludes(): ExcludesRequestBuilder {
        return new ExcludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get includes(): IncludesRequestBuilder {
        return new IncludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PermissionGrantPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property permissionGrantPolicies for policies
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property permissionGrantPolicies in policies
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PermissionGrantPolicy | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property permissionGrantPolicies for policies
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.permissionGrantPolicies.item.excludes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetItemRequestBuilder
     */
    public excludesById(id: string) : i9edd8e4de9412285275a765d06f54ff6478fce722d4aca09d1af5dabf18daa5a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet_id"] = id
        return new i9edd8e4de9412285275a765d06f54ff6478fce722d4aca09d1af5dabf18daa5a(urlTplParams, this.requestAdapter);
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PermissionGrantPolicy
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PermissionGrantPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PermissionGrantPolicy>(requestInfo, createPermissionGrantPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.permissionGrantPolicies.item.includes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetItemRequestBuilder
     */
    public includesById(id: string) : if9859889de051bd4455dfb7953bbf113c7f3d3ec253cfedc2ce81fadb8e20e22 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet_id"] = id
        return new if9859889de051bd4455dfb7953bbf113c7f3d3ec253cfedc2ce81fadb8e20e22(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property permissionGrantPolicies in policies
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: PermissionGrantPolicy | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
