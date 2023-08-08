import {SimulationAutomationCollectionResponse} from '../../../models/';
import {createSimulationAutomationCollectionResponseFromDiscriminatorValue} from '../../../models/createSimulationAutomationCollectionResponseFromDiscriminatorValue';
import {createSimulationAutomationFromDiscriminatorValue} from '../../../models/createSimulationAutomationFromDiscriminatorValue';
import {deserializeIntoSimulationAutomation} from '../../../models/deserializeIntoSimulationAutomation';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeSimulationAutomation} from '../../../models/serializeSimulationAutomation';
import type {SimulationAutomation} from '../../../models/simulationAutomation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SimulationAutomationItemRequestBuilder} from './item/simulationAutomationItemRequestBuilder';
import {SimulationAutomationsRequestBuilderGetRequestConfiguration} from './simulationAutomationsRequestBuilderGetRequestConfiguration';
import {SimulationAutomationsRequestBuilderPostRequestConfiguration} from './simulationAutomationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the simulationAutomations property of the microsoft.graph.attackSimulationRoot entity.
 */
export class SimulationAutomationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the simulationAutomations property of the microsoft.graph.attackSimulationRoot entity.
     * @param simulationAutomationId Unique identifier of the item
     * @returns a SimulationAutomationItemRequestBuilder
     */
    public bySimulationAutomationId(simulationAutomationId: string) : SimulationAutomationItemRequestBuilder {
        if(!simulationAutomationId) throw new Error("simulationAutomationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["simulationAutomation%2Did"] = simulationAutomationId
        return new SimulationAutomationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SimulationAutomationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation/simulationAutomations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of attack simulation automations for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/attacksimulationroot-list-simulationautomations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SimulationAutomationsRequestBuilderGetRequestConfiguration | undefined) : Promise<SimulationAutomationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomationCollectionResponse>(requestInfo, createSimulationAutomationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to simulationAutomations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SimulationAutomation
     */
    public post(body: SimulationAutomation, requestConfiguration?: SimulationAutomationsRequestBuilderPostRequestConfiguration | undefined) : Promise<SimulationAutomation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SimulationAutomation>(requestInfo, createSimulationAutomationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of attack simulation automations for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SimulationAutomationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to simulationAutomations for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SimulationAutomation, requestConfiguration?: SimulationAutomationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSimulationAutomation);
        return requestInfo;
    };
}
