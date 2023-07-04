import {ResourceOperationCollectionResponse} from '../../models/';
import {createResourceOperationCollectionResponseFromDiscriminatorValue} from '../../models/createResourceOperationCollectionResponseFromDiscriminatorValue';
import {createResourceOperationFromDiscriminatorValue} from '../../models/createResourceOperationFromDiscriminatorValue';
import {deserializeIntoResourceOperation} from '../../models/deserializeIntoResourceOperation';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {ResourceOperation} from '../../models/resourceOperation';
import {serializeResourceOperation} from '../../models/serializeResourceOperation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ResourceOperationItemRequestBuilder} from './item/resourceOperationItemRequestBuilder';
import {ResourceOperationsRequestBuilderGetRequestConfiguration} from './resourceOperationsRequestBuilderGetRequestConfiguration';
import {ResourceOperationsRequestBuilderPostRequestConfiguration} from './resourceOperationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param resourceOperationId Unique identifier of the item
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
     * @see {@link https://docs.microsoft.com/graph/api/intune-rbac-resourceoperation-list?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://docs.microsoft.com/graph/api/intune-rbac-resourceoperation-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ResourceOperation | undefined, requestConfiguration?: ResourceOperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ResourceOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: ResourceOperation | undefined, requestConfiguration?: ResourceOperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeResourceOperation);
        return requestInfo;
    };
}
