import {createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsDevicePerformance} from '../../../models/deserializeIntoUserExperienceAnalyticsDevicePerformance';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsDevicePerformance} from '../../../models/serializeUserExperienceAnalyticsDevicePerformance';
import type {UserExperienceAnalyticsDevicePerformance} from '../../../models/userExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDevicePerformanceItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsDevicePerformanceItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsDevicePerformanceItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsDevicePerformanceItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsDevicePerformanceItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsDevicePerformanceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDevicePerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDevicePerformanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsDevicePerformanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsDevicePerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics device performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDevicePerformance
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDevicePerformance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDevicePerformance>(requestInfo, createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsDevicePerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDevicePerformance
     */
    public patch(body: UserExperienceAnalyticsDevicePerformance, requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDevicePerformance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDevicePerformance>(requestInfo, createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsDevicePerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics device performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsDevicePerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsDevicePerformance, requestConfiguration?: UserExperienceAnalyticsDevicePerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDevicePerformance);
        return requestInfo;
    };
}
