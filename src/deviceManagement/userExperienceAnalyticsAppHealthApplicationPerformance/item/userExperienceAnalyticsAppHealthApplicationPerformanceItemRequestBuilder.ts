import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue, deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance, serializeUserExperienceAnalyticsAppHealthApplicationPerformance, type UserExperienceAnalyticsAppHealthApplicationPerformance } from '../../../models/userExperienceAnalyticsAppHealthApplicationPerformance';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderGetQueryParameters;
}
export interface UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics appHealth Application Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthApplicationPerformance
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthApplicationPerformance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthApplicationPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthApplicationPerformance
     */
    public patch(body: UserExperienceAnalyticsAppHealthApplicationPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthApplicationPerformance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthApplicationPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics appHealth Application Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsAppHealthApplicationPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthApplicationPerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
