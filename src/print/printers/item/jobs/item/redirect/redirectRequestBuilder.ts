import {createPrintJobFromDiscriminatorValue} from '../../../../../../models/createPrintJobFromDiscriminatorValue';
import {deserializeIntoPrintJob} from '../../../../../../models/deserializeIntoPrintJob';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {PrintJob} from '../../../../../../models/printJob';
import {serializePrintJob} from '../../../../../../models/serializePrintJob';
import {deserializeIntoRedirectPostRequestBody} from './deserializeIntoRedirectPostRequestBody';
import type {RedirectPostRequestBody} from './redirectPostRequestBody';
import {RedirectRequestBuilderPostRequestConfiguration} from './redirectRequestBuilderPostRequestConfiguration';
import {serializeRedirectPostRequestBody} from './serializeRedirectPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the redirect method.
 */
export class RedirectRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RedirectRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/redirect");
    };
    /**
     * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJob
     * @see {@link https://learn.microsoft.com/graph/api/printjob-redirect?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RedirectPostRequestBody, requestConfiguration?: RedirectRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintJob | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJob>(requestInfo, createPrintJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RedirectPostRequestBody, requestConfiguration?: RedirectRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRedirectPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a redirectRequestBuilder
     */
    public withUrl(rawUrl: string) : RedirectRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RedirectRequestBuilder(rawUrl, this.requestAdapter);
    };
}
