import { type DirectoryObjectCollectionResponse } from '../../../../../models/';
import { createDirectoryObjectFromDiscriminatorValue, deserializeIntoDirectoryObject, serializeDirectoryObject, type DirectoryObject } from '../../../../../models/directoryObject';
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue } from '../../../../../models/directoryObjectCollectionResponse';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { GetAvailableExtensionPropertiesRequestBuilder } from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import { GetByIdsRequestBuilder } from './getByIds/getByIdsRequestBuilder';
import { DirectoryObjectItemRequestBuilder } from './item/directoryObjectItemRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { ValidatePropertiesRequestBuilder } from './validateProperties/validatePropertiesRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface InternalSponsorsRequestBuilderGetQueryParameters {
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
export interface InternalSponsorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InternalSponsorsRequestBuilderGetQueryParameters;
}
export interface InternalSponsorsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the internalSponsors property of the microsoft.graph.connectedOrganization entity.
 */
export class InternalSponsorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of identityGovernance entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.connectedOrganizations.item.internalSponsors.item collection
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
     * Instantiates a new InternalSponsorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization%2Did}/internalSponsors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of a connectedOrganization's internal sponsors.  The internal sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObjectCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/connectedorganization-list-internalsponsors?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InternalSponsorsRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
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
     * Add a user or a group to the connected organization's internal sponsors. The internal sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     * @see {@link https://learn.microsoft.com/graph/api/connectedorganization-post-internalsponsors?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DirectoryObject, requestConfiguration?: InternalSponsorsRequestBuilderPostRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of a connectedOrganization's internal sponsors.  The internal sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InternalSponsorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add a user or a group to the connected organization's internal sponsors. The internal sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DirectoryObject, requestConfiguration?: InternalSponsorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDirectoryObject);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a internalSponsorsRequestBuilder
     */
    public withUrl(rawUrl: string) : InternalSponsorsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InternalSponsorsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
