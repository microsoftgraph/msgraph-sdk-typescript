import {createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsDeviceStartupHistory} from '../../../models/deserializeIntoUserExperienceAnalyticsDeviceStartupHistory';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsDeviceStartupHistory} from '../../../models/serializeUserExperienceAnalyticsDeviceStartupHistory';
import type {UserExperienceAnalyticsDeviceStartupHistory} from '../../../models/userExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceStartupHistory property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsDeviceStartupHistory for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics device Startup History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupHistory
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupHistory | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupHistory>(requestInfo, createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsDeviceStartupHistory in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupHistory
     */
    public patch(body: UserExperienceAnalyticsDeviceStartupHistory, requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupHistory | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupHistory>(requestInfo, createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsDeviceStartupHistory for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics device Startup History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsDeviceStartupHistory in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsDeviceStartupHistory, requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDeviceStartupHistory);
        return requestInfo;
    };
}
