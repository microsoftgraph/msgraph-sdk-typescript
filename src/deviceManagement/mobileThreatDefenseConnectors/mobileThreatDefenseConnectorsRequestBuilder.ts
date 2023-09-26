import { type MobileThreatDefenseConnectorCollectionResponse } from '../../models/';
import { createMobileThreatDefenseConnectorFromDiscriminatorValue, deserializeIntoMobileThreatDefenseConnector, serializeMobileThreatDefenseConnector, type MobileThreatDefenseConnector } from '../../models/mobileThreatDefenseConnector';
import { createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue } from '../../models/mobileThreatDefenseConnectorCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { MobileThreatDefenseConnectorItemRequestBuilder } from './item/mobileThreatDefenseConnectorItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters {
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
export interface MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters;
}
export interface MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
 */
export class MobileThreatDefenseConnectorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
     * @param mobileThreatDefenseConnectorId The unique identifier of mobileThreatDefenseConnector
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
     * List properties and relationships of the mobileThreatDefenseConnector objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileThreatDefenseConnectorCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-mobilethreatdefenseconnector-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileThreatDefenseConnectorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileThreatDefenseConnectorCollectionResponse>(requestInfo, createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new mobileThreatDefenseConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileThreatDefenseConnector
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-mobilethreatdefenseconnector-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MobileThreatDefenseConnector, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileThreatDefenseConnector | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileThreatDefenseConnector>(requestInfo, createMobileThreatDefenseConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the mobileThreatDefenseConnector objects.
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
     * Create a new mobileThreatDefenseConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileThreatDefenseConnector, requestConfiguration?: MobileThreatDefenseConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileThreatDefenseConnector);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a mobileThreatDefenseConnectorsRequestBuilder
     */
    public withUrl(rawUrl: string) : MobileThreatDefenseConnectorsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MobileThreatDefenseConnectorsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
