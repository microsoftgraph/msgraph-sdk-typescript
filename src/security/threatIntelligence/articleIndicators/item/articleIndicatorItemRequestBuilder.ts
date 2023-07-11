import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {ArticleIndicator} from '../../../../models/security/articleIndicator';
import {createArticleIndicatorFromDiscriminatorValue} from '../../../../models/security/createArticleIndicatorFromDiscriminatorValue';
import {deserializeIntoArticleIndicator} from '../../../../models/security/deserializeIntoArticleIndicator';
import {serializeArticleIndicator} from '../../../../models/security/serializeArticleIndicator';
import {ArticleIndicatorItemRequestBuilderDeleteRequestConfiguration} from './articleIndicatorItemRequestBuilderDeleteRequestConfiguration';
import {ArticleIndicatorItemRequestBuilderGetRequestConfiguration} from './articleIndicatorItemRequestBuilderGetRequestConfiguration';
import {ArticleIndicatorItemRequestBuilderPatchRequestConfiguration} from './articleIndicatorItemRequestBuilderPatchRequestConfiguration';
import {ArtifactRequestBuilder} from './artifact/artifactRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the articleIndicators property of the microsoft.graph.security.threatIntelligence entity.
 */
export class ArticleIndicatorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the artifact property of the microsoft.graph.security.indicator entity.
     */
    public get artifact(): ArtifactRequestBuilder {
        return new ArtifactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ArticleIndicatorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/articleIndicators/{articleIndicator%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property articleIndicators for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ArticleIndicatorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the properties and relationships of an articleIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleIndicator
     * @see {@link https://docs.microsoft.com/graph/api/security-articleindicator-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ArticleIndicatorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ArticleIndicator | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArticleIndicator>(requestInfo, createArticleIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property articleIndicators in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleIndicator
     */
    public patch(body: ArticleIndicator | undefined, requestConfiguration?: ArticleIndicatorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ArticleIndicator | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArticleIndicator>(requestInfo, createArticleIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property articleIndicators for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ArticleIndicatorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read the properties and relationships of an articleIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ArticleIndicatorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property articleIndicators in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ArticleIndicator | undefined, requestConfiguration?: ArticleIndicatorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeArticleIndicator);
        return requestInfo;
    };
}
