import {CallRecordCollectionResponse} from '../../models/callRecords/';
import {CallRecord} from '../../models/callRecords/callRecord';
import {createCallRecordCollectionResponseFromDiscriminatorValue} from '../../models/callRecords/createCallRecordCollectionResponseFromDiscriminatorValue';
import {createCallRecordFromDiscriminatorValue} from '../../models/callRecords/createCallRecordFromDiscriminatorValue';
import {deserializeIntoCallRecord} from '../../models/callRecords/deserializeIntoCallRecord';
import {serializeCallRecord} from '../../models/callRecords/serializeCallRecord';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {CallRecordsRequestBuilderGetRequestConfiguration} from './callRecordsRequestBuilderGetRequestConfiguration';
import {CallRecordsRequestBuilderPostRequestConfiguration} from './callRecordsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CallRecordItemRequestBuilder} from './item/callRecordItemRequestBuilder';
import {MicrosoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder} from './microsoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTime/microsoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder';
import {MicrosoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder} from './microsoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTime/microsoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
 */
export class CallRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
     * @param callRecordId Unique identifier of the item
     * @returns a CallRecordItemRequestBuilder
     */
    public byCallRecordId(callRecordId: string) : CallRecordItemRequestBuilder {
        if(!callRecordId) throw new Error("callRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["callRecord%2Did"] = callRecordId
        return new CallRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CallRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/callRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a callRecord object. There are two ways to get the **id** of a **callRecord**:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallRecordCollectionResponse
     */
    public get(requestConfiguration?: CallRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<CallRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CallRecordCollectionResponse>(requestInfo, createCallRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the getDirectRoutingCalls method.
     * @param fromDateTime Usage: fromDateTime={fromDateTime}
     * @param toDateTime Usage: toDateTime={toDateTime}
     * @returns a microsoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder
     */
    public microsoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTime(fromDateTime: Date | undefined, toDateTime: Date | undefined) : MicrosoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder {
        if(!fromDateTime) throw new Error("fromDateTime cannot be undefined");
        if(!toDateTime) throw new Error("toDateTime cannot be undefined");
        return new MicrosoftGraphCallRecordsGetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, fromDateTime, toDateTime);
    };
    /**
     * Provides operations to call the getPstnCalls method.
     * @param fromDateTime Usage: fromDateTime={fromDateTime}
     * @param toDateTime Usage: toDateTime={toDateTime}
     * @returns a microsoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder
     */
    public microsoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTime(fromDateTime: Date | undefined, toDateTime: Date | undefined) : MicrosoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder {
        if(!fromDateTime) throw new Error("fromDateTime cannot be undefined");
        if(!toDateTime) throw new Error("toDateTime cannot be undefined");
        return new MicrosoftGraphCallRecordsGetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, fromDateTime, toDateTime);
    };
    /**
     * Create new navigation property to callRecords for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallRecord
     */
    public post(body: CallRecord | undefined, requestConfiguration?: CallRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<CallRecord | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CallRecord>(requestInfo, createCallRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a callRecord object. There are two ways to get the **id** of a **callRecord**:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CallRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to callRecords for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CallRecord | undefined, requestConfiguration?: CallRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCallRecord);
        return requestInfo;
    };
}
