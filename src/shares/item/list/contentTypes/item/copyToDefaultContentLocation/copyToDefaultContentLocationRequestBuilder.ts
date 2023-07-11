import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {CopyToDefaultContentLocationPostRequestBody} from './copyToDefaultContentLocationPostRequestBody';
import {CopyToDefaultContentLocationRequestBuilderPostRequestConfiguration} from './copyToDefaultContentLocationRequestBuilderPostRequestConfiguration';
import {deserializeIntoCopyToDefaultContentLocationPostRequestBody} from './deserializeIntoCopyToDefaultContentLocationPostRequestBody';
import {serializeCopyToDefaultContentLocationPostRequestBody} from './serializeCopyToDefaultContentLocationPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the copyToDefaultContentLocation method.
 */
export class CopyToDefaultContentLocationRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CopyToDefaultContentLocationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/contentTypes/{contentType%2Did}/copyToDefaultContentLocation");
    };
    /**
     * Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/contenttype-copytodefaultcontentlocation?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CopyToDefaultContentLocationPostRequestBody | undefined, requestConfiguration?: CopyToDefaultContentLocationRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CopyToDefaultContentLocationPostRequestBody | undefined, requestConfiguration?: CopyToDefaultContentLocationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCopyToDefaultContentLocationPostRequestBody);
        return requestInfo;
    };
}
