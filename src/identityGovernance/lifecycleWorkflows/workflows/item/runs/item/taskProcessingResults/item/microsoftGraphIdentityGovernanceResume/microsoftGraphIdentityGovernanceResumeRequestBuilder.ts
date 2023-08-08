import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {deserializeIntoResumePostRequestBody} from './deserializeIntoResumePostRequestBody';
import {MicrosoftGraphIdentityGovernanceResumeRequestBuilderPostRequestConfiguration} from './microsoftGraphIdentityGovernanceResumeRequestBuilderPostRequestConfiguration';
import type {ResumePostRequestBody} from './resumePostRequestBody';
import {serializeResumePostRequestBody} from './serializeResumePostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the resume method.
 */
export class MicrosoftGraphIdentityGovernanceResumeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphIdentityGovernanceResumeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/runs/{run%2Did}/taskProcessingResults/{taskProcessingResult%2Did}/microsoft.graph.identityGovernance.resume");
    };
    /**
     * Resume a task processing result that's inProgress. In the default case an Azure Logic Apps system-assigned managed identity calls this API. For more information, see: Lifecycle Workflows extensibility approach.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-taskprocessingresult-resume?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ResumePostRequestBody, requestConfiguration?: MicrosoftGraphIdentityGovernanceResumeRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Resume a task processing result that's inProgress. In the default case an Azure Logic Apps system-assigned managed identity calls this API. For more information, see: Lifecycle Workflows extensibility approach.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ResumePostRequestBody, requestConfiguration?: MicrosoftGraphIdentityGovernanceResumeRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeResumePostRequestBody);
        return requestInfo;
    };
}
