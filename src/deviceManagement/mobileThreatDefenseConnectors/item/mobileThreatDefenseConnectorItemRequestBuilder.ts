import {createMobileThreatDefenseConnectorFromDiscriminatorValue} from '../../../models/createMobileThreatDefenseConnectorFromDiscriminatorValue';
import {deserializeIntoMobileThreatDefenseConnector} from '../../../models/deserializeIntoMobileThreatDefenseConnector';
import {MobileThreatDefenseConnector} from '../../../models/mobileThreatDefenseConnector';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeMobileThreatDefenseConnector} from '../../../models/serializeMobileThreatDefenseConnector';
import {MobileThreatDefenseConnectorItemRequestBuilderDeleteRequestConfiguration} from './mobileThreatDefenseConnectorItemRequestBuilderDeleteRequestConfiguration';
import {MobileThreatDefenseConnectorItemRequestBuilderGetRequestConfiguration} from './mobileThreatDefenseConnectorItemRequestBuilderGetRequestConfiguration';
import {MobileThreatDefenseConnectorItemRequestBuilderPatchRequestConfiguration} from './mobileThreatDefenseConnectorItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
 */
export class MobileThreatDefenseConnectorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MobileThreatDefenseConnectorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property mobileThreatDefenseConnectors for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileThreatDefenseConnector
     */
    public get(requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileThreatDefenseConnector | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileThreatDefenseConnector>(requestInfo, createMobileThreatDefenseConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property mobileThreatDefenseConnectors in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileThreatDefenseConnector
     */
    public patch(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MobileThreatDefenseConnector | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileThreatDefenseConnector>(requestInfo, createMobileThreatDefenseConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property mobileThreatDefenseConnectors for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property mobileThreatDefenseConnectors in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MobileThreatDefenseConnector | undefined, requestConfiguration?: MobileThreatDefenseConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileThreatDefenseConnector);
        return requestInfo;
    };
}
