import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import {deserializeIntoEdiscoveryReviewTag} from '../../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import type {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import {ChildTagsRequestBuilder} from './childTags/childTagsRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderPatchRequestConfiguration';
import {ParentRequestBuilder} from './parent/parentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryReviewTagItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the childTags property of the microsoft.graph.security.ediscoveryReviewTag entity.
     */
    public get childTags(): ChildTagsRequestBuilder {
        return new ChildTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parent property of the microsoft.graph.security.ediscoveryReviewTag entity.
     */
    public get parent(): ParentRequestBuilder {
        return new ParentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryReviewTagItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags/{ediscoveryReviewTag%2Did}{?%24select,%24expand}");
    };
    /**
     * Remove an ediscoveryReviewTag object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycase-delete-tags?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an ediscoveryReviewTag object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewTag
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewtag-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an ediscoveryReviewTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewTag
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewtag-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EdiscoveryReviewTag, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove an ediscoveryReviewTag object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an ediscoveryReviewTag object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an ediscoveryReviewTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryReviewTag, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryReviewTag);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EdiscoveryReviewTagItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EdiscoveryReviewTagItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EdiscoveryReviewTagItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
