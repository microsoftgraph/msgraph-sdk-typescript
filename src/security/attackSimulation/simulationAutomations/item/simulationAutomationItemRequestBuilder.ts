import {createSimulationAutomationFromDiscriminatorValue} from '../../../../models/createSimulationAutomationFromDiscriminatorValue';
import {deserializeIntoSimulationAutomation} from '../../../../models/deserializeIntoSimulationAutomation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSimulationAutomation} from '../../../../models/serializeSimulationAutomation';
import {SimulationAutomation} from '../../../../models/simulationAutomation';
import {RunsRequestBuilder} from './runs/runsRequestBuilder';
import {SimulationAutomationItemRequestBuilderDeleteRequestConfiguration} from './simulationAutomationItemRequestBuilderDeleteRequestConfiguration';
import {SimulationAutomationItemRequestBuilderGetRequestConfiguration} from './simulationAutomationItemRequestBuilderGetRequestConfiguration';
import {SimulationAutomationItemRequestBuilderPatchRequestConfiguration} from './simulationAutomationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the simulationAutomations property of the microsoft.graph.attackSimulationRoot entity.
 */
export class SimulationAutomationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the runs property of the microsoft.graph.simulationAutomation entity.
     */
    public get runs(): RunsRequestBuilder {
        return new RunsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SimulationAutomationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation/simulationAutomations/{simulationAutomation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property simulationAutomations for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SimulationAutomationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get an attack simulation automation for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomation
     * @see {@link https://docs.microsoft.com/graph/api/simulationautomation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SimulationAutomationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SimulationAutomation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomation>(requestInfo, createSimulationAutomationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property simulationAutomations in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomation
     */
    public patch(body: SimulationAutomation | undefined, requestConfiguration?: SimulationAutomationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SimulationAutomation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomation>(requestInfo, createSimulationAutomationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property simulationAutomations for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SimulationAutomationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get an attack simulation automation for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SimulationAutomationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property simulationAutomations in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SimulationAutomation | undefined, requestConfiguration?: SimulationAutomationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSimulationAutomation);
        return requestInfo;
    };
}
