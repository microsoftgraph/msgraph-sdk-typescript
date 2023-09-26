import { type ScopedRoleMembershipCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createScopedRoleMembershipFromDiscriminatorValue, deserializeIntoScopedRoleMembership, serializeScopedRoleMembership, type ScopedRoleMembership } from '../../../models/scopedRoleMembership';
import { createScopedRoleMembershipCollectionResponseFromDiscriminatorValue } from '../../../models/scopedRoleMembershipCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ScopedRoleMembershipItemRequestBuilder } from './item/scopedRoleMembershipItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ScopedMembersRequestBuilderGetQueryParameters {
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
export interface ScopedMembersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ScopedMembersRequestBuilderGetQueryParameters;
}
export interface ScopedMembersRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the scopedMembers property of the microsoft.graph.directoryRole entity.
 */
export class ScopedMembersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopedMembers property of the microsoft.graph.directoryRole entity.
     * @param scopedRoleMembershipId The unique identifier of scopedRoleMembership
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public byScopedRoleMembershipId(scopedRoleMembershipId: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!scopedRoleMembershipId) throw new Error("scopedRoleMembershipId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = scopedRoleMembershipId
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScopedMembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryRoles/{directoryRole%2Did}/scopedMembers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of scopedRoleMembership objects for a directory role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembershipCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryrole-list-scopedmembers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ScopedMembersRequestBuilderGetRequestConfiguration | undefined) : Promise<ScopedRoleMembershipCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembershipCollectionResponse>(requestInfo, createScopedRoleMembershipCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to scopedMembers for directoryRoles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembership
     */
    public post(body: ScopedRoleMembership, requestConfiguration?: ScopedMembersRequestBuilderPostRequestConfiguration | undefined) : Promise<ScopedRoleMembership | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembership>(requestInfo, createScopedRoleMembershipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of scopedRoleMembership objects for a directory role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScopedMembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scopedMembers for directoryRoles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ScopedRoleMembership, requestConfiguration?: ScopedMembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeScopedRoleMembership);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a scopedMembersRequestBuilder
     */
    public withUrl(rawUrl: string) : ScopedMembersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ScopedMembersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
