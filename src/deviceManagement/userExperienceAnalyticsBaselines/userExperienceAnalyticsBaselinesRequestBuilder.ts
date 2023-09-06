import { type UserExperienceAnalyticsBaselineCollectionResponse } from '../../models/';
import { createUserExperienceAnalyticsBaselineCollectionResponseFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsBaselineCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsBaselineFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsBaselineFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsBaseline } from '../../models/deserializeIntoUserExperienceAnalyticsBaseline';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsBaseline } from '../../models/serializeUserExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaseline } from '../../models/userExperienceAnalyticsBaseline';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsBaselineItemRequestBuilder } from './item/userExperienceAnalyticsBaselineItemRequestBuilder';
import { type UserExperienceAnalyticsBaselinesRequestBuilderGetRequestConfiguration } from './userExperienceAnalyticsBaselinesRequestBuilderGetRequestConfiguration';
import { type UserExperienceAnalyticsBaselinesRequestBuilderPostRequestConfiguration } from './userExperienceAnalyticsBaselinesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsBaselines property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsBaselinesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsBaselines property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsBaselineId The unique identifier of userExperienceAnalyticsBaseline
     * @returns a UserExperienceAnalyticsBaselineItemRequestBuilder
     */
    public byUserExperienceAnalyticsBaselineId(userExperienceAnalyticsBaselineId: string) : UserExperienceAnalyticsBaselineItemRequestBuilder {
        if(!userExperienceAnalyticsBaselineId) throw new Error("userExperienceAnalyticsBaselineId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsBaseline%2Did"] = userExperienceAnalyticsBaselineId
        return new UserExperienceAnalyticsBaselineItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsBaselinesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsBaselines{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics baselines
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBaselineCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsBaselinesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsBaselineCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsBaselineCollectionResponse>(requestInfo, createUserExperienceAnalyticsBaselineCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsBaselines for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBaseline
     */
    public post(body: UserExperienceAnalyticsBaseline, requestConfiguration?: UserExperienceAnalyticsBaselinesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsBaseline | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsBaseline>(requestInfo, createUserExperienceAnalyticsBaselineFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics baselines
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsBaselinesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsBaselines for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsBaseline, requestConfiguration?: UserExperienceAnalyticsBaselinesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsBaseline);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsBaselinesRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsBaselinesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsBaselinesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
