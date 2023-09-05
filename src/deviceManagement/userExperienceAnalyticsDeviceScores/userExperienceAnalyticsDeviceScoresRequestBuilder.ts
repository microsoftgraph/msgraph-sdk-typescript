import { type UserExperienceAnalyticsDeviceScoresCollectionResponse } from '../../models/';
import { createUserExperienceAnalyticsDeviceScoresCollectionResponseFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceScoresCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue } from '../../models/createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsDeviceScores } from '../../models/deserializeIntoUserExperienceAnalyticsDeviceScores';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsDeviceScores } from '../../models/serializeUserExperienceAnalyticsDeviceScores';
import { type UserExperienceAnalyticsDeviceScores } from '../../models/userExperienceAnalyticsDeviceScores';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsDeviceScoresItemRequestBuilder } from './item/userExperienceAnalyticsDeviceScoresItemRequestBuilder';
import { type UserExperienceAnalyticsDeviceScoresRequestBuilderGetRequestConfiguration } from './userExperienceAnalyticsDeviceScoresRequestBuilderGetRequestConfiguration';
import { type UserExperienceAnalyticsDeviceScoresRequestBuilderPostRequestConfiguration } from './userExperienceAnalyticsDeviceScoresRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceScores property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsDeviceScoresRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceScores property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceScoresId The unique identifier of userExperienceAnalyticsDeviceScores
     * @returns a UserExperienceAnalyticsDeviceScoresItemRequestBuilder
     */
    public byUserExperienceAnalyticsDeviceScoresId(userExperienceAnalyticsDeviceScoresId: string) : UserExperienceAnalyticsDeviceScoresItemRequestBuilder {
        if(!userExperienceAnalyticsDeviceScoresId) throw new Error("userExperienceAnalyticsDeviceScoresId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsDeviceScores%2Did"] = userExperienceAnalyticsDeviceScoresId
        return new UserExperienceAnalyticsDeviceScoresItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDeviceScoresRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceScores{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceScoresCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsDeviceScoresRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceScoresCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceScoresCollectionResponse>(requestInfo, createUserExperienceAnalyticsDeviceScoresCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceScores for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsDeviceScores
     */
    public post(body: UserExperienceAnalyticsDeviceScores, requestConfiguration?: UserExperienceAnalyticsDeviceScoresRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsDeviceScores | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsDeviceScores>(requestInfo, createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsDeviceScoresRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsDeviceScores for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsDeviceScores, requestConfiguration?: UserExperienceAnalyticsDeviceScoresRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsDeviceScores);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userExperienceAnalyticsDeviceScoresRequestBuilder
     */
    public withUrl(rawUrl: string) : UserExperienceAnalyticsDeviceScoresRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserExperienceAnalyticsDeviceScoresRequestBuilder(rawUrl, this.requestAdapter);
    };
}
