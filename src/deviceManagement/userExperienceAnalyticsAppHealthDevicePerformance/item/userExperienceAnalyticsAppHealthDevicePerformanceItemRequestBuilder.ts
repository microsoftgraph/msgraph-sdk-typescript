import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue, deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance, serializeUserExperienceAnalyticsAppHealthDevicePerformance, type UserExperienceAnalyticsAppHealthDevicePerformance } from '../../../models/userExperienceAnalyticsAppHealthDevicePerformance';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderGetQueryParameters;
}
export interface UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthDevicePerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics appHealth Device Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformance
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformance>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthDevicePerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformance
     */
    public patch(body: UserExperienceAnalyticsAppHealthDevicePerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformance>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthDevicePerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics appHealth Device Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsAppHealthDevicePerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsAppHealthDevicePerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthDevicePerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
