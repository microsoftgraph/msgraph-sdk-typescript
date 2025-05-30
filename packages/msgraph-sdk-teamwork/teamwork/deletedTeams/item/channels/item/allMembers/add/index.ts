/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createActionResultPartFromDiscriminatorValue, createConversationMemberFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeActionResultPart, serializeBaseCollectionPaginationCountResponse, serializeConversationMember, type ActionResultPart, type BaseCollectionPaginationCountResponse, type ConversationMember } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The values property
     */
    values?: ConversationMember[] | null;
}
export interface AddPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ActionResultPart[] | null;
}
/**
 * Provides operations to call the add method.
 */
export interface AddRequestBuilder extends BaseRequestBuilder<AddRequestBuilder> {
    /**
     * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AddPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/conversationmembers-add?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AddPostResponse | undefined>;
    /**
     * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddPostRequestBody}
 */
// @ts-ignore
export function createAddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddPostResponse}
 */
// @ts-ignore
export function createAddPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAddPostRequestBody(addPostRequestBody: Partial<AddPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { addPostRequestBody.backingStoreEnabled = true; },
        "values": n => { addPostRequestBody.values = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAddPostResponse(addPostResponse: Partial<AddPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addPostResponse),
        "value": n => { addPostResponse.value = n.getCollectionOfObjectValues<ActionResultPart>(createActionResultPartFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: Partial<AddPostRequestBody> | undefined | null = {}) : void {
    if (addPostRequestBody) {
        writer.writeCollectionOfObjectValues<ConversationMember>("values", addPostRequestBody.values, serializeConversationMember);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAddPostResponse(writer: SerializationWriter, addPostResponse: Partial<AddPostResponse> | undefined | null = {}) : void {
    if (addPostResponse) {
        serializeBaseCollectionPaginationCountResponse(writer, addPostResponse)
        writer.writeCollectionOfObjectValues<ActionResultPart>("value", addPostResponse.value, serializeActionResultPart);
    }
}
/**
 * Uri template for the request builder.
 */
export const AddRequestBuilderUriTemplate = "{+baseurl}/teamwork/deletedTeams/{deletedTeam%2Did}/channels/{channel%2Did}/allMembers/add";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAddPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
