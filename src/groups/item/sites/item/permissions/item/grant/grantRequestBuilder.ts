import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { createGrantResponseFromDiscriminatorValue } from './createGrantResponseFromDiscriminatorValue';
import { deserializeIntoGrantPostRequestBody } from './deserializeIntoGrantPostRequestBody';
import { deserializeIntoGrantResponse } from './deserializeIntoGrantResponse';
import { type GrantPostRequestBody } from './grantPostRequestBody';
import { type GrantRequestBuilderPostRequestConfiguration } from './grantRequestBuilderPostRequestConfiguration';
import { type GrantResponse } from './grantResponse';
import { serializeGrantPostRequestBody } from './serializeGrantPostRequestBody';
import { serializeGrantResponse } from './serializeGrantResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the grant method.
 */
export class GrantRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GrantRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/permissions/{permission%2Did}/grant");
    };
    /**
     * Grant users access to a link represented by a [permission][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GrantResponse
     * @see {@link https://learn.microsoft.com/graph/api/permission-grant?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GrantPostRequestBody, requestConfiguration?: GrantRequestBuilderPostRequestConfiguration | undefined) : Promise<GrantResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GrantResponse>(requestInfo, createGrantResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Grant users access to a link represented by a [permission][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GrantPostRequestBody, requestConfiguration?: GrantRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGrantPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a grantRequestBuilder
     */
    public withUrl(rawUrl: string) : GrantRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GrantRequestBuilder(rawUrl, this.requestAdapter);
    };
}
