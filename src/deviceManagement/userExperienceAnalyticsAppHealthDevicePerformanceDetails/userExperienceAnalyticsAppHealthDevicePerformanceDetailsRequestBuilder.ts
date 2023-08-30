import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../models/deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../models/serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import type {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from '../../models/userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder} from './item/userExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformanceDetails property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsAppHealthDevicePerformanceDetails property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAppHealthDevicePerformanceDetailsId The unique identifier of userExperienceAnalyticsAppHealthDevicePerformanceDetails
     * @returns a UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder
     */
    public byUserExperienceAnalyticsAppHealthDevicePerformanceDetailsId(userExperienceAnalyticsAppHealthDevicePerformanceDetailsId: string) : UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder {
        if(!userExperienceAnalyticsAppHealthDevicePerformanceDetailsId) throw new Error("userExperienceAnalyticsAppHealthDevicePerformanceDetailsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsAppHealthDevicePerformanceDetails%2Did"] = userExperienceAnalyticsAppHealthDevicePerformanceDetailsId
        return new UserExperienceAnalyticsAppHealthDevicePerformanceDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device performance details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAppHealthDevicePerformanceDetails
     */
    public post(body: UserExperienceAnalyticsAppHealthDevicePerformanceDetails, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsAppHealthDevicePerformanceDetails>(requestInfo, createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device performance details
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsAppHealthDevicePerformanceDetails for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsAppHealthDevicePerformanceDetails, requestConfiguration?: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsAppHealthDevicePerformanceDetailsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
