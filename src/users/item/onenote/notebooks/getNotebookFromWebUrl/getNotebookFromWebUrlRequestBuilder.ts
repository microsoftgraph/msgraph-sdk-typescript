import {CopyNotebookModel} from '../../../../../models/copyNotebookModel';
import {createCopyNotebookModelFromDiscriminatorValue} from '../../../../../models/createCopyNotebookModelFromDiscriminatorValue';
import {deserializeIntoCopyNotebookModel} from '../../../../../models/deserializeIntoCopyNotebookModel';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeCopyNotebookModel} from '../../../../../models/serializeCopyNotebookModel';
import {deserializeIntoGetNotebookFromWebUrlPostRequestBody} from './deserializeIntoGetNotebookFromWebUrlPostRequestBody';
import {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration} from './getNotebookFromWebUrlRequestBuilderPostRequestConfiguration';
import {serializeGetNotebookFromWebUrlPostRequestBody} from './serializeGetNotebookFromWebUrlPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getNotebookFromWebUrl method.
 */
export class GetNotebookFromWebUrlRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetNotebookFromWebUrlRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onenote/notebooks/getNotebookFromWebUrl");
    };
    /**
     * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CopyNotebookModel
     * @see {@link https://docs.microsoft.com/graph/api/notebook-getnotebookfromweburl?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetNotebookFromWebUrlPostRequestBody | undefined, requestConfiguration?: GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CopyNotebookModel | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<CopyNotebookModel>(requestInfo, createCopyNotebookModelFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetNotebookFromWebUrlPostRequestBody | undefined, requestConfiguration?: GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetNotebookFromWebUrlPostRequestBody);
        return requestInfo;
    };
}
