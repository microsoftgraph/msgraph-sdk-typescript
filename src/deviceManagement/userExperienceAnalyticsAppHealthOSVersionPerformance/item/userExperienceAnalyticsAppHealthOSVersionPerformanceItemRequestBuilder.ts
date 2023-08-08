import {createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../../models/deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../../models/serializeUserExperienceAnalyticsAppHealthOSVersionPerformance';
import type {UserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../../models/userExperienceAnalyticsAppHealthOSVersionPerformance';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthOSVersionPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthOSVersionPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics appHealth OS version Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthOSVersionPerformance
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthOSVersionPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthOSVersionPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthOSVersionPerformance
     */
    public patch(body: UserExperienceAnalyticsAppHealthOSVersionPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthOSVersionPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthOSVersionPerformance for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics appHealth OS version Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsAppHealthOSVersionPerformance in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsAppHealthOSVersionPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthOSVersionPerformance);
        return requestInfo;
    };
}
