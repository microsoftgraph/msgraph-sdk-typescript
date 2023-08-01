import {UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../models/serializeUserExperienceAnalyticsAppHealthOSVersionPerformance';
import type {UserExperienceAnalyticsAppHealthOSVersionPerformance} from '../../models/userExperienceAnalyticsAppHealthOSVersionPerformance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthOSVersionPerformanceItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

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
     * @param userExperienceAnalyticsAppHealthOSVersionPerformanceId Unique identifier of the item
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
    public post(body: UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthOSVersionPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthOSVersionPerformance);
        return requestInfo;
    };
}
