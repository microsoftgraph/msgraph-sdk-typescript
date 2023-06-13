import {PrintTaskTriggerCollectionResponse} from '../../../../models/';
import {createPrintTaskTriggerCollectionResponseFromDiscriminatorValue} from '../../../../models/createPrintTaskTriggerCollectionResponseFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from '../../../../models/createPrintTaskTriggerFromDiscriminatorValue';
import {deserializeIntoPrintTaskTrigger} from '../../../../models/deserializeIntoPrintTaskTrigger';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {PrintTaskTrigger} from '../../../../models/printTaskTrigger';
import {serializePrintTaskTrigger} from '../../../../models/serializePrintTaskTrigger';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintTaskTriggerItemRequestBuilder} from './item/printTaskTriggerItemRequestBuilder';
import {TaskTriggersRequestBuilderGetRequestConfiguration} from './taskTriggersRequestBuilderGetRequestConfiguration';
import {TaskTriggersRequestBuilderPostRequestConfiguration} from './taskTriggersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskTriggers property of the microsoft.graph.printer entity.
 */
export class TaskTriggersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskTriggers property of the microsoft.graph.printer entity.
     * @param printTaskTriggerId Unique identifier of the item
     * @returns a PrintTaskTriggerItemRequestBuilder
     */
    public byPrintTaskTriggerId(printTaskTriggerId: string) : PrintTaskTriggerItemRequestBuilder {
        if(!printTaskTriggerId) throw new Error("printTaskTriggerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskTrigger%2Did"] = printTaskTriggerId
        return new PrintTaskTriggerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TaskTriggersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/taskTriggers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of task triggers associated with the printer. The list of task triggers defines which tasks will be triggered as a result of events that occur during printing. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintTaskTriggerCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/printer-list-tasktriggers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TaskTriggersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintTaskTriggerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PrintTaskTriggerCollectionResponse>(requestInfo, createPrintTaskTriggerCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new task trigger on the specified printer. Currently, only **one** task trigger can be specified per printer, but this limit might be removed in the future. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintTaskTrigger
     * @see {@link https://docs.microsoft.com/graph/api/printer-post-tasktriggers?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PrintTaskTrigger | undefined, requestConfiguration?: TaskTriggersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintTaskTrigger | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PrintTaskTrigger>(requestInfo, createPrintTaskTriggerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of task triggers associated with the printer. The list of task triggers defines which tasks will be triggered as a result of events that occur during printing. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskTriggersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new task trigger on the specified printer. Currently, only **one** task trigger can be specified per printer, but this limit might be removed in the future. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintTaskTrigger | undefined, requestConfiguration?: TaskTriggersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrintTaskTrigger);
        return requestInfo;
    };
}
