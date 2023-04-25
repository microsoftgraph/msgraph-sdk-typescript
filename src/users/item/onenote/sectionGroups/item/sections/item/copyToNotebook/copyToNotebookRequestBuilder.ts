import {OnenoteOperation} from '../../../../../../../../models/';
import {createOnenoteOperationFromDiscriminatorValue} from '../../../../../../../../models/createOnenoteOperationFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CopyToNotebookRequestBuilderPostRequestConfiguration} from './copyToNotebookRequestBuilderPostRequestConfiguration';
import {CopyToNotebookPostRequestBody} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the copyToNotebook method.
 */
export class CopyToNotebookRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CopyToNotebookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onenote/sectionGroups/{sectionGroup%2Did}/sections/{onenoteSection%2Did}/copyToNotebook");
    };
    /**
     * Invoke action copyToNotebook
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenoteOperation
     */
    public post(body: CopyToNotebookPostRequestBody | undefined, requestConfiguration?: CopyToNotebookRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenoteOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OnenoteOperation>(requestInfo, createOnenoteOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action copyToNotebook
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CopyToNotebookPostRequestBody | undefined, requestConfiguration?: CopyToNotebookRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
