import {UnifiedRbacResourceActionCollectionResponse} from '../../../../../models/';
import {createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue';
import {createUnifiedRbacResourceActionFromDiscriminatorValue} from '../../../../../models/createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoUnifiedRbacResourceAction} from '../../../../../models/deserializeIntoUnifiedRbacResourceAction';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRbacResourceAction} from '../../../../../models/serializeUnifiedRbacResourceAction';
import type {UnifiedRbacResourceAction} from '../../../../../models/unifiedRbacResourceAction';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UnifiedRbacResourceActionItemRequestBuilder} from './item/unifiedRbacResourceActionItemRequestBuilder';
import {ResourceActionsRequestBuilderGetRequestConfiguration} from './resourceActionsRequestBuilderGetRequestConfiguration';
import {ResourceActionsRequestBuilderPostRequestConfiguration} from './resourceActionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceActions property of the microsoft.graph.unifiedRbacResourceNamespace entity.
 */
export class ResourceActionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceActions property of the microsoft.graph.unifiedRbacResourceNamespace entity.
     * @param unifiedRbacResourceActionId Unique identifier of the item
     * @returns a UnifiedRbacResourceActionItemRequestBuilder
     */
    public byUnifiedRbacResourceActionId(unifiedRbacResourceActionId: string) : UnifiedRbacResourceActionItemRequestBuilder {
        if(!unifiedRbacResourceActionId) throw new Error("unifiedRbacResourceActionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRbacResourceAction%2Did"] = unifiedRbacResourceActionId
        return new UnifiedRbacResourceActionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceActionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace%2Did}/resourceActions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceActionCollectionResponse
     */
    public get(requestConfiguration?: ResourceActionsRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRbacResourceActionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceActionCollectionResponse>(requestInfo, createUnifiedRbacResourceActionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resourceActions for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceAction
     */
    public post(body: UnifiedRbacResourceAction | undefined, requestConfiguration?: ResourceActionsRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRbacResourceAction | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRbacResourceAction>(requestInfo, createUnifiedRbacResourceActionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get resourceActions from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceActionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resourceActions for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRbacResourceAction | undefined, requestConfiguration?: ResourceActionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRbacResourceAction);
        return requestInfo;
    };
}
