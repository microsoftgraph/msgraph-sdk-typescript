/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FavoritePostRequestBody}
 */
// @ts-ignore
export function createFavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFavoritePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FavoritePostResponse}
 */
// @ts-ignore
export function createFavoritePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFavoritePostResponse;
}
/**
 * The deserialization information for the current model
 * @param FavoritePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFavoritePostRequestBody(favoritePostRequestBody: Partial<FavoritePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { favoritePostRequestBody.backingStoreEnabled = true; },
        "messageIds": n => { favoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @param FavoritePostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFavoritePostResponse(favoritePostResponse: Partial<FavoritePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { favoritePostResponse.backingStoreEnabled = true; },
        "value": n => { favoritePostResponse.value = n.getBooleanValue(); },
    }
}
export interface FavoritePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The messageIds property
     */
    messageIds?: string[] | null;
}
export interface FavoritePostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: boolean | null;
}
/**
 * Provides operations to call the favorite method.
 */
export interface FavoriteRequestBuilder extends BaseRequestBuilder<FavoriteRequestBuilder> {
    /**
     * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FavoritePostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/serviceupdatemessage-favorite?view=graph-rest-1.0|Find more info here}
     */
     post(body: FavoritePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FavoritePostResponse | undefined>;
    /**
     * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FavoritePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param FavoritePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFavoritePostRequestBody(writer: SerializationWriter, favoritePostRequestBody: Partial<FavoritePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!favoritePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("messageIds", favoritePostRequestBody.messageIds);
    writer.writeAdditionalData(favoritePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param FavoritePostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFavoritePostResponse(writer: SerializationWriter, favoritePostResponse: Partial<FavoritePostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!favoritePostResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", favoritePostResponse.value);
    writer.writeAdditionalData(favoritePostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const FavoriteRequestBuilderUriTemplate = "{+baseurl}/admin/serviceAnnouncement/messages/favorite";
/**
 * Metadata for all the requests in the request builder.
 */
export const FavoriteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: FavoriteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFavoritePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFavoritePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
