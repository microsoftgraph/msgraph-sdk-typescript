import {UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformance} from '../../models/serializeUserExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from '../../models/userExperienceAnalyticsAppHealthDevicePerformance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthDevicePerformanceId Unique identifier of the item
     * @returns a UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthDevicePerformanceId(userExperienceAnalyticsAppHealthDevicePerformanceId: string) : UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthDevicePerformanceId) throw new Error("userExperienceAnalyticsAppHealthDevicePerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthDevicePerformance%2Did"] = userExperienceAnalyticsAppHealthDevicePerformanceId
        return new UserExperienceAnalyticsAppHealthDevicePerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Device Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformance
     */
    public post(body: UserExperienceAnalyticsAppHealthDevicePerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformance>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Device Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthDevicePerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthDevicePerformance);
        return requestInfo;
    };
}
