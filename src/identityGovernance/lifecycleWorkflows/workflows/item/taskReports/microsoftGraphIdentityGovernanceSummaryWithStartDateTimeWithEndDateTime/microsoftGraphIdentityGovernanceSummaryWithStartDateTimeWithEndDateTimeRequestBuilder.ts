import {TaskReportSummary} from '../../../../../../models/identityGovernance/';
import {createTaskReportSummaryFromDiscriminatorValue} from '../../../../../../models/identityGovernance/createTaskReportSummaryFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration} from './microsoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the summary method.
 */
export class MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilder and sets the default values.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param startDateTime Usage: startDateTime={startDateTime}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, endDateTime?: Date | undefined, startDateTime?: Date | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/taskReports/microsoft.graph.identityGovernance.summary(startDateTime={startDateTime},endDateTime={endDateTime})");
        this.pathParameters["endDateTime"] = endDateTime
        this.pathParameters["startDateTime"] = startDateTime
    };
    /**
     * Invoke function summary
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskReportSummary
     */
    public get(requestConfiguration?: MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : Promise<TaskReportSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TaskReportSummary>(requestInfo, createTaskReportSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function summary
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MicrosoftGraphIdentityGovernanceSummaryWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
