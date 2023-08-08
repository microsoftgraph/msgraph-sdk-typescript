import {createPrintTaskFromDiscriminatorValue} from '../../../../../models/createPrintTaskFromDiscriminatorValue';
import {deserializeIntoPrintTask} from '../../../../../models/deserializeIntoPrintTask';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {PrintTask} from '../../../../../models/printTask';
import {serializePrintTask} from '../../../../../models/serializePrintTask';
import {DefinitionRequestBuilder} from './definition/definitionRequestBuilder';
import {PrintTaskItemRequestBuilderDeleteRequestConfiguration} from './printTaskItemRequestBuilderDeleteRequestConfiguration';
import {PrintTaskItemRequestBuilderGetRequestConfiguration} from './printTaskItemRequestBuilderGetRequestConfiguration';
import {PrintTaskItemRequestBuilderPatchRequestConfiguration} from './printTaskItemRequestBuilderPatchRequestConfiguration';
import {TriggerRequestBuilder} from './trigger/triggerRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.printTaskDefinition entity.
 */
export class PrintTaskItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the definition property of the microsoft.graph.printTask entity.
     */
    public get definition(): DefinitionRequestBuilder {
        return new DefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the trigger property of the microsoft.graph.printTask entity.
     */
    public get trigger(): TriggerRequestBuilder {
        return new TriggerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrintTaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/taskDefinitions/{printTaskDefinition%2Did}/tasks/{printTask%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property tasks for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get details about a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTask
     * @see {@link https://learn.microsoft.com/graph/api/printtask-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrintTaskItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintTask | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTask>(requestInfo, createPrintTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTask
     * @see {@link https://learn.microsoft.com/graph/api/printtaskdefinition-update-task?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PrintTask, requestConfiguration?: PrintTaskItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintTask | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTask>(requestInfo, createPrintTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property tasks for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get details about a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintTaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintTask, requestConfiguration?: PrintTaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintTask);
        return requestInfo;
    };
}
