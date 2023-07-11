import {createUnifiedRbacResourceActionFromDiscriminatorValue} from '../../../../../../models/createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoUnifiedRbacResourceAction} from '../../../../../../models/deserializeIntoUnifiedRbacResourceAction';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRbacResourceAction} from '../../../../../../models/serializeUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from '../../../../../../models/unifiedRbacResourceAction';
import {UnifiedRbacResourceActionItemRequestBuilderDeleteRequestConfiguration} from './unifiedRbacResourceActionItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRbacResourceActionItemRequestBuilderGetRequestConfiguration} from './unifiedRbacResourceActionItemRequestBuilderGetRequestConfiguration';
import {UnifiedRbacResourceActionItemRequestBuilderPatchRequestConfiguration} from './unifiedRbacResourceActionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceActions property of the microsoft.graph.unifiedRbacResourceNamespace entity.
 */
export class UnifiedRbacResourceActionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnifiedRbacResourceActionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace%2Did}/resourceActions/{unifiedRbacResourceAction%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property resourceActions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceAction
     */
    public get(requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRbacResourceAction | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceAction>(requestInfo, createUnifiedRbacResourceActionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resourceActions in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceAction
     */
    public patch(body: UnifiedRbacResourceAction | undefined, requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRbacResourceAction | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceAction>(requestInfo, createUnifiedRbacResourceActionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property resourceActions for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resourceActions in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRbacResourceAction | undefined, requestConfiguration?: UnifiedRbacResourceActionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRbacResourceAction);
        return requestInfo;
    };
}
