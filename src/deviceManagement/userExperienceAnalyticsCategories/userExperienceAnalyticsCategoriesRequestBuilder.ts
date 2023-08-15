import {UserExperienceAnalyticsCategoryCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsCategoryCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsCategoryCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsCategoryFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsCategoryFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsCategory} from '../../models/deserializeIntoUserExperienceAnalyticsCategory';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsCategory} from '../../models/serializeUserExperienceAnalyticsCategory';
import type {UserExperienceAnalyticsCategory} from '../../models/userExperienceAnalyticsCategory';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsCategoryItemRequestBuilder} from './item/userExperienceAnalyticsCategoryItemRequestBuilder';
import {UserExperienceAnalyticsCategoriesRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsCategoriesRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsCategoriesRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsCategoriesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsCategories property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsCategoriesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsCategories property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsCategoryId The unique identifier of userExperienceAnalyticsCategory
     * @returns a UserExperienceAnalyticsCategoryItemRequestBuilder
     */
    public byUserExperienceAnalyticsCategoryId(userExperienceAnalyticsCategoryId: string) : UserExperienceAnalyticsCategoryItemRequestBuilder {
        if(!userExperienceAnalyticsCategoryId) throw new Error("userExperienceAnalyticsCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsCategory%2Did"] = userExperienceAnalyticsCategoryId
        return new UserExperienceAnalyticsCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsCategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsCategories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics categories
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsCategoryCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsCategoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsCategoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsCategoryCollectionResponse>(requestInfo, createUserExperienceAnalyticsCategoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsCategories for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsCategory
     */
    public post(body: UserExperienceAnalyticsCategory, requestConfiguration?: UserExperienceAnalyticsCategoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsCategory | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsCategory>(requestInfo, createUserExperienceAnalyticsCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics categories
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsCategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsCategories for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsCategory, requestConfiguration?: UserExperienceAnalyticsCategoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsCategory);
        return requestInfo;
    };
}
