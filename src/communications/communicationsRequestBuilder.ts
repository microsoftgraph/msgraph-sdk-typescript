import { createCloudCommunicationsFromDiscriminatorValue, deserializeIntoCloudCommunications, serializeCloudCommunications, type CloudCommunications } from '../models/cloudCommunications';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { CallRecordsRequestBuilder } from './callRecords/callRecordsRequestBuilder';
import { CallsRequestBuilder } from './calls/callsRequestBuilder';
import { GetPresencesByUserIdRequestBuilder } from './getPresencesByUserId/getPresencesByUserIdRequestBuilder';
import { OnlineMeetingsRequestBuilder } from './onlineMeetings/onlineMeetingsRequestBuilder';
import { PresencesRequestBuilder } from './presences/presencesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CommunicationsRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface CommunicationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CommunicationsRequestBuilderGetQueryParameters;
}
export interface CommunicationsRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the cloudCommunications singleton.
 */
export class CommunicationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
     */
    public get callRecords(): CallRecordsRequestBuilder {
        return new CallRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
     */
    public get calls(): CallsRequestBuilder {
        return new CallsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getPresencesByUserId method.
     */
    public get getPresencesByUserId(): GetPresencesByUserIdRequestBuilder {
        return new GetPresencesByUserIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
     */
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
     */
    public get presences(): PresencesRequestBuilder {
        return new PresencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CommunicationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications{?%24select,%24expand}");
    };
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudCommunications
     */
    public get(requestConfiguration?: CommunicationsRequestBuilderGetRequestConfiguration | undefined) : Promise<CloudCommunications | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CloudCommunications>(requestInfo, createCloudCommunicationsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudCommunications
     */
    public patch(body: CloudCommunications, requestConfiguration?: CommunicationsRequestBuilderPatchRequestConfiguration | undefined) : Promise<CloudCommunications | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CloudCommunications>(requestInfo, createCloudCommunicationsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CommunicationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CloudCommunications, requestConfiguration?: CommunicationsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCloudCommunications);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a communicationsRequestBuilder
     */
    public withUrl(rawUrl: string) : CommunicationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CommunicationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
