import {createUnifiedRbacResourceNamespaceFromDiscriminatorValue} from '../../../../models/createUnifiedRbacResourceNamespaceFromDiscriminatorValue';
import {deserializeIntoUnifiedRbacResourceNamespace} from '../../../../models/deserializeIntoUnifiedRbacResourceNamespace';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRbacResourceNamespace} from '../../../../models/serializeUnifiedRbacResourceNamespace';
import type {UnifiedRbacResourceNamespace} from '../../../../models/unifiedRbacResourceNamespace';
import {ResourceActionsRequestBuilder} from './resourceActions/resourceActionsRequestBuilder';
import {UnifiedRbacResourceNamespaceItemRequestBuilderDeleteRequestConfiguration} from './unifiedRbacResourceNamespaceItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRbacResourceNamespaceItemRequestBuilderGetRequestConfiguration} from './unifiedRbacResourceNamespaceItemRequestBuilderGetRequestConfiguration';
import {UnifiedRbacResourceNamespaceItemRequestBuilderPatchRequestConfiguration} from './unifiedRbacResourceNamespaceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRbacResourceNamespaceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the resourceActions property of the microsoft.graph.unifiedRbacResourceNamespace entity.
     */
    public get resourceActions(): ResourceActionsRequestBuilder {
        return new ResourceActionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UnifiedRbacResourceNamespaceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property resourceNamespaces for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get resourceNamespaces from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespace
     */
    public get(requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRbacResourceNamespace | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceNamespace>(requestInfo, createUnifiedRbacResourceNamespaceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resourceNamespaces in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespace
     */
    public patch(body: UnifiedRbacResourceNamespace, requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRbacResourceNamespace | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceNamespace>(requestInfo, createUnifiedRbacResourceNamespaceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property resourceNamespaces for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get resourceNamespaces from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resourceNamespaces in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRbacResourceNamespace, requestConfiguration?: UnifiedRbacResourceNamespaceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRbacResourceNamespace);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRbacResourceNamespaceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRbacResourceNamespaceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRbacResourceNamespaceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
