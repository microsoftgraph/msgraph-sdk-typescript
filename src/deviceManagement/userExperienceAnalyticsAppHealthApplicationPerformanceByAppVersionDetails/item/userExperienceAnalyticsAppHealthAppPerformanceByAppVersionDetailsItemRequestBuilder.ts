import {createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../../models/deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../../models/serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../../models/userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics appHealth Application Performance by App Version details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
     */
    public patch(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics appHealth Application Performance by App Version details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails);
        return requestInfo;
    };
}
