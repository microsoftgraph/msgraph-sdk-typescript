import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createPromoteResponseFromDiscriminatorValue } from './createPromoteResponseFromDiscriminatorValue';
import { type PromoteResponse } from './index';
import { type PromoteRequestBuilderPostRequestConfiguration } from './promoteRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the promote method.
 */
export class PromoteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PromoteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}/promote");
    };
    /**
     * Promote a verified subdomain to the root domain. A verified domain has its isVerified property set to true.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PromoteResponse
     * @see {@link https://learn.microsoft.com/graph/api/domain-promote?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: PromoteRequestBuilderPostRequestConfiguration | undefined) : Promise<PromoteResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PromoteResponse>(requestInfo, createPromoteResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Promote a verified subdomain to the root domain. A verified domain has its isVerified property set to true.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: PromoteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a promoteRequestBuilder
     */
    public withUrl(rawUrl: string) : PromoteRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PromoteRequestBuilder(rawUrl, this.requestAdapter);
    };
}
