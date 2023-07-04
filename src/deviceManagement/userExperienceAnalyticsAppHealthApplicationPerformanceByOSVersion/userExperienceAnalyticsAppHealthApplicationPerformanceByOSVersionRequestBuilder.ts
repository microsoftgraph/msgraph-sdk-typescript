import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from '../../models/serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from '../../models/userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthAppPerformanceByOSVersionItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthAppPerformanceByOSVersionId Unique identifier of the item
     * @returns a UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionId(userExperienceAnalyticsAppHealthAppPerformanceByOSVersionId: string) : UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthAppPerformanceByOSVersionId) throw new Error("userExperienceAnalyticsAppHealthAppPerformanceByOSVersionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthAppPerformanceByOSVersion%2Did"] = userExperienceAnalyticsAppHealthAppPerformanceByOSVersionId
        return new UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Application Performance by OS Version
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion
     */
    public post(body: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion>(requestInfo, createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Application Performance by OS Version
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion);
        return requestInfo;
    };
}
