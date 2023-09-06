import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse } from '../../models/';
import { createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponseFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance } from '../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance } from '../../models/serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformance } from '../../models/userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder } from './item/userExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder';
import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderGetRequestConfiguration } from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderGetRequestConfiguration';
import { type UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderPostRequestConfiguration } from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereModelPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereModelPerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsWorkFromAnywhereModelPerformanceId The unique identifier of userExperienceAnalyticsWorkFromAnywhereModelPerformance
     * @returns a UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsWorkFromAnywhereModelPerformanceId(userExperienceAnalyticsWorkFromAnywhereModelPerformanceId: string) : UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsWorkFromAnywhereModelPerformanceId) throw new Error("userExperienceAnalyticsWorkFromAnywhereModelPerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsWorkFromAnywhereModelPerformance%2Did"] = userExperienceAnalyticsWorkFromAnywhereModelPerformanceId
        return new UserExperienceAnalyticsWorkFromAnywhereModelPerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The user experience analytics work from anywhere model performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsWorkFromAnywhereModelPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereModelPerformance
     */
    public post(body: UserExperienceAnalyticsWorkFromAnywhereModelPerformance, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereModelPerformance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereModelPerformance>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * The user experience analytics work from anywhere model performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsWorkFromAnywhereModelPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereModelPerformance, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsWorkFromAnywhereModelPerformanceRequestBuilder(rawUrl, this.requestAdapter);
    };
}
