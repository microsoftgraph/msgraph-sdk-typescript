import {createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../../models/deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../../models/serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../../models/userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformanceDetails property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * User experience analytics device performance details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformanceDetails
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformanceDetails>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformanceDetails
     */
    public patch(body: UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformanceDetails>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * User experience analytics device performance details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsAppHealthDevicePerformanceDetails in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails);
        return requestInfo;
    };
}
