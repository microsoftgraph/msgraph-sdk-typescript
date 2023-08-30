import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createRetentionEventFromDiscriminatorValue} from '../../../../models/security/createRetentionEventFromDiscriminatorValue';
import {deserializeIntoRetentionEvent} from '../../../../models/security/deserializeIntoRetentionEvent';
import type {RetentionEvent} from '../../../../models/security/retentionEvent';
import {serializeRetentionEvent} from '../../../../models/security/serializeRetentionEvent';
import {RetentionEventItemRequestBuilderDeleteRequestConfiguration} from './retentionEventItemRequestBuilderDeleteRequestConfiguration';
import {RetentionEventItemRequestBuilderGetRequestConfiguration} from './retentionEventItemRequestBuilderGetRequestConfiguration';
import {RetentionEventItemRequestBuilderPatchRequestConfiguration} from './retentionEventItemRequestBuilderPatchRequestConfiguration';
import {RetentionEventTypeRequestBuilder} from './retentionEventType/retentionEventTypeRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the retentionEvents property of the microsoft.graph.security.triggersRoot entity.
 */
export class RetentionEventItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the retentionEventType property of the microsoft.graph.security.retentionEvent entity.
     */
    public get retentionEventType(): RetentionEventTypeRequestBuilder {
        return new RetentionEventTypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RetentionEventItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggers/retentionEvents/{retentionEvent%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a retentionEvent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-retentionevent-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: RetentionEventItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a retentionEvent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEvent
     * @see {@link https://learn.microsoft.com/graph/api/security-retentionevent-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RetentionEventItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RetentionEvent | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEvent>(requestInfo, createRetentionEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property retentionEvents in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEvent
     */
    public patch(body: RetentionEvent, requestConfiguration?: RetentionEventItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RetentionEvent | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEvent>(requestInfo, createRetentionEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a retentionEvent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RetentionEventItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a retentionEvent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RetentionEventItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property retentionEvents in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RetentionEvent, requestConfiguration?: RetentionEventItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRetentionEvent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RetentionEventItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RetentionEventItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RetentionEventItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
