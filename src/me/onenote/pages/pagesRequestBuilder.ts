import {OnenotePageCollectionResponse} from '../../../models/';
import {createOnenotePageCollectionResponseFromDiscriminatorValue} from '../../../models/createOnenotePageCollectionResponseFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from '../../../models/createOnenotePageFromDiscriminatorValue';
import {deserializeIntoOnenotePage} from '../../../models/deserializeIntoOnenotePage';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {OnenotePage} from '../../../models/onenotePage';
import {serializeOnenotePage} from '../../../models/serializeOnenotePage';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OnenotePageItemRequestBuilder} from './item/onenotePageItemRequestBuilder';
import {PagesRequestBuilderGetRequestConfiguration} from './pagesRequestBuilderGetRequestConfiguration';
import {PagesRequestBuilderPostRequestConfiguration} from './pagesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pages property of the microsoft.graph.onenote entity.
 */
export class PagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pages property of the microsoft.graph.onenote entity.
     * @param onenotePageId The unique identifier of onenotePage
     * @returns a OnenotePageItemRequestBuilder
     */
    public byOnenotePageId(onenotePageId: string) : OnenotePageItemRequestBuilder {
        if(!onenotePageId) throw new Error("onenotePageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenotePage%2Did"] = onenotePageId
        return new OnenotePageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/onenote/pages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of page objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenotePageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/onenote-list-pages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PagesRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenotePageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenotePageCollectionResponse>(requestInfo, createOnenotePageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new OneNote page in the default section of the default notebook. To create a page in a different section in the default notebook, you can use the sectionName query parameter.  Example: ../onenote/pages?sectionName=My%20section The POST /onenote/pages operation is used only to create pages in the current user's default notebook. If you're targeting other notebooks, you can create pages in a specified section.  
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenotePage
     * @see {@link https://learn.microsoft.com/graph/api/onenote-post-pages?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OnenotePage, requestConfiguration?: PagesRequestBuilderPostRequestConfiguration | undefined) : Promise<OnenotePage | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenotePage>(requestInfo, createOnenotePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of page objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new OneNote page in the default section of the default notebook. To create a page in a different section in the default notebook, you can use the sectionName query parameter.  Example: ../onenote/pages?sectionName=My%20section The POST /onenote/pages operation is used only to create pages in the current user's default notebook. If you're targeting other notebooks, you can create pages in a specified section.  
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnenotePage, requestConfiguration?: PagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnenotePage);
        return requestInfo;
    };
}
