import {SecureScoreCollectionResponse} from '../../models/';
import {createSecureScoreCollectionResponseFromDiscriminatorValue} from '../../models/createSecureScoreCollectionResponseFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from '../../models/createSecureScoreFromDiscriminatorValue';
import {deserializeIntoSecureScore} from '../../models/deserializeIntoSecureScore';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {SecureScore} from '../../models/secureScore';
import {serializeSecureScore} from '../../models/serializeSecureScore';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SecureScoreItemRequestBuilder} from './item/secureScoreItemRequestBuilder';
import {SecureScoresRequestBuilderGetRequestConfiguration} from './secureScoresRequestBuilderGetRequestConfiguration';
import {SecureScoresRequestBuilderPostRequestConfiguration} from './secureScoresRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the secureScores property of the microsoft.graph.security entity.
 */
export class SecureScoresRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the secureScores property of the microsoft.graph.security entity.
     * @param secureScoreId The unique identifier of secureScore
     * @returns a SecureScoreItemRequestBuilder
     */
    public bySecureScoreId(secureScoreId: string) : SecureScoreItemRequestBuilder {
        if(!secureScoreId) throw new Error("secureScoreId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["secureScore%2Did"] = secureScoreId
        return new SecureScoreItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SecureScoresRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/secureScores{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of secureScore objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-list-securescores?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SecureScoresRequestBuilderGetRequestConfiguration | undefined) : Promise<SecureScoreCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScoreCollectionResponse>(requestInfo, createSecureScoreCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to secureScores for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScore
     */
    public post(body: SecureScore, requestConfiguration?: SecureScoresRequestBuilderPostRequestConfiguration | undefined) : Promise<SecureScore | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScore>(requestInfo, createSecureScoreFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of secureScore objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SecureScoresRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to secureScores for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SecureScore, requestConfiguration?: SecureScoresRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSecureScore);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a secureScoresRequestBuilder
     */
    public withUrl(rawUrl: string) : SecureScoresRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SecureScoresRequestBuilder(rawUrl, this.requestAdapter);
    };
}
