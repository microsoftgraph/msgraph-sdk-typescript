import {createOnenoteOperationFromDiscriminatorValue} from '../../../../../../../../../../../../models/createOnenoteOperationFromDiscriminatorValue';
import {deserializeIntoOnenoteOperation} from '../../../../../../../../../../../../models/deserializeIntoOnenoteOperation';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {OnenoteOperation} from '../../../../../../../../../../../../models/onenoteOperation';
import {serializeOnenoteOperation} from '../../../../../../../../../../../../models/serializeOnenoteOperation';
import {CopyToSectionPostRequestBody} from './copyToSectionPostRequestBody';
import {CopyToSectionRequestBuilderPostRequestConfiguration} from './copyToSectionRequestBuilderPostRequestConfiguration';
import {deserializeIntoCopyToSectionPostRequestBody} from './deserializeIntoCopyToSectionPostRequestBody';
import {serializeCopyToSectionPostRequestBody} from './serializeCopyToSectionPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the copyToSection method.
 */
export class CopyToSectionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CopyToSectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}/sections/{onenoteSection%2Did}/pages/{onenotePage%2Did}/copyToSection");
    };
    /**
     * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenoteOperation
     * @see {@link https://docs.microsoft.com/graph/api/page-copytosection?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CopyToSectionPostRequestBody | undefined, requestConfiguration?: CopyToSectionRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenoteOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<OnenoteOperation>(requestInfo, createOnenoteOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CopyToSectionPostRequestBody | undefined, requestConfiguration?: CopyToSectionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCopyToSectionPostRequestBody);
        return requestInfo;
    };
}
