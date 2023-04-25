import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryReviewSet, EdiscoveryReviewSetCollectionResponse} from '../../../../../models/security/';
import {createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewSetFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryReviewSetItemRequestBuilder} from './item/ediscoveryReviewSetItemRequestBuilder';
import {ReviewSetsRequestBuilderGetRequestConfiguration} from './reviewSetsRequestBuilderGetRequestConfiguration';
import {ReviewSetsRequestBuilderPostRequestConfiguration} from './reviewSetsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class ReviewSetsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
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
     * Returns a list of eDiscoveryReviewSet objects in the case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetCollectionResponse
     */
    public get(requestConfiguration?: ReviewSetsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetCollectionResponse>(requestInfo, createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to reviewSets for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSet
     */
    public post(body: EdiscoveryReviewSet | undefined, requestConfiguration?: ReviewSetsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSet>(requestInfo, createEdiscoveryReviewSetFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of eDiscoveryReviewSet objects in the case.
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
     * Create new navigation property to reviewSets for security
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
