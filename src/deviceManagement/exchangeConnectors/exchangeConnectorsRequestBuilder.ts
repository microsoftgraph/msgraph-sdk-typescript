import {DeviceManagementExchangeConnectorCollectionResponse} from '../../models/';
import {createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue';
import {createDeviceManagementExchangeConnectorFromDiscriminatorValue} from '../../models/createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import {deserializeIntoDeviceManagementExchangeConnector} from '../../models/deserializeIntoDeviceManagementExchangeConnector';
import {DeviceManagementExchangeConnector} from '../../models/deviceManagementExchangeConnector';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceManagementExchangeConnector} from '../../models/serializeDeviceManagementExchangeConnector';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExchangeConnectorsRequestBuilderGetRequestConfiguration} from './exchangeConnectorsRequestBuilderGetRequestConfiguration';
import {ExchangeConnectorsRequestBuilderPostRequestConfiguration} from './exchangeConnectorsRequestBuilderPostRequestConfiguration';
import {DeviceManagementExchangeConnectorItemRequestBuilder} from './item/deviceManagementExchangeConnectorItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity.
 */
export class ExchangeConnectorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the exchangeConnectors property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementExchangeConnectorId Unique identifier of the item
     * @returns a DeviceManagementExchangeConnectorItemRequestBuilder
     */
    public byDeviceManagementExchangeConnectorId(deviceManagementExchangeConnectorId: string) : DeviceManagementExchangeConnectorItemRequestBuilder {
        if(!deviceManagementExchangeConnectorId) throw new Error("deviceManagementExchangeConnectorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExchangeConnector%2Did"] = deviceManagementExchangeConnectorId
        return new DeviceManagementExchangeConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExchangeConnectorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/exchangeConnectors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceManagementExchangeConnector objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementExchangeConnectorCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-devicemanagementexchangeconnector-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExchangeConnectorsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementExchangeConnectorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceManagementExchangeConnectorCollectionResponse>(requestInfo, createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new deviceManagementExchangeConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementExchangeConnector
     * @see {@link https://docs.microsoft.com/graph/api/intune-onboarding-devicemanagementexchangeconnector-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: ExchangeConnectorsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementExchangeConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceManagementExchangeConnector>(requestInfo, createDeviceManagementExchangeConnectorFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the deviceManagementExchangeConnector objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExchangeConnectorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceManagementExchangeConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceManagementExchangeConnector | undefined, requestConfiguration?: ExchangeConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementExchangeConnector);
        return requestInfo;
    };
}
