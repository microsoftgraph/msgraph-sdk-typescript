import { type ResourceOperationCollectionResponse } from '../../models/';
import { createResourceOperationCollectionResponseFromDiscriminatorValue } from '../../models/createResourceOperationCollectionResponseFromDiscriminatorValue';
import { createResourceOperationFromDiscriminatorValue } from '../../models/createResourceOperationFromDiscriminatorValue';
import { deserializeIntoResourceOperation } from '../../models/deserializeIntoResourceOperation';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type ResourceOperation } from '../../models/resourceOperation';
import { serializeResourceOperation } from '../../models/serializeResourceOperation';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ResourceOperationItemRequestBuilder } from './item/resourceOperationItemRequestBuilder';
import { type ResourceOperationsRequestBuilderGetRequestConfiguration } from './resourceOperationsRequestBuilderGetRequestConfiguration';
import { type ResourceOperationsRequestBuilderPostRequestConfiguration } from './resourceOperationsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceOperations property of the microsoft.graph.deviceManagement entity.
 */
export class ResourceOperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceOperations property of the microsoft.graph.deviceManagement entity.
     * @param resourceOperationId The unique identifier of resourceOperation
     * @returns a ResourceOperationItemRequestBuilder
     */
    public byResourceOperationId(resourceOperationId: string) : ResourceOperationItemRequestBuilder {
        if(!resourceOperationId) throw new Error("resourceOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceOperation%2Did"] = resourceOperationId
        return new ResourceOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceOperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/resourceOperations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the resourceOperation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceOperationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-resourceoperation-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ResourceOperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ResourceOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceOperationCollectionResponse>(requestInfo, createResourceOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new resourceOperation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceOperation
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-resourceoperation-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ResourceOperation, requestConfiguration?: ResourceOperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ResourceOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceOperation>(requestInfo, createResourceOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the resourceOperation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceOperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new resourceOperation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ResourceOperation, requestConfiguration?: ResourceOperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeResourceOperation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resourceOperationsRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourceOperationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourceOperationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
