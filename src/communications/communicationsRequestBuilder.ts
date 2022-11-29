import {CloudCommunications} from '../models/';
import {createCloudCommunicationsFromDiscriminatorValue} from '../models/createCloudCommunicationsFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CallRecordsRequestBuilder} from './callRecords/callRecordsRequestBuilder';
import {CallRecordItemRequestBuilder} from './callRecords/item/callRecordItemRequestBuilder';
import {CallsRequestBuilder} from './calls/callsRequestBuilder';
import {CallItemRequestBuilder} from './calls/item/callItemRequestBuilder';
import {CommunicationsRequestBuilderGetRequestConfiguration} from './communicationsRequestBuilderGetRequestConfiguration';
import {CommunicationsRequestBuilderPatchRequestConfiguration} from './communicationsRequestBuilderPatchRequestConfiguration';
import {GetPresencesByUserIdRequestBuilder} from './getPresencesByUserId/getPresencesByUserIdRequestBuilder';
import {OnlineMeetingItemRequestBuilder} from './onlineMeetings/item/onlineMeetingItemRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {PresenceItemRequestBuilder} from './presences/item/presenceItemRequestBuilder';
import {PresencesRequestBuilder} from './presences/presencesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class CommunicationsRequestBuilder {
    /** Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity. */
    public get callRecords(): CallRecordsRequestBuilder {
        return new CallRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity. */
    public get calls(): CallsRequestBuilder {
        return new CallsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getPresencesByUserId method. */
    public get getPresencesByUserId(): GetPresencesByUserIdRequestBuilder {
        return new GetPresencesByUserIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity. */
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity. */
    public get presences(): PresencesRequestBuilder {
        return new PresencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
     * @param id Unique identifier of the item
     * @returns a CallRecordItemRequestBuilder
     */
    public callRecordsById(id: string) : CallRecordItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["callRecord%2Did"] = id
        return new CallRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
     * @param id Unique identifier of the item
     * @returns a CallItemRequestBuilder
     */
    public callsById(id: string) : CallItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["call%2Did"] = id
        return new CallItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CommunicationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CommunicationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: CloudCommunications | undefined, requestConfiguration?: CommunicationsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudCommunications
     */
    public get(requestConfiguration?: CommunicationsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CloudCommunications | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CloudCommunications>(requestInfo, createCloudCommunicationsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
     * @param id Unique identifier of the item
     * @returns a OnlineMeetingItemRequestBuilder
     */
    public onlineMeetingsById(id: string) : OnlineMeetingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting%2Did"] = id
        return new OnlineMeetingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudCommunications
     */
    public patch(body: CloudCommunications | undefined, requestConfiguration?: CommunicationsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CloudCommunications | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CloudCommunications>(requestInfo, createCloudCommunicationsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
     * @param id Unique identifier of the item
     * @returns a PresenceItemRequestBuilder
     */
    public presencesById(id: string) : PresenceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["presence%2Did"] = id
        return new PresenceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
