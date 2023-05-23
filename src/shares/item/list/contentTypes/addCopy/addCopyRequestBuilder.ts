import {ContentType} from '../../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../../models/createContentTypeFromDiscriminatorValue';
import {deserializeIntoContentType} from '../../../../../models/deserializeIntoContentType';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeContentType} from '../../../../../models/serializeContentType';
import {AddCopyPostRequestBody} from './addCopyPostRequestBody';
import {AddCopyRequestBuilderPostRequestConfiguration} from './addCopyRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddCopyPostRequestBody} from './deserializeIntoAddCopyPostRequestBody';
import {serializeAddCopyPostRequestBody} from './serializeAddCopyPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addCopy method.
 */
export class AddCopyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddCopyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/contentTypes/addCopy");
    };
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     * @see {@link https://docs.microsoft.com/graph/api/contenttype-addcopy?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddCopyPostRequestBody | undefined, requestConfiguration?: AddCopyRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo, createContentTypeFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddCopyPostRequestBody | undefined, requestConfiguration?: AddCopyRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAddCopyPostRequestBody);
        return requestInfo;
    };
}
