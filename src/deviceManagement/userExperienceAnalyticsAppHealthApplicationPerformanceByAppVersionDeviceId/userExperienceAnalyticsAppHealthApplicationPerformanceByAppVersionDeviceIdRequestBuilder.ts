import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from '../../models/serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from '../../models/userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId Unique identifier of the item
     * @returns a UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId: string) : UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId) throw new Error("userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId%2Did"] = userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdId
        return new UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Application Performance by App Version Device Id
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId
     */
    public post(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Application Performance by App Version Device Id
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId);
        return requestInfo;
    };
}
