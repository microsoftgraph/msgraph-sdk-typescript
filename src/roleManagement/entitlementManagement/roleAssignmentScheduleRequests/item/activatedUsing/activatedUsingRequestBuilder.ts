import {UnifiedRoleEligibilitySchedule} from '../../../../../models/';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from '../../../../../models/createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {ActivatedUsingRequestBuilderGetRequestConfiguration} from './activatedUsingRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
 */
export class ActivatedUsingRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ActivatedUsingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest%2Did}/activatedUsing{?%24select,%24expand}");
    };
    /**
     * If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilitySchedule
     */
    public get(requestConfiguration?: ActivatedUsingRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilitySchedule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilitySchedule>(requestInfo, createUnifiedRoleEligibilityScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
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
