import {DirectoryObjectCollectionResponse} from '../../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphAdministrativeUnitRequestBuilder} from './graphAdministrativeUnit/graphAdministrativeUnitRequestBuilder';
import {GraphDirectoryRoleRequestBuilder} from './graphDirectoryRole/graphDirectoryRoleRequestBuilder';
import {GraphGroupRequestBuilder} from './graphGroup/graphGroupRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilderGetRequestConfiguration} from './transitiveMemberOfRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.user entity.
 */
export class TransitiveMemberOfRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to administrativeUnit.
     */
    public get graphAdministrativeUnit(): GraphAdministrativeUnitRequestBuilder {
        return new GraphAdministrativeUnitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to directoryRole.
     */
    public get graphDirectoryRole(): GraphDirectoryRoleRequestBuilder {
        return new GraphDirectoryRoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to group.
     */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.user entity.
     * @param directoryObjectId Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder {
        if(!directoryObjectId) throw new Error("directoryObjectId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = directoryObjectId
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TransitiveMemberOfRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/transitiveMemberOf{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObjectCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/user-list-transitivememberof?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TransitiveMemberOfRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TransitiveMemberOfRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
