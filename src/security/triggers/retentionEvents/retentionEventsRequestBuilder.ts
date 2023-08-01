import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {RetentionEventCollectionResponse} from '../../../models/security/';
import {createRetentionEventCollectionResponseFromDiscriminatorValue} from '../../../models/security/createRetentionEventCollectionResponseFromDiscriminatorValue';
import {createRetentionEventFromDiscriminatorValue} from '../../../models/security/createRetentionEventFromDiscriminatorValue';
import {deserializeIntoRetentionEvent} from '../../../models/security/deserializeIntoRetentionEvent';
import type {RetentionEvent} from '../../../models/security/retentionEvent';
import {serializeRetentionEvent} from '../../../models/security/serializeRetentionEvent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RetentionEventItemRequestBuilder} from './item/retentionEventItemRequestBuilder';
import {RetentionEventsRequestBuilderGetRequestConfiguration} from './retentionEventsRequestBuilderGetRequestConfiguration';
import {RetentionEventsRequestBuilderPostRequestConfiguration} from './retentionEventsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the retentionEvents property of the microsoft.graph.security.triggersRoot entity.
 */
export class RetentionEventsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the retentionEvents property of the microsoft.graph.security.triggersRoot entity.
     * @param retentionEventId Unique identifier of the item
     * @returns a RetentionEventItemRequestBuilder
     */
    public byRetentionEventId(retentionEventId: string) : RetentionEventItemRequestBuilder {
        if(!retentionEventId) throw new Error("retentionEventId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["retentionEvent%2Did"] = retentionEventId
        return new RetentionEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RetentionEventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggers/retentionEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the retentionEvent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-retentionevent-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RetentionEventsRequestBuilderGetRequestConfiguration | undefined) : Promise<RetentionEventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEventCollectionResponse>(requestInfo, createRetentionEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new retentionEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEvent
     * @see {@link https://learn.microsoft.com/graph/api/security-retentionevent-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RetentionEvent | undefined, requestConfiguration?: RetentionEventsRequestBuilderPostRequestConfiguration | undefined) : Promise<RetentionEvent | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEvent>(requestInfo, createRetentionEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the retentionEvent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RetentionEventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new retentionEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RetentionEvent | undefined, requestConfiguration?: RetentionEventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRetentionEvent);
        return requestInfo;
    };
}
