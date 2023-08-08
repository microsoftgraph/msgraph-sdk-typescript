import {createLongRunningOperationFromDiscriminatorValue} from '../../../../../models/createLongRunningOperationFromDiscriminatorValue';
import {deserializeIntoLongRunningOperation} from '../../../../../models/deserializeIntoLongRunningOperation';
import type {LongRunningOperation} from '../../../../../models/longRunningOperation';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeLongRunningOperation} from '../../../../../models/serializeLongRunningOperation';
import {LongRunningOperationItemRequestBuilderDeleteRequestConfiguration} from './longRunningOperationItemRequestBuilderDeleteRequestConfiguration';
import {LongRunningOperationItemRequestBuilderGetRequestConfiguration} from './longRunningOperationItemRequestBuilderGetRequestConfiguration';
import {LongRunningOperationItemRequestBuilderPatchRequestConfiguration} from './longRunningOperationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.authentication entity.
 */
export class LongRunningOperationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LongRunningOperationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/operations/{longRunningOperation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property operations for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: LongRunningOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the status of a long-running operation, represented by a longRunningOperation object. A long-running operation is initiated when you reset a user's password. This resource type is also the base type for the richLongRunningOperation object that represents the status of a long-running operation on a site or a list. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LongRunningOperation
     * @see {@link https://learn.microsoft.com/graph/api/longrunningoperation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LongRunningOperationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<LongRunningOperation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LongRunningOperation>(requestInfo, createLongRunningOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property operations in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LongRunningOperation
     */
    public patch(body: LongRunningOperation, requestConfiguration?: LongRunningOperationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<LongRunningOperation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LongRunningOperation>(requestInfo, createLongRunningOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property operations for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LongRunningOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the status of a long-running operation, represented by a longRunningOperation object. A long-running operation is initiated when you reset a user's password. This resource type is also the base type for the richLongRunningOperation object that represents the status of a long-running operation on a site or a list. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LongRunningOperationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property operations in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LongRunningOperation, requestConfiguration?: LongRunningOperationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLongRunningOperation);
        return requestInfo;
    };
}
