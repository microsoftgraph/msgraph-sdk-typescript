import {UserExperienceAnalyticsModelScoresCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsModelScoresCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsModelScoresCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsModelScoresFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsModelScoresFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsModelScores} from '../../models/deserializeIntoUserExperienceAnalyticsModelScores';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsModelScores} from '../../models/serializeUserExperienceAnalyticsModelScores';
import type {UserExperienceAnalyticsModelScores} from '../../models/userExperienceAnalyticsModelScores';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsModelScoresItemRequestBuilder} from './item/userExperienceAnalyticsModelScoresItemRequestBuilder';
import {UserExperienceAnalyticsModelScoresRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsModelScoresRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsModelScoresRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsModelScoresRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsModelScores property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsModelScoresRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsModelScores property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsModelScoresId The unique identifier of userExperienceAnalyticsModelScores
     * @returns a UserExperienceAnalyticsModelScoresItemRequestBuilder
     */
    public byUserExperienceAnalyticsModelScoresId(userExperienceAnalyticsModelScoresId: string) : UserExperienceAnalyticsModelScoresItemRequestBuilder {
        if(!userExperienceAnalyticsModelScoresId) throw new Error("userExperienceAnalyticsModelScoresId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsModelScores%2Did"] = userExperienceAnalyticsModelScoresId
        return new UserExperienceAnalyticsModelScoresItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsModelScoresRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsModelScores{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics model scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsModelScoresCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsModelScoresRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsModelScoresCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsModelScoresCollectionResponse>(requestInfo, createUserExperienceAnalyticsModelScoresCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsModelScores for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsModelScores
     */
    public post(body: UserExperienceAnalyticsModelScores, requestConfiguration?: UserExperienceAnalyticsModelScoresRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsModelScores | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsModelScores>(requestInfo, createUserExperienceAnalyticsModelScoresFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics model scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsModelScoresRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsModelScores for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsModelScores, requestConfiguration?: UserExperienceAnalyticsModelScoresRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsModelScores);
        return requestInfo;
    };
}
