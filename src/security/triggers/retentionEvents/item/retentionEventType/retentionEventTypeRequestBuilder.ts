import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { type RetentionEventType } from '../../../../../models/security/';
import { createRetentionEventTypeFromDiscriminatorValue } from '../../../../../models/security/retentionEventType';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface RetentionEventTypeRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface RetentionEventTypeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RetentionEventTypeRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the retentionEventType property of the microsoft.graph.security.retentionEvent entity.
 */
export class RetentionEventTypeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RetentionEventTypeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggers/retentionEvents/{retentionEvent%2Did}/retentionEventType{?%24select,%24expand}");
    };
    /**
     * Specifies the event that will start the retention period for labels that use this event type when an event is created.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventType
     */
    public get(requestConfiguration?: RetentionEventTypeRequestBuilderGetRequestConfiguration | undefined) : Promise<RetentionEventType | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEventType>(requestInfo, createRetentionEventTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Specifies the event that will start the retention period for labels that use this event type when an event is created.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RetentionEventTypeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a retentionEventTypeRequestBuilder
     */
    public withUrl(rawUrl: string) : RetentionEventTypeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RetentionEventTypeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
