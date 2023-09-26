import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUpdateAllowedCombinationsResultFromDiscriminatorValue, deserializeIntoUpdateAllowedCombinationsResult, serializeUpdateAllowedCombinationsResult, type UpdateAllowedCombinationsResult } from '../../../../models/updateAllowedCombinationsResult';
import { deserializeIntoUpdateAllowedCombinationsPostRequestBody, serializeUpdateAllowedCombinationsPostRequestBody, type UpdateAllowedCombinationsPostRequestBody } from './updateAllowedCombinationsPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UpdateAllowedCombinationsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the updateAllowedCombinations method.
 */
export class UpdateAllowedCombinationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UpdateAllowedCombinationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy%2Did}/updateAllowedCombinations");
    };
    /**
     * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdateAllowedCombinationsResult
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-updateallowedcombinations?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UpdateAllowedCombinationsPostRequestBody, requestConfiguration?: UpdateAllowedCombinationsRequestBuilderPostRequestConfiguration | undefined) : Promise<UpdateAllowedCombinationsResult | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UpdateAllowedCombinationsResult>(requestInfo, createUpdateAllowedCombinationsResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UpdateAllowedCombinationsPostRequestBody, requestConfiguration?: UpdateAllowedCombinationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUpdateAllowedCombinationsPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a updateAllowedCombinationsRequestBuilder
     */
    public withUrl(rawUrl: string) : UpdateAllowedCombinationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UpdateAllowedCombinationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
