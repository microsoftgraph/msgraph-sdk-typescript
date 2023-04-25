import {DirectoryObjectCollectionResponse} from '../../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphApplicationRequestBuilder} from './graphApplication/graphApplicationRequestBuilder';
import {GraphDeviceRequestBuilder} from './graphDevice/graphDeviceRequestBuilder';
import {GraphGroupRequestBuilder} from './graphGroup/graphGroupRequestBuilder';
import {GraphOrgContactRequestBuilder} from './graphOrgContact/graphOrgContactRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import {GraphUserRequestBuilder} from './graphUser/graphUserRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilderGetRequestConfiguration} from './ownersRequestBuilderGetRequestConfiguration';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the owners property of the microsoft.graph.group entity.
 */
export class OwnersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to application. */
    public get graphApplication(): GraphApplicationRequestBuilder {
        return new GraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to device. */
    public get graphDevice(): GraphDeviceRequestBuilder {
        return new GraphDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to group. */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to orgContact. */
    public get graphOrgContact(): GraphOrgContactRequestBuilder {
        return new GraphOrgContactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to servicePrincipal. */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get graphUser(): GraphUserRequestBuilder {
        return new GraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of group entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.owners.item collection
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
     * Instantiates a new OwnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/owners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryObjectCollectionResponse
     */
    public get(requestConfiguration?: OwnersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The owners of the group. Limited to 100 owners. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OwnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
