import {PrintTaskCollectionResponse} from '../../../../../../models/';
import {createPrintTaskCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createPrintTaskCollectionResponseFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from '../../../../../../models/createPrintTaskFromDiscriminatorValue';
import {deserializeIntoPrintTask} from '../../../../../../models/deserializeIntoPrintTask';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {PrintTask} from '../../../../../../models/printTask';
import {serializePrintTask} from '../../../../../../models/serializePrintTask';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintTaskItemRequestBuilder} from './item/printTaskItemRequestBuilder';
import {TasksRequestBuilderGetRequestConfiguration} from './tasksRequestBuilderGetRequestConfiguration';
import {TasksRequestBuilderPostRequestConfiguration} from './tasksRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.printJob entity.
 */
export class TasksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.printJob entity.
     * @param printTaskId The unique identifier of printTask
     * @returns a PrintTaskItemRequestBuilder
     */
    public byPrintTaskId(printTaskId: string) : PrintTaskItemRequestBuilder {
        if(!printTaskId) throw new Error("printTaskId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTask%2Did"] = printTaskId
        return new PrintTaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TasksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/tasks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A list of printTasks that were triggered by this print job.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskCollectionResponse
     */
    public get(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintTaskCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTaskCollectionResponse>(requestInfo, createPrintTaskCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to tasks for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTask
     */
    public post(body: PrintTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintTask | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTask>(requestInfo, createPrintTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * A list of printTasks that were triggered by this print job.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to tasks for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintTask);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a tasksRequestBuilder
     */
    public withUrl(rawUrl: string) : TasksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TasksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
