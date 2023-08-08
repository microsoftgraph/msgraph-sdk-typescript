import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryReviewTagCollectionResponse} from '../../../../../models/security/';
import {createEdiscoveryReviewTagCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewTagCollectionResponseFromDiscriminatorValue';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import {deserializeIntoEdiscoveryReviewTag} from '../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import type {EdiscoveryReviewTag} from '../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../models/security/serializeEdiscoveryReviewTag';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilder} from './item/ediscoveryReviewTagItemRequestBuilder';
import {MicrosoftGraphSecurityAsHierarchyRequestBuilder} from './microsoftGraphSecurityAsHierarchy/microsoftGraphSecurityAsHierarchyRequestBuilder';
import {TagsRequestBuilderGetRequestConfiguration} from './tagsRequestBuilderGetRequestConfiguration';
import {TagsRequestBuilderPostRequestConfiguration} from './tagsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class TagsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the asHierarchy method.
     */
    public get microsoftGraphSecurityAsHierarchy(): MicrosoftGraphSecurityAsHierarchyRequestBuilder {
        return new MicrosoftGraphSecurityAsHierarchyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity.
     * @param ediscoveryReviewTagId Unique identifier of the item
     * @returns a EdiscoveryReviewTagItemRequestBuilder
     */
    public byEdiscoveryReviewTagId(ediscoveryReviewTagId: string) : EdiscoveryReviewTagItemRequestBuilder {
        if(!ediscoveryReviewTagId) throw new Error("ediscoveryReviewTagId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewTag%2Did"] = ediscoveryReviewTagId
        return new EdiscoveryReviewTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TagsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of eDiscoveryReviewTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewTagCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-list-tags?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewTagCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewTagCollectionResponse>(requestInfo, createEdiscoveryReviewTagCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new ediscoveryReviewTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewTag
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-post-tags?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EdiscoveryReviewTag, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of eDiscoveryReviewTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryReviewTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EdiscoveryReviewTag, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryReviewTag);
        return requestInfo;
    };
}
