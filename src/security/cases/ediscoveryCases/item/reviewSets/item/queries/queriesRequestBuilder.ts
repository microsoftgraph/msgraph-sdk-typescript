import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryReviewSetQueryCollectionResponse} from '../../../../../../../models/security/';
import {createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {deserializeIntoEdiscoveryReviewSetQuery} from '../../../../../../../models/security/deserializeIntoEdiscoveryReviewSetQuery';
import {EdiscoveryReviewSetQuery} from '../../../../../../../models/security/ediscoveryReviewSetQuery';
import {serializeEdiscoveryReviewSetQuery} from '../../../../../../../models/security/serializeEdiscoveryReviewSetQuery';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryReviewSetQueryItemRequestBuilder} from './item/ediscoveryReviewSetQueryItemRequestBuilder';
import {QueriesRequestBuilderGetRequestConfiguration} from './queriesRequestBuilderGetRequestConfiguration';
import {QueriesRequestBuilderPostRequestConfiguration} from './queriesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity.
 */
export class QueriesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity.
     * @param ediscoveryReviewSetQueryId Unique identifier of the item
     * @returns a EdiscoveryReviewSetQueryItemRequestBuilder
     */
    public byEdiscoveryReviewSetQueryId(ediscoveryReviewSetQueryId: string) : EdiscoveryReviewSetQueryItemRequestBuilder {
        if(!ediscoveryReviewSetQueryId) throw new Error("ediscoveryReviewSetQueryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewSetQuery%2Did"] = ediscoveryReviewSetQueryId
        return new EdiscoveryReviewSetQueryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new QueriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}/queries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQueryCollectionResponse
     */
    public get(requestConfiguration?: QueriesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQueryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQueryCollectionResponse>(requestInfo, createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to queries for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQuery
     */
    public post(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: QueriesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQuery>(requestInfo, createEdiscoveryReviewSetQueryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: QueriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to queries for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: QueriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewSetQuery);
        return requestInfo;
    };
}
