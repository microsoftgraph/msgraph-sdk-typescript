import { createWorkbookSessionInfoFromDiscriminatorValue } from '../../../../../../models/createWorkbookSessionInfoFromDiscriminatorValue';
import { deserializeIntoWorkbookSessionInfo } from '../../../../../../models/deserializeIntoWorkbookSessionInfo';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookSessionInfo } from '../../../../../../models/serializeWorkbookSessionInfo';
import { type WorkbookSessionInfo } from '../../../../../../models/workbookSessionInfo';
import { type CreateSessionPostRequestBody } from './createSessionPostRequestBody';
import { type CreateSessionRequestBuilderPostRequestConfiguration } from './createSessionRequestBuilderPostRequestConfiguration';
import { deserializeIntoCreateSessionPostRequestBody } from './deserializeIntoCreateSessionPostRequestBody';
import { serializeCreateSessionPostRequestBody } from './serializeCreateSessionPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createSession method.
 */
export class CreateSessionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateSessionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/createSession");
    };
    /**
     * Create a new workbook session.  Excel APIs can be called in one of two modes:  To represent the session in the API, use the workbook-session-id: {session-id} header.  In some cases, creating a new session requires an indeterminate time to complete. Microsoft Graph also provides a long running operations pattern. This pattern provides a way to poll for creation status updates, without waiting for the creation to complete. The following are the steps:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookSessionInfo
     * @see {@link https://learn.microsoft.com/graph/api/workbook-createsession?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateSessionPostRequestBody, requestConfiguration?: CreateSessionRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookSessionInfo | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookSessionInfo>(requestInfo, createWorkbookSessionInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new workbook session.  Excel APIs can be called in one of two modes:  To represent the session in the API, use the workbook-session-id: {session-id} header.  In some cases, creating a new session requires an indeterminate time to complete. Microsoft Graph also provides a long running operations pattern. This pattern provides a way to poll for creation status updates, without waiting for the creation to complete. The following are the steps:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateSessionPostRequestBody, requestConfiguration?: CreateSessionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreateSessionPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a createSessionRequestBuilder
     */
    public withUrl(rawUrl: string) : CreateSessionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CreateSessionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
