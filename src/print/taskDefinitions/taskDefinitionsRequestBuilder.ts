import { type PrintTaskDefinitionCollectionResponse } from '../../models/';
import { createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue } from '../../models/createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue';
import { createPrintTaskDefinitionFromDiscriminatorValue } from '../../models/createPrintTaskDefinitionFromDiscriminatorValue';
import { deserializeIntoPrintTaskDefinition } from '../../models/deserializeIntoPrintTaskDefinition';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type PrintTaskDefinition } from '../../models/printTaskDefinition';
import { serializePrintTaskDefinition } from '../../models/serializePrintTaskDefinition';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PrintTaskDefinitionItemRequestBuilder } from './item/printTaskDefinitionItemRequestBuilder';
import { type TaskDefinitionsRequestBuilderGetRequestConfiguration } from './taskDefinitionsRequestBuilderGetRequestConfiguration';
import { type TaskDefinitionsRequestBuilderPostRequestConfiguration } from './taskDefinitionsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
 */
export class TaskDefinitionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
     * @param printTaskDefinitionId The unique identifier of printTaskDefinition
     * @returns a PrintTaskDefinitionItemRequestBuilder
     */
    public byPrintTaskDefinitionId(printTaskDefinitionId: string) : PrintTaskDefinitionItemRequestBuilder {
        if(!printTaskDefinitionId) throw new Error("printTaskDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskDefinition%2Did"] = printTaskDefinitionId
        return new PrintTaskDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TaskDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/taskDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of task definitions that the requesting app defined in the tenant. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/print-list-taskdefinitions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TaskDefinitionsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintTaskDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTaskDefinitionCollectionResponse>(requestInfo, createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskDefinition
     * @see {@link https://learn.microsoft.com/graph/api/print-post-taskdefinitions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PrintTaskDefinition, requestConfiguration?: TaskDefinitionsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintTaskDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTaskDefinition>(requestInfo, createPrintTaskDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of task definitions that the requesting app defined in the tenant. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintTaskDefinition, requestConfiguration?: TaskDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintTaskDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a taskDefinitionsRequestBuilder
     */
    public withUrl(rawUrl: string) : TaskDefinitionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TaskDefinitionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
