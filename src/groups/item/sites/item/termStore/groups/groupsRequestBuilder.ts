import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {GroupCollectionResponse} from '../../../../../../models/termStore/';
import {createGroupCollectionResponseFromDiscriminatorValue} from '../../../../../../models/termStore/createGroupCollectionResponseFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from '../../../../../../models/termStore/createGroupFromDiscriminatorValue';
import {deserializeIntoGroup} from '../../../../../../models/termStore/deserializeIntoGroup';
import type {Group} from '../../../../../../models/termStore/group';
import {serializeGroup} from '../../../../../../models/termStore/serializeGroup';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GroupsRequestBuilderGetRequestConfiguration} from './groupsRequestBuilderGetRequestConfiguration';
import {GroupsRequestBuilderPostRequestConfiguration} from './groupsRequestBuilderPostRequestConfiguration';
import {GroupItemRequestBuilder} from './item/groupItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groups property of the microsoft.graph.termStore.store entity.
 */
export class GroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the groups property of the microsoft.graph.termStore.store entity.
     * @param groupId1 Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public byGroupId1(groupId1: string) : GroupItemRequestBuilder {
        if(!groupId1) throw new Error("groupId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did1"] = groupId1
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStore/groups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of group objects in a term store.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/termstore-list-groups?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: GroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupCollectionResponse | undefined> {
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
     * Create a new group object in a term store.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Group
     * @see {@link https://learn.microsoft.com/graph/api/termstore-group-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Group, requestConfiguration?: GroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<Group | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Group>(requestInfo, createGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of group objects in a term store.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new group object in a term store.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Group, requestConfiguration?: GroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGroup);
        return requestInfo;
    };
}
