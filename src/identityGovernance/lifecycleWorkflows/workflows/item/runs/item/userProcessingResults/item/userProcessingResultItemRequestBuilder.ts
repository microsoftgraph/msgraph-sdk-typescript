import {UserProcessingResult} from '../../../../../../../../models/identityGovernance/';
import {createUserProcessingResultFromDiscriminatorValue} from '../../../../../../../../models/identityGovernance/createUserProcessingResultFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {SubjectRequestBuilder} from './subject/subjectRequestBuilder';
import {TaskProcessingResultsRequestBuilder} from './taskProcessingResults/taskProcessingResultsRequestBuilder';
import {UserProcessingResultItemRequestBuilderGetRequestConfiguration} from './userProcessingResultItemRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userProcessingResults property of the microsoft.graph.identityGovernance.run entity.
 */
export class UserProcessingResultItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the subject property of the microsoft.graph.identityGovernance.userProcessingResult entity.
     */
    public get subject(): SubjectRequestBuilder {
        return new SubjectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.userProcessingResult entity.
     */
    public get taskProcessingResults(): TaskProcessingResultsRequestBuilder {
        return new TaskProcessingResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserProcessingResultItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/runs/{run%2Did}/userProcessingResults/{userProcessingResult%2Did}{?%24select,%24expand}");
    };
    /**
     * Get the user processing result of a user processing result of a run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserProcessingResult
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-userprocessingresult-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserProcessingResultItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserProcessingResult | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserProcessingResult>(requestInfo, createUserProcessingResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the user processing result of a user processing result of a run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserProcessingResultItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
