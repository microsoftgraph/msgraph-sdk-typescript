import {ManagedAppOperationCollectionResponse} from '../../../../models/';
import {createManagedAppOperationCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedAppOperationCollectionResponseFromDiscriminatorValue';
import {createManagedAppOperationFromDiscriminatorValue} from '../../../../models/createManagedAppOperationFromDiscriminatorValue';
import {deserializeIntoManagedAppOperation} from '../../../../models/deserializeIntoManagedAppOperation';
import type {ManagedAppOperation} from '../../../../models/managedAppOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedAppOperation} from '../../../../models/serializeManagedAppOperation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedAppOperationItemRequestBuilder} from './item/managedAppOperationItemRequestBuilder';
import {OperationsRequestBuilderGetRequestConfiguration} from './operationsRequestBuilderGetRequestConfiguration';
import {OperationsRequestBuilderPostRequestConfiguration} from './operationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.managedAppRegistration entity.
 */
export class OperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.managedAppRegistration entity.
     * @param managedAppOperationId The unique identifier of managedAppOperation
     * @returns a ManagedAppOperationItemRequestBuilder
     */
    public byManagedAppOperationId(managedAppOperationId: string) : ManagedAppOperationItemRequestBuilder {
        if(!managedAppOperationId) throw new Error("managedAppOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppOperation%2Did"] = managedAppOperationId
        return new ManagedAppOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}/operations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedAppOperation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppOperationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedappoperation-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppOperationCollectionResponse>(requestInfo, createManagedAppOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new managedAppOperation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppOperation
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedappoperation-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedAppOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedAppOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppOperation>(requestInfo, createManagedAppOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedAppOperation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new managedAppOperation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedAppOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppOperation);
        return requestInfo;
    };
}
