import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryReviewTag} from '../../../../../../models/security/';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import {ChildTagsRequestBuilder} from './childTags/childTagsRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilder as Ie04ba6f0ce34de449e352ca037084834d656ce248273d13fdbcdf016b5e0ee16} from './childTags/item/ediscoveryReviewTagItemRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderPatchRequestConfiguration';
import {ParentRequestBuilder} from './parent/parentRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryReviewTagItemRequestBuilder {
    /** Provides operations to manage the childTags property of the microsoft.graph.security.ediscoveryReviewTag entity. */
    public get childTags(): ChildTagsRequestBuilder {
        return new ChildTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the parent property of the microsoft.graph.security.ediscoveryReviewTag entity. */
    public get parent(): ParentRequestBuilder {
        return new ParentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the childTags property of the microsoft.graph.security.ediscoveryReviewTag entity.
     * @param id Unique identifier of the item
     * @returns a EdiscoveryReviewTagItemRequestBuilder
     */
    public childTagsById(id: string) : Ie04ba6f0ce34de449e352ca037084834d656ce248273d13fdbcdf016b5e0ee16 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewTag%2Did1"] = id
        return new Ie04ba6f0ce34de449e352ca037084834d656ce248273d13fdbcdf016b5e0ee16(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoveryReviewTagItemRequestBuilder and sets the default values.
     * @param ediscoveryReviewTagId key: id of ediscoveryReviewTag
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, ediscoveryReviewTagId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags/{ediscoveryReviewTag%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["ediscoveryReviewTag%2Did"] = ediscoveryReviewTagId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property tags for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of ediscoveryReviewTag objects associated to this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTag
     */
    public get(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property tags in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTag
     */
    public patch(body: EdiscoveryReviewTag | undefined, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTag>(requestInfo, createEdiscoveryReviewTagFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property tags for security
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
     * Returns a list of ediscoveryReviewTag objects associated to this case.
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
     * Update the navigation property tags in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryReviewTag | undefined, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
