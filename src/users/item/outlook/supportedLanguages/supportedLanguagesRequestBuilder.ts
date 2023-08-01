import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createSupportedLanguagesResponseFromDiscriminatorValue} from './createSupportedLanguagesResponseFromDiscriminatorValue';
import {SupportedLanguagesResponse} from './index';
import {SupportedLanguagesRequestBuilderGetRequestConfiguration} from './supportedLanguagesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the supportedLanguages method.
 */
export class SupportedLanguagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SupportedLanguagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/outlook/supportedLanguages(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by getting the user's mailbox settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SupportedLanguagesResponse
     * @see {@link https://learn.microsoft.com/graph/api/outlookuser-supportedlanguages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SupportedLanguagesRequestBuilderGetRequestConfiguration | undefined) : Promise<SupportedLanguagesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SupportedLanguagesResponse>(requestInfo, createSupportedLanguagesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by getting the user's mailbox settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SupportedLanguagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
