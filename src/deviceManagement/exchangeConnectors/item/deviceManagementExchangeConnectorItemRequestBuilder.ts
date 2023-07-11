import {createDeviceManagementExchangeConnectorFromDiscriminatorValue} from '../../../models/createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import {deserializeIntoDeviceManagementExchangeConnector} from '../../../models/deserializeIntoDeviceManagementExchangeConnector';
import {DeviceManagementExchangeConnector} from '../../../models/deviceManagementExchangeConnector';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDeviceManagementExchangeConnector} from '../../../models/serializeDeviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorItemRequestBuilderDeleteRequestConfiguration} from './deviceManagementExchangeConnectorItemRequestBuilderDeleteRequestConfiguration';
import {DeviceManagementExchangeConnectorItemRequestBuilderGetRequestConfiguration} from './deviceManagementExchangeConnectorItemRequestBuilderGetRequestConfiguration';
import {DeviceManagementExchangeConnectorItemRequestBuilderPatchRequestConfiguration} from './deviceManagementExchangeConnectorItemRequestBuilderPatchRequestConfiguration';
import {SyncRequestBuilder} from './sync/syncRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceManagementExchangeConnectorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the sync method.
     */
    public get sync(): SyncRequestBuilder {
        return new SyncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceManagementExchangeConnectorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property exchangeConnectors for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The list of Exchange Connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExchangeConnector
     */
    public get(requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementExchangeConnector | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExchangeConnector>(requestInfo, createDeviceManagementExchangeConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property exchangeConnectors in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExchangeConnector
     */
    public patch(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceManagementExchangeConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExchangeConnector>(requestInfo, createDeviceManagementExchangeConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property exchangeConnectors for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of Exchange Connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property exchangeConnectors in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: DeviceManagementExchangeConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementExchangeConnector);
        return requestInfo;
    };
}
