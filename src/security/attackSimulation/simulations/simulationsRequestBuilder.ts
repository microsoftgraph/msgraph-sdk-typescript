import { type SimulationCollectionResponse } from '../../../models/';
import { createSimulationCollectionResponseFromDiscriminatorValue } from '../../../models/createSimulationCollectionResponseFromDiscriminatorValue';
import { createSimulationFromDiscriminatorValue } from '../../../models/createSimulationFromDiscriminatorValue';
import { deserializeIntoSimulation } from '../../../models/deserializeIntoSimulation';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeSimulation } from '../../../models/serializeSimulation';
import { type Simulation } from '../../../models/simulation';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SimulationItemRequestBuilder } from './item/simulationItemRequestBuilder';
import { type SimulationsRequestBuilderGetRequestConfiguration } from './simulationsRequestBuilderGetRequestConfiguration';
import { type SimulationsRequestBuilderPostRequestConfiguration } from './simulationsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the simulations property of the microsoft.graph.attackSimulationRoot entity.
 */
export class SimulationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the simulations property of the microsoft.graph.attackSimulationRoot entity.
     * @param simulationId The unique identifier of simulation
     * @returns a SimulationItemRequestBuilder
     */
    public bySimulationId(simulationId: string) : SimulationItemRequestBuilder {
        if(!simulationId) throw new Error("simulationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["simulation%2Did"] = simulationId
        return new SimulationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SimulationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation/simulations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of attack simulation campaigns for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/attacksimulationroot-list-simulations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SimulationsRequestBuilderGetRequestConfiguration | undefined) : Promise<SimulationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationCollectionResponse>(requestInfo, createSimulationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to simulations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Simulation
     */
    public post(body: Simulation, requestConfiguration?: SimulationsRequestBuilderPostRequestConfiguration | undefined) : Promise<Simulation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Simulation>(requestInfo, createSimulationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of attack simulation campaigns for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SimulationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to simulations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Simulation, requestConfiguration?: SimulationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSimulation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a simulationsRequestBuilder
     */
    public withUrl(rawUrl: string) : SimulationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SimulationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
