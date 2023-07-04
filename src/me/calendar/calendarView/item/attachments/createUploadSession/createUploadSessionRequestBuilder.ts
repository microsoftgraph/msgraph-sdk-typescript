import {createUploadSessionFromDiscriminatorValue} from '../../../../../../models/createUploadSessionFromDiscriminatorValue';
import {deserializeIntoUploadSession} from '../../../../../../models/deserializeIntoUploadSession';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeUploadSession} from '../../../../../../models/serializeUploadSession';
import {UploadSession} from '../../../../../../models/uploadSession';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {CreateUploadSessionRequestBuilderPostRequestConfiguration} from './createUploadSessionRequestBuilderPostRequestConfiguration';
import {deserializeIntoCreateUploadSessionPostRequestBody} from './deserializeIntoCreateUploadSessionPostRequestBody';
import {serializeCreateUploadSessionPostRequestBody} from './serializeCreateUploadSessionPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createUploadSession method.
 */
export class CreateUploadSessionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateUploadSessionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/calendar/calendarView/{event%2Did}/attachments/createUploadSession");
    };
    /**
     * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to the specified Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UploadSession
     * @see {@link https://docs.microsoft.com/graph/api/attachment-createuploadsession?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateUploadSessionPostRequestBody | undefined, requestConfiguration?: CreateUploadSessionRequestBuilderPostRequestConfiguration | undefined) : Promise<UploadSession | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UploadSession>(requestInfo, createUploadSessionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to the specified Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateUploadSessionPostRequestBody | undefined, requestConfiguration?: CreateUploadSessionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCreateUploadSessionPostRequestBody);
        return requestInfo;
    };
}
