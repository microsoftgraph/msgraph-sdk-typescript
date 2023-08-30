import {createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from '../../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from '../../../models/serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import type {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from '../../../models/userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereModelPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsWorkFromAnywhereModelPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The user experience analytics work from anywhere model performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereModelPerformance
     */
    public get(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereModelPerformance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereModelPerformance>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsWorkFromAnywhereModelPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereModelPerformance
     */
    public patch(body: UserExperienceAnalyticsWorkFromAnywhereModelPerformance, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereModelPerformance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereModelPerformance>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsWorkFromAnywhereModelPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The user experience analytics work from anywhere model performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsWorkFromAnywhereModelPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereModelPerformance, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
