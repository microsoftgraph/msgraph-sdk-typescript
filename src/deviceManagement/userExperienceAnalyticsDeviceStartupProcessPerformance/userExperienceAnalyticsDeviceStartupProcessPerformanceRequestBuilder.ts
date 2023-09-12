import { type UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse } from '../../models/';
import { createUserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponseFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance } from '../../models/deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsDeviceStartupProcessPerformance } from '../../models/serializeUserExperienceAnalyticsDeviceStartupProcessPerformance';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from '../../models/userExperienceAnalyticsDeviceStartupProcessPerformance';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsDeviceStartupProcessPerformanceItemRequestBuilder } from './item/userExperienceAnalyticsDeviceStartupProcessPerformanceItemRequestBuilder';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderGetRequestConfiguration } from './userExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderGetRequestConfiguration';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderPostRequestConfiguration } from './userExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceStartupProcessPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceStartupProcessPerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceStartupProcessPerformanceId The unique identifier of userExperienceAnalyticsDeviceStartupProcessPerformance
     * @returns a UserExperienceAnalyticsDeviceStartupProcessPerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsDeviceStartupProcessPerformanceId(userExperienceAnalyticsDeviceStartupProcessPerformanceId: string) : UserExperienceAnalyticsDeviceStartupProcessPerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsDeviceStartupProcessPerformanceId) throw new Error("userExperienceAnalyticsDeviceStartupProcessPerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsDeviceStartupProcessPerformance%2Did"] = userExperienceAnalyticsDeviceStartupProcessPerformanceId
        return new UserExperienceAnalyticsDeviceStartupProcessPerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device Startup Process Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceStartupProcessPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceStartupProcessPerformance
     */
    public post(body: UserExperienceAnalyticsDeviceStartupProcessPerformance, requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceStartupProcessPerformance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceStartupProcessPerformance>(requestInfo, createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device Startup Process Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsDeviceStartupProcessPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsDeviceStartupProcessPerformance, requestConfiguration?: UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDeviceStartupProcessPerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsDeviceStartupProcessPerformanceRequestBuilder(rawUrl, this.requestAdapter);
    };
}
