import { type UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse } from '../../models/';
import { createUserExperienceAnalyticsDeviceStartupHistoryCollectionResponseFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceStartupHistoryCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsDeviceStartupHistory } from '../../models/deserializeIntoUserExperienceAnalyticsDeviceStartupHistory';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsDeviceStartupHistory } from '../../models/serializeUserExperienceAnalyticsDeviceStartupHistory';
import { type UserExperienceAnalyticsDeviceStartupHistory } from '../../models/userExperienceAnalyticsDeviceStartupHistory';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder } from './item/userExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder';
import { type UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderGetRequestConfiguration } from './userExperienceAnalyticsDeviceStartupHistoryRequestBuilderGetRequestConfiguration';
import { type UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderPostRequestConfiguration } from './userExperienceAnalyticsDeviceStartupHistoryRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceStartupHistory property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDeviceStartupHistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceStartupHistory property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceStartupHistoryId The unique identifier of userExperienceAnalyticsDeviceStartupHistory
     * @returns a UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder
     */
    public byUserExperienceAnalyticsDeviceStartupHistoryId(userExperienceAnalyticsDeviceStartupHistoryId: string) : UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder {
        if(!userExperienceAnalyticsDeviceStartupHistoryId) throw new Error("userExperienceAnalyticsDeviceStartupHistoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsDeviceStartupHistory%2Did"] = userExperienceAnalyticsDeviceStartupHistoryId
        return new UserExperienceAnalyticsDeviceStartupHistoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDeviceStartupHistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceStartupHistory{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device Startup History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse>(requestInfo, createUserExperienceAnalyticsDeviceStartupHistoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceStartupHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupHistory
     */
    public post(body: UserExperienceAnalyticsDeviceStartupHistory, requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupHistory | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupHistory>(requestInfo, createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device Startup History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsDeviceStartupHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsDeviceStartupHistory, requestConfiguration?: UserExperienceAnalyticsDeviceStartupHistoryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDeviceStartupHistory);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsDeviceStartupHistoryRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsDeviceStartupHistoryRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsDeviceStartupHistoryRequestBuilder(rawUrl, this.requestAdapter);
    };
}
