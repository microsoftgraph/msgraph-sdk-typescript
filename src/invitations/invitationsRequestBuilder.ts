import {InvitationCollectionResponse} from '../models/';
import {createInvitationCollectionResponseFromDiscriminatorValue} from '../models/createInvitationCollectionResponseFromDiscriminatorValue';
import {createInvitationFromDiscriminatorValue} from '../models/createInvitationFromDiscriminatorValue';
import {deserializeIntoInvitation} from '../models/deserializeIntoInvitation';
import type {Invitation} from '../models/invitation';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeInvitation} from '../models/serializeInvitation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InvitationsRequestBuilderGetRequestConfiguration} from './invitationsRequestBuilderGetRequestConfiguration';
import {InvitationsRequestBuilderPostRequestConfiguration} from './invitationsRequestBuilderPostRequestConfiguration';
import {InvitationItemRequestBuilder} from './item/invitationItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of invitation entities.
 */
export class InvitationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of invitation entities.
     * @param invitationId The unique identifier of invitation
     * @returns a InvitationItemRequestBuilder
     */
    public byInvitationId(invitationId: string) : InvitationItemRequestBuilder {
        if(!invitationId) throw new Error("invitationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["invitation%2Did"] = invitationId
        return new InvitationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InvitationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/invitations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from invitations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InvitationCollectionResponse
     */
    public get(requestConfiguration?: InvitationsRequestBuilderGetRequestConfiguration | undefined) : Promise<InvitationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InvitationCollectionResponse>(requestInfo, createInvitationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to create a new invitation. Invitation adds an external user to the organization. When creating a new invitation you have several options available:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Invitation
     * @see {@link https://learn.microsoft.com/graph/api/invitation-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Invitation, requestConfiguration?: InvitationsRequestBuilderPostRequestConfiguration | undefined) : Promise<Invitation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Invitation>(requestInfo, createInvitationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from invitations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InvitationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new invitation. Invitation adds an external user to the organization. When creating a new invitation you have several options available:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Invitation, requestConfiguration?: InvitationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInvitation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a invitationsRequestBuilder
     */
    public withUrl(rawUrl: string) : InvitationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InvitationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
