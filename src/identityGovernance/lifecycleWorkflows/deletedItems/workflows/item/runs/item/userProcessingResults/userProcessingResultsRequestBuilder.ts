import {UserProcessingResultCollectionResponse} from '../../../../../../../../models/identityGovernance/';
import {createUserProcessingResultCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/identityGovernance/createUserProcessingResultCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserProcessingResultItemRequestBuilder} from './item/userProcessingResultItemRequestBuilder';
import {MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime/microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder';
import {UserProcessingResultsRequestBuilderGetRequestConfiguration} from './userProcessingResultsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.run entity.
 */
export class UserProcessingResultsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.run entity.
     * @param userProcessingResultId The unique identifier of userProcessingResult
     * @returns a UserProcessingResultItemRequestBuilder
     */
    public byUserProcessingResultId(userProcessingResultId: string) : UserProcessingResultItemRequestBuilder {
        if(!userProcessingResultId) throw new Error("userProcessingResultId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userProcessingResult%2Did"] = userProcessingResultId
        return new UserProcessingResultItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserProcessingResultsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/runs/{run%2Did}/userProcessingResults{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get user processing results of a workflow run object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserProcessingResultCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-run-list-userprocessingresults?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserProcessingResultsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserProcessingResultCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserProcessingResultCollectionResponse>(requestInfo, createUserProcessingResultCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the summary method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined) : MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, startDateTime);
    };
    /**
     * Get user processing results of a workflow run object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserProcessingResultsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a userProcessingResultsRequestBuilder
     */
    public withUrl(rawUrl: string) : UserProcessingResultsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserProcessingResultsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
