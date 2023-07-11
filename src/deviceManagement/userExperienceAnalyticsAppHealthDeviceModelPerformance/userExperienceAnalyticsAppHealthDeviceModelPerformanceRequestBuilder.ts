import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance} from '../../models/serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from '../../models/userExperienceAnalyticsAppHealthDeviceModelPerformance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthDeviceModelPerformanceItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthDeviceModelPerformance property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthDeviceModelPerformance property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthDeviceModelPerformanceId Unique identifier of the item
     * @returns a UserExperienceAnalyticsAppHealthDeviceModelPerformanceItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthDeviceModelPerformanceId(userExperienceAnalyticsAppHealthDeviceModelPerformanceId: string) : UserExperienceAnalyticsAppHealthDeviceModelPerformanceItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthDeviceModelPerformanceId) throw new Error("userExperienceAnalyticsAppHealthDeviceModelPerformanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthDeviceModelPerformance%2Did"] = userExperienceAnalyticsAppHealthDeviceModelPerformanceId
        return new UserExperienceAnalyticsAppHealthDeviceModelPerformanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics appHealth Model Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthDeviceModelPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDeviceModelPerformance
     */
    public post(body: UserExperienceAnalyticsAppHealthDeviceModelPerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDeviceModelPerformance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDeviceModelPerformance>(requestInfo, createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics appHealth Model Performance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthDeviceModelPerformance for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthDeviceModelPerformance | undefined, requestConfiguration?: UserExperienceAnalyticsAppHealthDeviceModelPerformanceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance);
        return requestInfo;
    };
}
