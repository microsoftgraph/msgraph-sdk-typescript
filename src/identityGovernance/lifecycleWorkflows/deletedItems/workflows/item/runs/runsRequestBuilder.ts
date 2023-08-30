import {RunCollectionResponse} from '../../../../../../models/identityGovernance/';
import {createRunCollectionResponseFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createRunCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RunItemRequestBuilder} from './item/runItemRequestBuilder';
import {MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTime/microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder';
import {RunsRequestBuilderGetRequestConfiguration} from './runsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the runs property of the microsoft.graph.identityGovernance.workflow entity.
 */
export class RunsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the runs property of the microsoft.graph.identityGovernance.workflow entity.
     * @param runId The unique identifier of run
     * @returns a RunItemRequestBuilder
     */
    public byRunId(runId: string) : RunItemRequestBuilder {
        if(!runId) throw new Error("runId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["run%2Did"] = runId
        return new RunItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RunsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/runs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the run objects and their properties for a lifecycle workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RunCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflow-list-runs?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RunsRequestBuilderGetRequestConfiguration | undefined) : Promise<RunCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RunCollectionResponse>(requestInfo, createRunCollectionResponseFromDiscriminatorValue, errorMapping);
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
     * Get a list of the run objects and their properties for a lifecycle workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RunsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a runsRequestBuilder
     */
    public withUrl(rawUrl: string) : RunsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RunsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
