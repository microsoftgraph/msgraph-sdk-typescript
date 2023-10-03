import { type PrivilegedAccessGroupEligibilitySchedule } from '../../../../../../models/';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { createPrivilegedAccessGroupEligibilityScheduleFromDiscriminatorValue } from '../../../../../../models/privilegedAccessGroupEligibilitySchedule';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ActivatedUsingRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface ActivatedUsingRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: ActivatedUsingRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the activatedUsing property of the microsoft.graph.privilegedAccessGroupAssignmentScheduleRequest entity.
 */
export class ActivatedUsingRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ActivatedUsingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest%2Did}/activatedUsing{?%24select,%24expand}");
    };
    /**
     * Get activatedUsing from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupEligibilitySchedule
     */
    public get(requestConfiguration?: ActivatedUsingRequestBuilderGetRequestConfiguration | undefined) : Promise<PrivilegedAccessGroupEligibilitySchedule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrivilegedAccessGroupEligibilitySchedule>(requestInfo, createPrivilegedAccessGroupEligibilityScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get activatedUsing from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivatedUsingRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a activatedUsingRequestBuilder
     */
    public withUrl(rawUrl: string) : ActivatedUsingRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ActivatedUsingRequestBuilder(rawUrl, this.requestAdapter);
    };
}
