import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createRetentionEventTypeFromDiscriminatorValue} from '../../../../models/security/createRetentionEventTypeFromDiscriminatorValue';
import {deserializeIntoRetentionEventType} from '../../../../models/security/deserializeIntoRetentionEventType';
import type {RetentionEventType} from '../../../../models/security/retentionEventType';
import {serializeRetentionEventType} from '../../../../models/security/serializeRetentionEventType';
import {RetentionEventTypeItemRequestBuilderDeleteRequestConfiguration} from './retentionEventTypeItemRequestBuilderDeleteRequestConfiguration';
import {RetentionEventTypeItemRequestBuilderGetRequestConfiguration} from './retentionEventTypeItemRequestBuilderGetRequestConfiguration';
import {RetentionEventTypeItemRequestBuilderPatchRequestConfiguration} from './retentionEventTypeItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the retentionEventTypes property of the microsoft.graph.security.triggerTypesRoot entity.
 */
export class RetentionEventTypeItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RetentionEventTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggerTypes/retentionEventTypes/{retentionEventType%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a retentionEventType object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-retentioneventtype-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: RetentionEventTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a retentionEventType object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventType
     * @see {@link https://learn.microsoft.com/graph/api/security-retentioneventtype-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RetentionEventTypeItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RetentionEventType | undefined> {
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
     * Update the navigation property retentionEventTypes in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RetentionEventType
     */
    public patch(body: RetentionEventType, requestConfiguration?: RetentionEventTypeItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RetentionEventType | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RetentionEventType>(requestInfo, createRetentionEventTypeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a retentionEventType object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RetentionEventTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a retentionEventType object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RetentionEventTypeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property retentionEventTypes in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RetentionEventType, requestConfiguration?: RetentionEventTypeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRetentionEventType);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RetentionEventTypeItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RetentionEventTypeItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RetentionEventTypeItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
