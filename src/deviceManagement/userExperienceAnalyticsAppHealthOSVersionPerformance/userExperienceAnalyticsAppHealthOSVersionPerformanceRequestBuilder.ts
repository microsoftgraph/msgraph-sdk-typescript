import { type UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue, deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance, serializeUserExperienceAnalyticsAppHealthOSVersionPerformance, type UserExperienceAnalyticsAppHealthOSVersionPerformance } from '../../models/userExperienceAnalyticsAppHealthOSVersionPerformance';
import { createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue } from '../../models/userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder } from './item/userExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetQueryParameters;
}
export interface UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the userExperienceAnalyticsAppHealthOSVersionPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthOSVersionPerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthOSVersionPerformanceId The unique identifier of userExperienceAnalyticsAppHealthOSVersionPerformance
     * @returns a UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthOSVersionPerformanceId(userExperienceAnalyticsAppHealthOSVersionPerformanceId: string) : UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthOSVersionPerformanceId) throw new Error("userExperienceAnalyticsAppHealthOSVersionPerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthOSVersionPerformance%2Did"] = userExperienceAnalyticsAppHealthOSVersionPerformanceId
        return new UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth OS version Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthOSVersionPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthOSVersionPerformance
     */
    public post(body: UserExperienceAnalyticsAppHealthOSVersionPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthOSVersionPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth OS version Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthOSVersionPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthOSVersionPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthOSVersionPerformance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilder(rawUrl, this.requestAdapter);
    };
}
