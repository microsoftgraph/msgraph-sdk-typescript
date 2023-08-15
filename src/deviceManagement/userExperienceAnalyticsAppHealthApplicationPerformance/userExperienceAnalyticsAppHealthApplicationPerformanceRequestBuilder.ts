import {UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthApplicationPerformance} from '../../models/serializeUserExperienceAnalyticsAppHealthApplicationPerformance';
import type {UserExperienceAnalyticsAppHealthApplicationPerformance} from '../../models/userExperienceAnalyticsAppHealthApplicationPerformance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthApplicationPerformanceId The unique identifier of userExperienceAnalyticsAppHealthApplicationPerformance
     * @returns a UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthApplicationPerformanceId(userExperienceAnalyticsAppHealthApplicationPerformanceId: string) : UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthApplicationPerformanceId) throw new Error("userExperienceAnalyticsAppHealthApplicationPerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthApplicationPerformance%2Did"] = userExperienceAnalyticsAppHealthApplicationPerformanceId
        return new UserExperienceAnalyticsAppHealthApplicationPerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Application Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthApplicationPerformance
     */
    public post(body: UserExperienceAnalyticsAppHealthApplicationPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthApplicationPerformance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthApplicationPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Application Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthApplicationPerformance, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthApplicationPerformance);
        return requestInfo;
    };
}
