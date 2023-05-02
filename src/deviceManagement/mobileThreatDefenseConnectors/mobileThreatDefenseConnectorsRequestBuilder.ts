import {MobileThreatDefenseConnectorCollectionResponse} from '../../models/';
import {createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue} from '../../models/createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue';
import {createMobileThreatDefenseConnectorFromDiscriminatorValue} from '../../models/createMobileThreatDefenseConnectorFromDiscriminatorValue';
import {deserializeIntoMobileThreatDefenseConnector} from '../../models/deserializeIntoMobileThreatDefenseConnector';
import {MobileThreatDefenseConnector} from '../../models/mobileThreatDefenseConnector';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeMobileThreatDefenseConnector} from '../../models/serializeMobileThreatDefenseConnector';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MobileThreatDefenseConnectorItemRequestBuilder} from './item/mobileThreatDefenseConnectorItemRequestBuilder';
import {MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration} from './mobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration';
import {MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration} from './mobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
 */
export class MobileThreatDefenseConnectorsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
     * @param mobileThreatDefenseConnectorId Unique identifier of the item
     * @returns a MobileThreatDefenseConnectorItemRequestBuilder
     */
    public byMobileThreatDefenseConnectorId(mobileThreatDefenseConnectorId: string) : MobileThreatDefenseConnectorItemRequestBuilder {
        if(!mobileThreatDefenseConnectorId) throw new Error("mobileThreatDefenseConnectorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileThreatDefenseConnector%2Did"] = mobileThreatDefenseConnectorId
        return new MobileThreatDefenseConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MobileThreatDefenseConnectorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileThreatDefenseConnectors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileThreatDefenseConnectorCollectionResponse
     */
    public get(requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileThreatDefenseConnectorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<MobileThreatDefenseConnectorCollectionResponse>(requestInfo, createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileThreatDefenseConnector
     */
    public post(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileThreatDefenseConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<MobileThreatDefenseConnector>(requestInfo, createMobileThreatDefenseConnectorFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileThreatDefenseConnector);
        return requestInfo;
    };
}
