import {PlannerProgressTaskBoardTaskFormat} from '../../../../../../../../../../models/';
import {createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue} from '../../../../../../../../../../models/createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration} from './progressTaskBoardFormatRequestBuilderDeleteRequestConfiguration';
import {ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration} from './progressTaskBoardFormatRequestBuilderGetRequestConfiguration';
import {ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration} from './progressTaskBoardFormatRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the progressTaskBoardFormat property of the microsoft.graph.plannerTask entity.
 */
export class ProgressTaskBoardFormatRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ProgressTaskBoardFormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/planner/plans/{plannerPlan%2Did}/buckets/{plannerBucket%2Did}/tasks/{plannerTask%2Did}/progressTaskBoardFormat{?%24select,%24expand}");
    };
    /**
     * Delete navigation property progressTaskBoardFormat for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PlannerProgressTaskBoardTaskFormat
     */
    public get(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PlannerProgressTaskBoardTaskFormat | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PlannerProgressTaskBoardTaskFormat>(requestInfo, createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property progressTaskBoardFormat in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PlannerProgressTaskBoardTaskFormat
     */
    public patch(body: PlannerProgressTaskBoardTaskFormat | undefined, requestConfiguration?: ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PlannerProgressTaskBoardTaskFormat | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PlannerProgressTaskBoardTaskFormat>(requestInfo, createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property progressTaskBoardFormat for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property progressTaskBoardFormat in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PlannerProgressTaskBoardTaskFormat | undefined, requestConfiguration?: ProgressTaskBoardFormatRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
