import {CallRecord} from '../../../models/callRecords/callRecord';
import {createCallRecordFromDiscriminatorValue} from '../../../models/callRecords/createCallRecordFromDiscriminatorValue';
import {deserializeIntoCallRecord} from '../../../models/callRecords/deserializeIntoCallRecord';
import {serializeCallRecord} from '../../../models/callRecords/serializeCallRecord';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CallRecordItemRequestBuilderDeleteRequestConfiguration} from './callRecordItemRequestBuilderDeleteRequestConfiguration';
import {CallRecordItemRequestBuilderGetRequestConfiguration} from './callRecordItemRequestBuilderGetRequestConfiguration';
import {CallRecordItemRequestBuilderPatchRequestConfiguration} from './callRecordItemRequestBuilderPatchRequestConfiguration';
import {SessionsRequestBuilder} from './sessions/sessionsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
 */
export class CallRecordItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.callRecords.callRecord entity.
     */
    public get sessions(): SessionsRequestBuilder {
        return new SessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CallRecordItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/callRecords/{callRecord%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property callRecords for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CallRecordItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a callRecord object. There are two ways to get the **id** of a **callRecord**:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallRecord
     * @see {@link https://docs.microsoft.com/graph/api/callrecords-callrecord-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CallRecordItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CallRecord | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CallRecord>(requestInfo, createCallRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property callRecords in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallRecord
     */
    public patch(body: CallRecord | undefined, requestConfiguration?: CallRecordItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CallRecord | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CallRecord>(requestInfo, createCallRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property callRecords for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CallRecordItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a callRecord object. There are two ways to get the **id** of a **callRecord**:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CallRecordItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property callRecords in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CallRecord | undefined, requestConfiguration?: CallRecordItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCallRecord);
        return requestInfo;
    };
}
