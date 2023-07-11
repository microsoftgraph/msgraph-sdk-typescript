import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {RetentionEventTypeCollectionResponse} from '../../../models/security/';
import {createRetentionEventTypeCollectionResponseFromDiscriminatorValue} from '../../../models/security/createRetentionEventTypeCollectionResponseFromDiscriminatorValue';
import {createRetentionEventTypeFromDiscriminatorValue} from '../../../models/security/createRetentionEventTypeFromDiscriminatorValue';
import {deserializeIntoRetentionEventType} from '../../../models/security/deserializeIntoRetentionEventType';
import {RetentionEventType} from '../../../models/security/retentionEventType';
import {serializeRetentionEventType} from '../../../models/security/serializeRetentionEventType';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RetentionEventTypeItemRequestBuilder} from './item/retentionEventTypeItemRequestBuilder';
import {RetentionEventTypesRequestBuilderGetRequestConfiguration} from './retentionEventTypesRequestBuilderGetRequestConfiguration';
import {RetentionEventTypesRequestBuilderPostRequestConfiguration} from './retentionEventTypesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the retentionEventTypes property of the microsoft.graph.security.triggerTypesRoot entity.
 */
export class RetentionEventTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the retentionEventTypes property of the microsoft.graph.security.triggerTypesRoot entity.
     * @param retentionEventTypeId Unique identifier of the item
     * @returns a RetentionEventTypeItemRequestBuilder
     */
    public byRetentionEventTypeId(retentionEventTypeId: string) : RetentionEventTypeItemRequestBuilder {
        if(!retentionEventTypeId) throw new Error("retentionEventTypeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["retentionEventType%2Did"] = retentionEventTypeId
        return new RetentionEventTypeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RetentionEventTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggerTypes/retentionEventTypes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the retentionEventType objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventTypeCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/security-retentioneventtype-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RetentionEventTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<RetentionEventTypeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEventTypeCollectionResponse>(requestInfo, createRetentionEventTypeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new retentionEventType object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventType
     * @see {@link https://docs.microsoft.com/graph/api/security-retentioneventtype-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RetentionEventType | undefined, requestConfiguration?: RetentionEventTypesRequestBuilderPostRequestConfiguration | undefined) : Promise<RetentionEventType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEventType>(requestInfo, createRetentionEventTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the retentionEventType objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RetentionEventTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new retentionEventType object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RetentionEventType | undefined, requestConfiguration?: RetentionEventTypesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRetentionEventType);
        return requestInfo;
    };
}
