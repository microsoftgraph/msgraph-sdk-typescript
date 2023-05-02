import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {createRemoveGroupResponseFromDiscriminatorValue} from './createRemoveGroupResponseFromDiscriminatorValue';
import {deserializeIntoRemoveGroupPostRequestBody} from './deserializeIntoRemoveGroupPostRequestBody';
import {deserializeIntoRemoveGroupResponse} from './deserializeIntoRemoveGroupResponse';
import {RemoveGroupPostRequestBody} from './removeGroupPostRequestBody';
import {RemoveGroupRequestBuilderPostRequestConfiguration} from './removeGroupRequestBuilderPostRequestConfiguration';
import {RemoveGroupResponse} from './removeGroupResponse';
import {serializeRemoveGroupPostRequestBody} from './serializeRemoveGroupPostRequestBody';
import {serializeRemoveGroupResponse} from './serializeRemoveGroupResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/groupLifecyclePolicies/{groupLifecyclePolicy%2Did}/removeGroup");
    };
    /**
     * Invoke action removeGroup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RemoveGroupResponse
     */
    public post(body: RemoveGroupPostRequestBody | undefined, requestConfiguration?: RemoveGroupRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RemoveGroupResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RemoveGroupResponse>(requestInfo, createRemoveGroupResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action removeGroup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RemoveGroupPostRequestBody | undefined, requestConfiguration?: RemoveGroupRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRemoveGroupPostRequestBody);
        return requestInfo;
    };
}
