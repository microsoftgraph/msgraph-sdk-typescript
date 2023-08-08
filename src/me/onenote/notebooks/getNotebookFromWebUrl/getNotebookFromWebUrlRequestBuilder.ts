import type {CopyNotebookModel} from '../../../../models/copyNotebookModel';
import {createCopyNotebookModelFromDiscriminatorValue} from '../../../../models/createCopyNotebookModelFromDiscriminatorValue';
import {deserializeIntoCopyNotebookModel} from '../../../../models/deserializeIntoCopyNotebookModel';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeCopyNotebookModel} from '../../../../models/serializeCopyNotebookModel';
import {deserializeIntoGetNotebookFromWebUrlPostRequestBody} from './deserializeIntoGetNotebookFromWebUrlPostRequestBody';
import type {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration} from './getNotebookFromWebUrlRequestBuilderPostRequestConfiguration';
import {serializeGetNotebookFromWebUrlPostRequestBody} from './serializeGetNotebookFromWebUrlPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/me/onenote/notebooks/getNotebookFromWebUrl");
    };
    /**
     * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CopyNotebookModel
     * @see {@link https://learn.microsoft.com/graph/api/notebook-getnotebookfromweburl?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetNotebookFromWebUrlPostRequestBody, requestConfiguration?: GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration | undefined) : Promise<CopyNotebookModel | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CopyNotebookModel>(requestInfo, createCopyNotebookModelFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetNotebookFromWebUrlPostRequestBody, requestConfiguration?: GetNotebookFromWebUrlRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetNotebookFromWebUrlPostRequestBody);
        return requestInfo;
    };
}
