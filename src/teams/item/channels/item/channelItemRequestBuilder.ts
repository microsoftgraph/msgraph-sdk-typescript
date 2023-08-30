import type {Channel} from '../../../../models/channel';
import {createChannelFromDiscriminatorValue} from '../../../../models/createChannelFromDiscriminatorValue';
import {deserializeIntoChannel} from '../../../../models/deserializeIntoChannel';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeChannel} from '../../../../models/serializeChannel';
import {ChannelItemRequestBuilderDeleteRequestConfiguration} from './channelItemRequestBuilderDeleteRequestConfiguration';
import {ChannelItemRequestBuilderGetRequestConfiguration} from './channelItemRequestBuilderGetRequestConfiguration';
import {ChannelItemRequestBuilderPatchRequestConfiguration} from './channelItemRequestBuilderPatchRequestConfiguration';
import {CompleteMigrationRequestBuilder} from './completeMigration/completeMigrationRequestBuilder';
import {DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder} from './doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalName/doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder';
import {FilesFolderRequestBuilder} from './filesFolder/filesFolderRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {ProvisionEmailRequestBuilder} from './provisionEmail/provisionEmailRequestBuilder';
import {RemoveEmailRequestBuilder} from './removeEmail/removeEmailRequestBuilder';
import {SharedWithTeamsRequestBuilder} from './sharedWithTeams/sharedWithTeamsRequestBuilder';
import {TabsRequestBuilder} from './tabs/tabsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the channels property of the microsoft.graph.team entity.
 */
export class ChannelItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the completeMigration method.
     */
    public get completeMigration(): CompleteMigrationRequestBuilder {
        return new CompleteMigrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the doesUserHaveAccess method.
     */
    public get doesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalName(): DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder {
        return new DoesUserHaveAccessuserIdUserIdTenantIdTenantIdUserPrincipalNameUserPrincipalNameRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
     */
    public get filesFolder(): FilesFolderRequestBuilder {
        return new FilesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.channel entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messages property of the microsoft.graph.channel entity.
     */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the provisionEmail method.
     */
    public get provisionEmail(): ProvisionEmailRequestBuilder {
        return new ProvisionEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the removeEmail method.
     */
    public get removeEmail(): RemoveEmailRequestBuilder {
        return new RemoveEmailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
     */
    public get sharedWithTeams(): SharedWithTeamsRequestBuilder {
        return new SharedWithTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
     */
    public get tabs(): TabsRequestBuilder {
        return new TabsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ChannelItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/channels/{channel%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete the channel.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/channel-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ChannelItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Channel
     * @see {@link https://learn.microsoft.com/graph/api/channel-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChannelItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Channel | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Channel>(requestInfo, createChannelFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of the specified channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Channel
     * @see {@link https://learn.microsoft.com/graph/api/channel-patch?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Channel, requestConfiguration?: ChannelItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Channel | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Channel>(requestInfo, createChannelFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the channel.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ChannelItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChannelItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of the specified channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Channel, requestConfiguration?: ChannelItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChannel);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ChannelItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ChannelItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ChannelItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
