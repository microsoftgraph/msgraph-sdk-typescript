/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDirectoryObject, type BaseCollectionPaginationCountResponse, type DirectoryObject } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetByIdsPostRequestBody}
 */
// @ts-ignore
export function createGetByIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetByIdsPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetByIdsPostResponse}
 */
// @ts-ignore
export function createGetByIdsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetByIdsPostResponse;
}
/**
 * The deserialization information for the current model
 * @param GetByIdsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetByIdsPostRequestBody(getByIdsPostRequestBody: Partial<GetByIdsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getByIdsPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { getByIdsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "types": n => { getByIdsPostRequestBody.types = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @param GetByIdsPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetByIdsPostResponse(getByIdsPostResponse: Partial<GetByIdsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getByIdsPostResponse),
        "value": n => { getByIdsPostResponse.value = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
export interface GetByIdsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The ids property
     */
    ids?: string[] | null;
    /**
     * The types property
     */
    types?: string[] | null;
}
export interface GetByIdsPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryObject[] | null;
}
/**
 * Provides operations to call the getByIds method.
 */
export interface GetByIdsRequestBuilder extends BaseRequestBuilder<GetByIdsRequestBuilder> {
    /**
     * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetByIdsPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getbyids?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetByIdsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetByIdsPostResponse | undefined>;
    /**
     * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetByIdsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetByIdsPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetByIdsPostRequestBody(writer: SerializationWriter, getByIdsPostRequestBody: Partial<GetByIdsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getByIdsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("ids", getByIdsPostRequestBody.ids);
    writer.writeCollectionOfPrimitiveValues<string>("types", getByIdsPostRequestBody.types);
    writer.writeAdditionalData(getByIdsPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param GetByIdsPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetByIdsPostResponse(writer: SerializationWriter, getByIdsPostResponse: Partial<GetByIdsPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getByIdsPostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, getByIdsPostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<DirectoryObject>("value", getByIdsPostResponse.value, serializeDirectoryObject);
}
/**
 * Uri template for the request builder.
 */
export const GetByIdsRequestBuilderUriTemplate = "{+baseurl}/groupSettingTemplates/getByIds";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetByIdsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetByIdsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetByIdsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetByIdsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
