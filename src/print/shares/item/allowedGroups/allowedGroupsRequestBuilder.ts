import { type GroupCollectionResponse } from '../../../../models/';
import { createGroupCollectionResponseFromDiscriminatorValue } from '../../../../models/groupCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GroupItemRequestBuilder } from './item/groupItemRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AllowedGroupsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AllowedGroupsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: AllowedGroupsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the allowedGroups property of the microsoft.graph.printerShare entity.
 */
export class AllowedGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of print entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.shares.item.allowedGroups.item collection
     * @param groupId Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public byGroupId(groupId: string) : GroupItemRequestBuilder {
        if(!groupId) throw new Error("groupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did"] = groupId
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AllowedGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/shares/{printerShare%2Did}/allowedGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/printershare-list-allowedgroups?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AllowedGroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupCollectionResponse>(requestInfo, createGroupCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllowedGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a allowedGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : AllowedGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AllowedGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
