import {PrintTaskCollectionResponse} from '../../../../models/';
import {createPrintTaskCollectionResponseFromDiscriminatorValue} from '../../../../models/createPrintTaskCollectionResponseFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from '../../../../models/createPrintTaskFromDiscriminatorValue';
import {deserializeIntoPrintTask} from '../../../../models/deserializeIntoPrintTask';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {PrintTask} from '../../../../models/printTask';
import {serializePrintTask} from '../../../../models/serializePrintTask';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintTaskItemRequestBuilder} from './item/printTaskItemRequestBuilder';
import {TasksRequestBuilderGetRequestConfiguration} from './tasksRequestBuilderGetRequestConfiguration';
import {TasksRequestBuilderPostRequestConfiguration} from './tasksRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.printTaskDefinition entity.
 */
export class TasksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.printTaskDefinition entity.
     * @param printTaskId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/print/taskDefinitions/{printTaskDefinition%2Did}/tasks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of tasks associated with a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/printtaskdefinition-list-tasks?view=graph-rest-1.0|Find more info here}
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
    public post(body: PrintTask | undefined, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintTask | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Retrieve a list of tasks associated with a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
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
    public toPostRequestInformation(body: PrintTask | undefined, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrintTask);
        return requestInfo;
    };
}
