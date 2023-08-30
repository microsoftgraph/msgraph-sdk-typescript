import {UserExperienceAnalyticsDevicePerformanceCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsDevicePerformanceCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsDevicePerformanceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsDevicePerformance} from '../../models/deserializeIntoUserExperienceAnalyticsDevicePerformance';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsDevicePerformance} from '../../models/serializeUserExperienceAnalyticsDevicePerformance';
import type {UserExperienceAnalyticsDevicePerformance} from '../../models/userExperienceAnalyticsDevicePerformance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsDevicePerformanceItemRequestBuilder} from './item/userExperienceAnalyticsDevicePerformanceItemRequestBuilder';
import {SummarizeDevicePerformanceDevicesWithSummarizeByRequestBuilder} from './summarizeDevicePerformanceDevicesWithSummarizeBy/summarizeDevicePerformanceDevicesWithSummarizeByRequestBuilder';
import {UserExperienceAnalyticsDevicePerformanceRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsDevicePerformanceRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsDevicePerformanceRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsDevicePerformanceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDevicePerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDevicePerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsDevicePerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDevicePerformanceId The unique identifier of userExperienceAnalyticsDevicePerformance
     * @returns a UserExperienceAnalyticsDevicePerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsDevicePerformanceId(userExperienceAnalyticsDevicePerformanceId: string) : UserExperienceAnalyticsDevicePerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsDevicePerformanceId) throw new Error("userExperienceAnalyticsDevicePerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsDevicePerformance%2Did"] = userExperienceAnalyticsDevicePerformanceId
        return new UserExperienceAnalyticsDevicePerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDevicePerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDevicePerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDevicePerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDevicePerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDevicePerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsDevicePerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsDevicePerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDevicePerformance
     */
    public post(body: UserExperienceAnalyticsDevicePerformance, requestConfiguration?: UserExperienceAnalyticsDevicePerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDevicePerformance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDevicePerformance>(requestInfo, createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the summarizeDevicePerformanceDevices method.
     * @param summarizeBy Usage: summarizeBy='{summarizeBy}'
     * @returns a summarizeDevicePerformanceDevicesWithSummarizeByRequestBuilder
     */
    public summarizeDevicePerformanceDevicesWithSummarizeBy(summarizeBy: string | undefined) : SummarizeDevicePerformanceDevicesWithSummarizeByRequestBuilder {
        if(!summarizeBy) throw new Error("summarizeBy cannot be undefined");
        return new SummarizeDevicePerformanceDevicesWithSummarizeByRequestBuilder(this.pathParameters, this.requestAdapter, summarizeBy);
    };
    /**
     * User experience analytics device performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDevicePerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsDevicePerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsDevicePerformance, requestConfiguration?: UserExperienceAnalyticsDevicePerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDevicePerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsDevicePerformanceRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsDevicePerformanceRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsDevicePerformanceRequestBuilder(rawUrl, this.requestAdapter);
    };
}
