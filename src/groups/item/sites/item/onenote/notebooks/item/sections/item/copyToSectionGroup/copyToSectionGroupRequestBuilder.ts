import { createOnenoteOperationFromDiscriminatorValue } from '../../../../../../../../../../models/createOnenoteOperationFromDiscriminatorValue';
import { deserializeIntoOnenoteOperation } from '../../../../../../../../../../models/deserializeIntoOnenoteOperation';
import { type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import { type OnenoteOperation } from '../../../../../../../../../../models/onenoteOperation';
import { serializeOnenoteOperation } from '../../../../../../../../../../models/serializeOnenoteOperation';
import { type CopyToSectionGroupPostRequestBody } from './copyToSectionGroupPostRequestBody';
import { type CopyToSectionGroupRequestBuilderPostRequestConfiguration } from './copyToSectionGroupRequestBuilderPostRequestConfiguration';
import { deserializeIntoCopyToSectionGroupPostRequestBody } from './deserializeIntoCopyToSectionGroupPostRequestBody';
import { serializeCopyToSectionGroupPostRequestBody } from './serializeCopyToSectionGroupPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the copyToSectionGroup method.
 */
export class CopyToSectionGroupRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CopyToSectionGroupRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}/sections/{onenoteSection%2Did}/copyToSectionGroup");
    };
    /**
     * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteOperation
     * @see {@link https://learn.microsoft.com/graph/api/section-copytosectiongroup?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CopyToSectionGroupPostRequestBody, requestConfiguration?: CopyToSectionGroupRequestBuilderPostRequestConfiguration | undefined) : Promise<OnenoteOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteOperation>(requestInfo, createOnenoteOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CopyToSectionGroupPostRequestBody, requestConfiguration?: CopyToSectionGroupRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCopyToSectionGroupPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a copyToSectionGroupRequestBuilder
     */
    public withUrl(rawUrl: string) : CopyToSectionGroupRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CopyToSectionGroupRequestBuilder(rawUrl, this.requestAdapter);
    };
}
