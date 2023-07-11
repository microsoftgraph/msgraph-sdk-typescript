import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createTranslateExchangeIdsResponseFromDiscriminatorValue} from './createTranslateExchangeIdsResponseFromDiscriminatorValue';
import {deserializeIntoTranslateExchangeIdsPostRequestBody} from './deserializeIntoTranslateExchangeIdsPostRequestBody';
import {deserializeIntoTranslateExchangeIdsResponse} from './deserializeIntoTranslateExchangeIdsResponse';
import {serializeTranslateExchangeIdsPostRequestBody} from './serializeTranslateExchangeIdsPostRequestBody';
import {serializeTranslateExchangeIdsResponse} from './serializeTranslateExchangeIdsResponse';
import {TranslateExchangeIdsPostRequestBody} from './translateExchangeIdsPostRequestBody';
import {TranslateExchangeIdsRequestBuilderPostRequestConfiguration} from './translateExchangeIdsRequestBuilderPostRequestConfiguration';
import {TranslateExchangeIdsResponse} from './translateExchangeIdsResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the translateExchangeIds method.
 */
export class TranslateExchangeIdsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TranslateExchangeIdsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/translateExchangeIds");
    };
    /**
     * Translate identifiers of Outlook-related resources between formats.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TranslateExchangeIdsResponse
     * @see {@link https://docs.microsoft.com/graph/api/user-translateexchangeids?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TranslateExchangeIdsPostRequestBody | undefined, requestConfiguration?: TranslateExchangeIdsRequestBuilderPostRequestConfiguration | undefined) : Promise<TranslateExchangeIdsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TranslateExchangeIdsResponse>(requestInfo, createTranslateExchangeIdsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Translate identifiers of Outlook-related resources between formats.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TranslateExchangeIdsPostRequestBody | undefined, requestConfiguration?: TranslateExchangeIdsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTranslateExchangeIdsPostRequestBody);
        return requestInfo;
    };
}
