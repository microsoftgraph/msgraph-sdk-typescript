import {OnenoteResourceCollectionResponse} from '../../../../../../models/';
import {createOnenoteResourceCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createOnenoteResourceCollectionResponseFromDiscriminatorValue';
import {createOnenoteResourceFromDiscriminatorValue} from '../../../../../../models/createOnenoteResourceFromDiscriminatorValue';
import {deserializeIntoOnenoteResource} from '../../../../../../models/deserializeIntoOnenoteResource';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {OnenoteResource} from '../../../../../../models/onenoteResource';
import {serializeOnenoteResource} from '../../../../../../models/serializeOnenoteResource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OnenoteResourceItemRequestBuilder} from './item/onenoteResourceItemRequestBuilder';
import {ResourcesRequestBuilderGetRequestConfiguration} from './resourcesRequestBuilderGetRequestConfiguration';
import {ResourcesRequestBuilderPostRequestConfiguration} from './resourcesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.onenote entity.
 */
export class ResourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.onenote entity.
     * @param onenoteResourceId The unique identifier of onenoteResource
     * @returns a OnenoteResourceItemRequestBuilder
     */
    public byOnenoteResourceId(onenoteResourceId: string) : OnenoteResourceItemRequestBuilder {
        if(!onenoteResourceId) throw new Error("onenoteResourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteResource%2Did"] = onenoteResourceId
        return new OnenoteResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/resources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteResourceCollectionResponse
     */
    public get(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenoteResourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteResourceCollectionResponse>(requestInfo, createOnenoteResourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resources for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteResource
     */
    public post(body: OnenoteResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<OnenoteResource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteResource>(requestInfo, createOnenoteResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resources for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnenoteResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnenoteResource);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resourcesRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourcesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourcesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
