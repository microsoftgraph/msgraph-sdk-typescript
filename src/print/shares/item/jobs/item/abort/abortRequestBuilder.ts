import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {AbortPostRequestBody} from './abortPostRequestBody';
import {AbortRequestBuilderPostRequestConfiguration} from './abortRequestBuilderPostRequestConfiguration';
import {deserializeIntoAbortPostRequestBody} from './deserializeIntoAbortPostRequestBody';
import {serializeAbortPostRequestBody} from './serializeAbortPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the abort method.
 */
export class AbortRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AbortRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/shares/{printerShare%2Did}/jobs/{printJob%2Did}/abort");
    };
    /**
     * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a `processing` state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/printjob-abort?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AbortPostRequestBody | undefined, requestConfiguration?: AbortRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a `processing` state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AbortPostRequestBody | undefined, requestConfiguration?: AbortRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAbortPostRequestBody);
        return requestInfo;
    };
}
