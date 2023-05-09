import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createUnarchiveResponseFromDiscriminatorValue} from './createUnarchiveResponseFromDiscriminatorValue';
import {deserializeIntoUnarchivePostRequestBody} from './deserializeIntoUnarchivePostRequestBody';
import {deserializeIntoUnarchiveResponse} from './deserializeIntoUnarchiveResponse';
import {serializeUnarchivePostRequestBody} from './serializeUnarchivePostRequestBody';
import {serializeUnarchiveResponse} from './serializeUnarchiveResponse';
import {UnarchivePostRequestBody} from './unarchivePostRequestBody';
import {UnarchiveRequestBuilderPostRequestConfiguration} from './unarchiveRequestBuilderPostRequestConfiguration';
import {UnarchiveResponse} from './unarchiveResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the unarchive method.
 */
export class UnarchiveRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnarchiveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/unarchive");
    };
    /**
     * Invoke action unarchive
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnarchiveResponse
     */
    public post(body: UnarchivePostRequestBody | undefined, requestConfiguration?: UnarchiveRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnarchiveResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnarchiveResponse>(requestInfo, createUnarchiveResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action unarchive
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnarchivePostRequestBody | undefined, requestConfiguration?: UnarchiveRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnarchivePostRequestBody);
        return requestInfo;
    };
}
