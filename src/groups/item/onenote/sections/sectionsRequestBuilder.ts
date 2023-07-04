import {OnenoteSectionCollectionResponse} from '../../../../models/';
import {createOnenoteSectionCollectionResponseFromDiscriminatorValue} from '../../../../models/createOnenoteSectionCollectionResponseFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from '../../../../models/createOnenoteSectionFromDiscriminatorValue';
import {deserializeIntoOnenoteSection} from '../../../../models/deserializeIntoOnenoteSection';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {OnenoteSection} from '../../../../models/onenoteSection';
import {serializeOnenoteSection} from '../../../../models/serializeOnenoteSection';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OnenoteSectionItemRequestBuilder} from './item/onenoteSectionItemRequestBuilder';
import {SectionsRequestBuilderGetRequestConfiguration} from './sectionsRequestBuilderGetRequestConfiguration';
import {SectionsRequestBuilderPostRequestConfiguration} from './sectionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sections property of the microsoft.graph.onenote entity.
 */
export class SectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sections property of the microsoft.graph.onenote entity.
     * @param onenoteSectionId Unique identifier of the item
     * @returns a OnenoteSectionItemRequestBuilder
     */
    public byOnenoteSectionId(onenoteSectionId: string) : OnenoteSectionItemRequestBuilder {
        if(!onenoteSectionId) throw new Error("onenoteSectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteSection%2Did"] = onenoteSectionId
        return new OnenoteSectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/onenote/sections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of onenoteSection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSectionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/onenote-list-sections?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenoteSectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSectionCollectionResponse>(requestInfo, createOnenoteSectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to sections for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSection
     */
    public post(body: OnenoteSection | undefined, requestConfiguration?: SectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<OnenoteSection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSection>(requestInfo, createOnenoteSectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of onenoteSection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sections for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnenoteSection | undefined, requestConfiguration?: SectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOnenoteSection);
        return requestInfo;
    };
}
