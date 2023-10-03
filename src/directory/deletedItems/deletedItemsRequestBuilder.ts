import { type DirectoryObjectCollectionResponse } from '../../models/';
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue } from '../../models/directoryObjectCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GraphAdministrativeUnitRequestBuilder } from './graphAdministrativeUnit/graphAdministrativeUnitRequestBuilder';
import { GraphApplicationRequestBuilder } from './graphApplication/graphApplicationRequestBuilder';
import { GraphDeviceRequestBuilder } from './graphDevice/graphDeviceRequestBuilder';
import { GraphGroupRequestBuilder } from './graphGroup/graphGroupRequestBuilder';
import { GraphServicePrincipalRequestBuilder } from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import { GraphUserRequestBuilder } from './graphUser/graphUserRequestBuilder';
import { DirectoryObjectItemRequestBuilder } from './item/directoryObjectItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeletedItemsRequestBuilderGetQueryParameters {
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
export interface DeletedItemsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeletedItemsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the deletedItems property of the microsoft.graph.directory entity.
 */
export class DeletedItemsRequestBuilder extends BaseRequestBuilder {
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
     * Casts the previous resource to application.
     */
    public get graphApplication(): GraphApplicationRequestBuilder {
        return new GraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to device.
     */
    public get graphDevice(): GraphDeviceRequestBuilder {
        return new GraphDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to group.
     */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to servicePrincipal.
     */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to user.
     */
    public get graphUser(): GraphUserRequestBuilder {
        return new GraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deletedItems property of the microsoft.graph.directory entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder {
        if(!directoryObjectId) throw new Error("directoryObjectId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = directoryObjectId
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeletedItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/deletedItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObjectCollectionResponse
     */
    public get(requestConfiguration?: DeletedItemsRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
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
     * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeletedItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a deletedItemsRequestBuilder
     */
    public withUrl(rawUrl: string) : DeletedItemsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeletedItemsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
