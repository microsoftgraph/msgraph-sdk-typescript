import {createUpdateAllowedCombinationsResultFromDiscriminatorValue} from '../../../../../../models/createUpdateAllowedCombinationsResultFromDiscriminatorValue';
import {deserializeIntoUpdateAllowedCombinationsResult} from '../../../../../../models/deserializeIntoUpdateAllowedCombinationsResult';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeUpdateAllowedCombinationsResult} from '../../../../../../models/serializeUpdateAllowedCombinationsResult';
import type {UpdateAllowedCombinationsResult} from '../../../../../../models/updateAllowedCombinationsResult';
import {deserializeIntoUpdateAllowedCombinationsPostRequestBody} from './deserializeIntoUpdateAllowedCombinationsPostRequestBody';
import {serializeUpdateAllowedCombinationsPostRequestBody} from './serializeUpdateAllowedCombinationsPostRequestBody';
import type {UpdateAllowedCombinationsPostRequestBody} from './updateAllowedCombinationsPostRequestBody';
import {UpdateAllowedCombinationsRequestBuilderPostRequestConfiguration} from './updateAllowedCombinationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy%2Did}/updateAllowedCombinations");
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
}
