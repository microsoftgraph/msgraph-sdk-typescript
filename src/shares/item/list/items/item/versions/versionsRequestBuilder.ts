import {ListItemVersion, ListItemVersionCollectionResponse} from '../../../../../../models/';
import {createListItemVersionCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createListItemVersionCollectionResponseFromDiscriminatorValue';
import {createListItemVersionFromDiscriminatorValue} from '../../../../../../models/createListItemVersionFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ListItemVersionItemRequestBuilder} from './item/listItemVersionItemRequestBuilder';
import {VersionsRequestBuilderGetRequestConfiguration} from './versionsRequestBuilderGetRequestConfiguration';
import {VersionsRequestBuilderPostRequestConfiguration} from './versionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
 */
export class VersionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
     * @param listItemVersionId Unique identifier of the item
     * @returns a ListItemVersionItemRequestBuilder
     */
    public byListItemVersionId(listItemVersionId: string) : ListItemVersionItemRequestBuilder {
        if(!listItemVersionId) throw new Error("listItemVersionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["listItemVersion%2Did"] = listItemVersionId
        return new ListItemVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/list/items/{listItem%2Did}/versions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of previous versions of the list item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ListItemVersionCollectionResponse
     */
    public get(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ListItemVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ListItemVersionCollectionResponse>(requestInfo, createListItemVersionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to versions for shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ListItemVersion
     */
    public post(body: ListItemVersion | undefined, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ListItemVersion | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ListItemVersion>(requestInfo, createListItemVersionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of previous versions of the list item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to versions for shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ListItemVersion | undefined, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
