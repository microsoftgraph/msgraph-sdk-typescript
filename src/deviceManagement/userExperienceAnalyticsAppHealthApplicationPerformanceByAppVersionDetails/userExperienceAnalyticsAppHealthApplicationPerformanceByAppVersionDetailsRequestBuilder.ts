import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../models/serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import type {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from '../../models/userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId The unique identifier of userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
     * @returns a UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId: string) : UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId) throw new Error("userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails%2Did"] = userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsId
        return new UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Application Performance by App Version details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
     */
    public post(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Application Performance by App Version details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails);
        return requestInfo;
    };
}
