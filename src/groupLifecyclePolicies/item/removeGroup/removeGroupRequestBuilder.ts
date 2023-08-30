import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createRemoveGroupResponseFromDiscriminatorValue} from './createRemoveGroupResponseFromDiscriminatorValue';
import {deserializeIntoRemoveGroupPostRequestBody} from './deserializeIntoRemoveGroupPostRequestBody';
import {deserializeIntoRemoveGroupResponse} from './deserializeIntoRemoveGroupResponse';
import type {RemoveGroupPostRequestBody} from './removeGroupPostRequestBody';
import {RemoveGroupRequestBuilderPostRequestConfiguration} from './removeGroupRequestBuilderPostRequestConfiguration';
import type {RemoveGroupResponse} from './removeGroupResponse';
import {serializeRemoveGroupPostRequestBody} from './serializeRemoveGroupPostRequestBody';
import {serializeRemoveGroupResponse} from './serializeRemoveGroupResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the removeGroup method.
 */
export class RemoveGroupRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RemoveGroupRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupLifecyclePolicies/{groupLifecyclePolicy%2Did}/removeGroup");
    };
    /**
     * Removes a group from a lifecycle policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RemoveGroupResponse
     * @see {@link https://learn.microsoft.com/graph/api/grouplifecyclepolicy-removegroup?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RemoveGroupPostRequestBody, requestConfiguration?: RemoveGroupRequestBuilderPostRequestConfiguration | undefined) : Promise<RemoveGroupResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RemoveGroupResponse>(requestInfo, createRemoveGroupResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Removes a group from a lifecycle policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RemoveGroupPostRequestBody, requestConfiguration?: RemoveGroupRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRemoveGroupPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a removeGroupRequestBuilder
     */
    public withUrl(rawUrl: string) : RemoveGroupRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RemoveGroupRequestBuilder(rawUrl, this.requestAdapter);
    };
}
