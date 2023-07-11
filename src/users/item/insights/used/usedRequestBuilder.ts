import {UsedInsightCollectionResponse} from '../../../../models/';
import {createUsedInsightCollectionResponseFromDiscriminatorValue} from '../../../../models/createUsedInsightCollectionResponseFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from '../../../../models/createUsedInsightFromDiscriminatorValue';
import {deserializeIntoUsedInsight} from '../../../../models/deserializeIntoUsedInsight';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUsedInsight} from '../../../../models/serializeUsedInsight';
import {UsedInsight} from '../../../../models/usedInsight';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UsedInsightItemRequestBuilder} from './item/usedInsightItemRequestBuilder';
import {UsedRequestBuilderGetRequestConfiguration} from './usedRequestBuilderGetRequestConfiguration';
import {UsedRequestBuilderPostRequestConfiguration} from './usedRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the used property of the microsoft.graph.officeGraphInsights entity.
 */
export class UsedRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the used property of the microsoft.graph.officeGraphInsights entity.
     * @param usedInsightId Unique identifier of the item
     * @returns a UsedInsightItemRequestBuilder
     */
    public byUsedInsightId(usedInsightId: string) : UsedInsightItemRequestBuilder {
        if(!usedInsightId) throw new Error("usedInsightId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["usedInsight%2Did"] = usedInsightId
        return new UsedInsightItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UsedRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/insights/used{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Calculate and list the documents that a user has viewed or modified.  For the signed-in user:- This method includes documents that the user has modified; see example 1. - Using an `$orderby` query parameter on the **lastAccessedDateTime** property returns the most recently viewed documents that the user might or might not not have modified; see example 2. For other users, this method includes only documents that the user has modified.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UsedInsightCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/insights-list-used?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UsedRequestBuilderGetRequestConfiguration | undefined) : Promise<UsedInsightCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UsedInsightCollectionResponse>(requestInfo, createUsedInsightCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to used for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UsedInsight
     */
    public post(body: UsedInsight | undefined, requestConfiguration?: UsedRequestBuilderPostRequestConfiguration | undefined) : Promise<UsedInsight | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UsedInsight>(requestInfo, createUsedInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Calculate and list the documents that a user has viewed or modified.  For the signed-in user:- This method includes documents that the user has modified; see example 1. - Using an `$orderby` query parameter on the **lastAccessedDateTime** property returns the most recently viewed documents that the user might or might not not have modified; see example 2. For other users, this method includes only documents that the user has modified.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UsedRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to used for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UsedInsight | undefined, requestConfiguration?: UsedRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUsedInsight);
        return requestInfo;
    };
}
