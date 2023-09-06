import { type AttackSimulationRoot } from '../../models/attackSimulationRoot';
import { createAttackSimulationRootFromDiscriminatorValue } from '../../models/createAttackSimulationRootFromDiscriminatorValue';
import { deserializeIntoAttackSimulationRoot } from '../../models/deserializeIntoAttackSimulationRoot';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeAttackSimulationRoot } from '../../models/serializeAttackSimulationRoot';
import { type AttackSimulationRequestBuilderDeleteRequestConfiguration } from './attackSimulationRequestBuilderDeleteRequestConfiguration';
import { type AttackSimulationRequestBuilderGetRequestConfiguration } from './attackSimulationRequestBuilderGetRequestConfiguration';
import { type AttackSimulationRequestBuilderPatchRequestConfiguration } from './attackSimulationRequestBuilderPatchRequestConfiguration';
import { SimulationAutomationsRequestBuilder } from './simulationAutomations/simulationAutomationsRequestBuilder';
import { SimulationsRequestBuilder } from './simulations/simulationsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attackSimulation property of the microsoft.graph.security entity.
 */
export class AttackSimulationRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the simulationAutomations property of the microsoft.graph.attackSimulationRoot entity.
     */
    public get simulationAutomations(): SimulationAutomationsRequestBuilder {
        return new SimulationAutomationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the simulations property of the microsoft.graph.attackSimulationRoot entity.
     */
    public get simulations(): SimulationsRequestBuilder {
        return new SimulationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AttackSimulationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation{?%24select,%24expand}");
    };
    /**
     * Delete navigation property attackSimulation for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AttackSimulationRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get attackSimulation from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttackSimulationRoot
     */
    public get(requestConfiguration?: AttackSimulationRequestBuilderGetRequestConfiguration | undefined) : Promise<AttackSimulationRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttackSimulationRoot>(requestInfo, createAttackSimulationRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property attackSimulation in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttackSimulationRoot
     */
    public patch(body: AttackSimulationRoot, requestConfiguration?: AttackSimulationRequestBuilderPatchRequestConfiguration | undefined) : Promise<AttackSimulationRoot | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttackSimulationRoot>(requestInfo, createAttackSimulationRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property attackSimulation for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AttackSimulationRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get attackSimulation from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttackSimulationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property attackSimulation in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AttackSimulationRoot, requestConfiguration?: AttackSimulationRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttackSimulationRoot);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a attackSimulationRequestBuilder
     */
    public withUrl(rawUrl: string) : AttackSimulationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AttackSimulationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
