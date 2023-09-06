import { type TermsAndConditions } from '../../../../../../models/';
import { createTermsAndConditionsFromDiscriminatorValue } from '../../../../../../models/createTermsAndConditionsFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type TermsAndConditionsRequestBuilderGetRequestConfiguration } from './termsAndConditionsRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the termsAndConditions property of the microsoft.graph.termsAndConditionsAcceptanceStatus entity.
 */
export class TermsAndConditionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TermsAndConditionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/termsAndConditions/{termsAndConditions%2Did}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus%2Did}/termsAndConditions{?%24select,%24expand}");
    };
    /**
     * Navigation link to the terms and conditions that are assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditions
     */
    public get(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined) : Promise<TermsAndConditions | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditions>(requestInfo, createTermsAndConditionsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Navigation link to the terms and conditions that are assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a termsAndConditionsRequestBuilder
     */
    public withUrl(rawUrl: string) : TermsAndConditionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermsAndConditionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
