import {ContentType} from '../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../models/createContentTypeFromDiscriminatorValue';
import {deserializeIntoContentType} from '../../../../models/deserializeIntoContentType';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeContentType} from '../../../../models/serializeContentType';
import {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import {AddCopyFromContentTypeHubRequestBuilderPostRequestConfiguration} from './addCopyFromContentTypeHubRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddCopyFromContentTypeHubPostRequestBody} from './deserializeIntoAddCopyFromContentTypeHubPostRequestBody';
import {serializeAddCopyFromContentTypeHubPostRequestBody} from './serializeAddCopyFromContentTypeHubPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addCopyFromContentTypeHub method.
 */
export class AddCopyFromContentTypeHubRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddCopyFromContentTypeHubRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/contentTypes/addCopyFromContentTypeHub");
    };
    /**
     * Invoke action addCopyFromContentTypeHub
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public post(body: AddCopyFromContentTypeHubPostRequestBody | undefined, requestConfiguration?: AddCopyFromContentTypeHubRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
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
     * Invoke action addCopyFromContentTypeHub
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddCopyFromContentTypeHubPostRequestBody | undefined, requestConfiguration?: AddCopyFromContentTypeHubRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAddCopyFromContentTypeHubPostRequestBody);
        return requestInfo;
    };
}
