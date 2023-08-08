import {CallCollectionResponse} from '../../models/';
import type {Call} from '../../models/call';
import {createCallCollectionResponseFromDiscriminatorValue} from '../../models/createCallCollectionResponseFromDiscriminatorValue';
import {createCallFromDiscriminatorValue} from '../../models/createCallFromDiscriminatorValue';
import {deserializeIntoCall} from '../../models/deserializeIntoCall';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeCall} from '../../models/serializeCall';
import {CallsRequestBuilderGetRequestConfiguration} from './callsRequestBuilderGetRequestConfiguration';
import {CallsRequestBuilderPostRequestConfiguration} from './callsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CallItemRequestBuilder} from './item/callItemRequestBuilder';
import {LogTeleconferenceDeviceQualityRequestBuilder} from './logTeleconferenceDeviceQuality/logTeleconferenceDeviceQualityRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
 */
export class CallsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the logTeleconferenceDeviceQuality method.
     */
    public get logTeleconferenceDeviceQuality(): LogTeleconferenceDeviceQualityRequestBuilder {
        return new LogTeleconferenceDeviceQualityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
     * @param callId Unique identifier of the item
     * @returns a CallItemRequestBuilder
     */
    public byCallId(callId: string) : CallItemRequestBuilder {
        if(!callId) throw new Error("callId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["call%2Did"] = callId
        return new CallItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CallsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a call object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallCollectionResponse
     */
    public get(requestConfiguration?: CallsRequestBuilderGetRequestConfiguration | undefined) : Promise<CallCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CallCollectionResponse>(requestInfo, createCallCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You will need to register the calling bot and go through the list of permissions needed as mentioned below.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Call
     * @see {@link https://learn.microsoft.com/graph/api/application-post-calls?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Call, requestConfiguration?: CallsRequestBuilderPostRequestConfiguration | undefined) : Promise<Call | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Call>(requestInfo, createCallFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a call object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CallsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You will need to register the calling bot and go through the list of permissions needed as mentioned below.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Call, requestConfiguration?: CallsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCall);
        return requestInfo;
    };
}
