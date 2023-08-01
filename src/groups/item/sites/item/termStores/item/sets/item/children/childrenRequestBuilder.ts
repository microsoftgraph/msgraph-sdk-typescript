import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {TermCollectionResponse} from '../../../../../../../../../models/termStore/';
import {createTermCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../models/termStore/createTermCollectionResponseFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from '../../../../../../../../../models/termStore/createTermFromDiscriminatorValue';
import {deserializeIntoTerm} from '../../../../../../../../../models/termStore/deserializeIntoTerm';
import {serializeTerm} from '../../../../../../../../../models/termStore/serializeTerm';
import type {Term} from '../../../../../../../../../models/termStore/term';
import {ChildrenRequestBuilderGetRequestConfiguration} from './childrenRequestBuilderGetRequestConfiguration';
import {ChildrenRequestBuilderPostRequestConfiguration} from './childrenRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TermItemRequestBuilder} from './item/termItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the children property of the microsoft.graph.termStore.set entity.
 */
export class ChildrenRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the children property of the microsoft.graph.termStore.set entity.
     * @param termId Unique identifier of the item
     * @returns a TermItemRequestBuilder
     */
    public byTermId(termId: string) : TermItemRequestBuilder {
        if(!termId) throw new Error("termId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["term%2Did"] = termId
        return new TermItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ChildrenRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStores/{store%2Did}/sets/{set%2Did}/children{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the first level children of a [set] or [term] resource using the children navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/termstore-term-list-children?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChildrenRequestBuilderGetRequestConfiguration | undefined) : Promise<TermCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermCollectionResponse>(requestInfo, createTermCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new term object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Term
     * @see {@link https://learn.microsoft.com/graph/api/termstore-term-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Term | undefined, requestConfiguration?: ChildrenRequestBuilderPostRequestConfiguration | undefined) : Promise<Term | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Term>(requestInfo, createTermFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the first level children of a [set] or [term] resource using the children navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChildrenRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new term object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Term | undefined, requestConfiguration?: ChildrenRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTerm);
        return requestInfo;
    };
}
