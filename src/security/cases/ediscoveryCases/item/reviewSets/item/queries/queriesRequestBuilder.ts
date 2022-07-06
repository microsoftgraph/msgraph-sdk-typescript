import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryReviewSetQuery, EdiscoveryReviewSetQueryCollectionResponse} from '../../../../../../../models/security/';
import {createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {QueriesRequestBuilderGetRequestConfiguration} from './queriesRequestBuilderGetRequestConfiguration';
import {QueriesRequestBuilderPostRequestConfiguration} from './queriesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity. */
export class QueriesRequestBuilder {
    /** The count property */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new QueriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}/queries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: QueriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create new navigation property to queries for security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: QueriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQueryCollectionResponse
     */
    public get(requestConfiguration?: QueriesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQueryCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQueryCollectionResponse>(requestInfo, createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Create new navigation property to queries for security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQuery
     */
    public post(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: QueriesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQuery>(requestInfo, createEdiscoveryReviewSetQueryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
