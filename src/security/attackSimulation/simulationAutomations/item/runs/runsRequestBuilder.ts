import { type SimulationAutomationRunCollectionResponse } from '../../../../../models/';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createSimulationAutomationRunFromDiscriminatorValue, deserializeIntoSimulationAutomationRun, serializeSimulationAutomationRun, type SimulationAutomationRun } from '../../../../../models/simulationAutomationRun';
import { createSimulationAutomationRunCollectionResponseFromDiscriminatorValue } from '../../../../../models/simulationAutomationRunCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SimulationAutomationRunItemRequestBuilder } from './item/simulationAutomationRunItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface RunsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface RunsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: RunsRequestBuilderGetQueryParameters;
}
export interface RunsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the runs property of the microsoft.graph.simulationAutomation entity.
 */
export class RunsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the runs property of the microsoft.graph.simulationAutomation entity.
     * @param simulationAutomationRunId The unique identifier of simulationAutomationRun
     * @returns a SimulationAutomationRunItemRequestBuilder
     */
    public bySimulationAutomationRunId(simulationAutomationRunId: string) : SimulationAutomationRunItemRequestBuilder {
        if(!simulationAutomationRunId) throw new Error("simulationAutomationRunId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["simulationAutomationRun%2Did"] = simulationAutomationRunId
        return new SimulationAutomationRunItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RunsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation/simulationAutomations/{simulationAutomation%2Did}/runs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the attack simulation automation runs for a tenant. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomationRunCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/simulationautomation-list-runs?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RunsRequestBuilderGetRequestConfiguration | undefined) : Promise<SimulationAutomationRunCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomationRunCollectionResponse>(requestInfo, createSimulationAutomationRunCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to runs for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomationRun
     */
    public post(body: SimulationAutomationRun, requestConfiguration?: RunsRequestBuilderPostRequestConfiguration | undefined) : Promise<SimulationAutomationRun | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomationRun>(requestInfo, createSimulationAutomationRunFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the attack simulation automation runs for a tenant. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RunsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to runs for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SimulationAutomationRun, requestConfiguration?: RunsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSimulationAutomationRun);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a runsRequestBuilder
     */
    public withUrl(rawUrl: string) : RunsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RunsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
