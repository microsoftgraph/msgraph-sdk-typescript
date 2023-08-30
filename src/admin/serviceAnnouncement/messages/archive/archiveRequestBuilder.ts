import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {ArchivePostRequestBody} from './archivePostRequestBody';
import {ArchiveRequestBuilderPostRequestConfiguration} from './archiveRequestBuilderPostRequestConfiguration';
import type {ArchiveResponse} from './archiveResponse';
import {createArchiveResponseFromDiscriminatorValue} from './createArchiveResponseFromDiscriminatorValue';
import {deserializeIntoArchivePostRequestBody} from './deserializeIntoArchivePostRequestBody';
import {deserializeIntoArchiveResponse} from './deserializeIntoArchiveResponse';
import {serializeArchivePostRequestBody} from './serializeArchivePostRequestBody';
import {serializeArchiveResponse} from './serializeArchiveResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the archive method.
 */
export class ArchiveRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ArchiveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/archive");
    };
    /**
     * Archive a list of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArchiveResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceupdatemessage-archive?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ArchivePostRequestBody, requestConfiguration?: ArchiveRequestBuilderPostRequestConfiguration | undefined) : Promise<ArchiveResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArchiveResponse>(requestInfo, createArchiveResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Archive a list of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ArchivePostRequestBody, requestConfiguration?: ArchiveRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeArchivePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a archiveRequestBuilder
     */
    public withUrl(rawUrl: string) : ArchiveRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ArchiveRequestBuilder(rawUrl, this.requestAdapter);
    };
}
