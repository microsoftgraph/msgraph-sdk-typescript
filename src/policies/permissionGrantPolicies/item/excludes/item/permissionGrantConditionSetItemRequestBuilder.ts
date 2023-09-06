import { createPermissionGrantConditionSetFromDiscriminatorValue } from '../../../../../models/createPermissionGrantConditionSetFromDiscriminatorValue';
import { deserializeIntoPermissionGrantConditionSet } from '../../../../../models/deserializeIntoPermissionGrantConditionSet';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type PermissionGrantConditionSet } from '../../../../../models/permissionGrantConditionSet';
import { serializePermissionGrantConditionSet } from '../../../../../models/serializePermissionGrantConditionSet';
import { type PermissionGrantConditionSetItemRequestBuilderDeleteRequestConfiguration } from './permissionGrantConditionSetItemRequestBuilderDeleteRequestConfiguration';
import { type PermissionGrantConditionSetItemRequestBuilderGetRequestConfiguration } from './permissionGrantConditionSetItemRequestBuilderGetRequestConfiguration';
import { type PermissionGrantConditionSetItemRequestBuilderPatchRequestConfiguration } from './permissionGrantConditionSetItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
 */
export class PermissionGrantConditionSetItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PermissionGrantConditionSetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy%2Did}/excludes/{permissionGrantConditionSet%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a permissionGrantConditionSet from the excludes collection of a permissionGrantPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-delete-excludes?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantConditionSet
     */
    public get(requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PermissionGrantConditionSet | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantConditionSet>(requestInfo, createPermissionGrantConditionSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property excludes in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantConditionSet
     */
    public patch(body: PermissionGrantConditionSet, requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PermissionGrantConditionSet | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantConditionSet>(requestInfo, createPermissionGrantConditionSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a permissionGrantConditionSet from the excludes collection of a permissionGrantPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property excludes in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PermissionGrantConditionSet, requestConfiguration?: PermissionGrantConditionSetItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePermissionGrantConditionSet);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PermissionGrantConditionSetItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PermissionGrantConditionSetItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PermissionGrantConditionSetItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
