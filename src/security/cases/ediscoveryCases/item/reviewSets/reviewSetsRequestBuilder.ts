import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryReviewSetCollectionResponse} from '../../../../../models/security/';
import {createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewSetFromDiscriminatorValue';
import {deserializeIntoEdiscoveryReviewSet} from '../../../../../models/security/deserializeIntoEdiscoveryReviewSet';
import type {EdiscoveryReviewSet} from '../../../../../models/security/ediscoveryReviewSet';
import {serializeEdiscoveryReviewSet} from '../../../../../models/security/serializeEdiscoveryReviewSet';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryReviewSetItemRequestBuilder} from './item/ediscoveryReviewSetItemRequestBuilder';
import {ReviewSetsRequestBuilderGetRequestConfiguration} from './reviewSetsRequestBuilderGetRequestConfiguration';
import {ReviewSetsRequestBuilderPostRequestConfiguration} from './reviewSetsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class ReviewSetsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity.
     * @param ediscoveryReviewSetId Unique identifier of the item
     * @returns a EdiscoveryReviewSetItemRequestBuilder
     */
    public byEdiscoveryReviewSetId(ediscoveryReviewSetId: string) : EdiscoveryReviewSetItemRequestBuilder {
        if(!ediscoveryReviewSetId) throw new Error("ediscoveryReviewSetId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewSet%2Did"] = ediscoveryReviewSetId
        return new EdiscoveryReviewSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ReviewSetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of ediscoveryReviewSet objects associated with an eDiscovery case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-list-reviewsets?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ReviewSetsRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewSetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSetCollectionResponse>(requestInfo, createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryReviewSet object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSet
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-post-reviewsets?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryReviewSet | undefined, requestConfiguration?: ReviewSetsRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryReviewSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSet>(requestInfo, createEdiscoveryReviewSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of ediscoveryReviewSet objects associated with an eDiscovery case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ReviewSetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryReviewSet object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryReviewSet | undefined, requestConfiguration?: ReviewSetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewSet);
        return requestInfo;
    };
}
