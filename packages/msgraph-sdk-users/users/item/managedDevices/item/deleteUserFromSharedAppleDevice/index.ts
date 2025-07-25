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
 * @returns {DeleteUserFromSharedAppleDevicePostRequestBody}
 */
// @ts-ignore
export function createDeleteUserFromSharedAppleDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody;
}
export interface DeleteUserFromSharedAppleDevicePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The userPrincipalName property
     */
    userPrincipalName?: string | null;
}
/**
 * Provides operations to call the deleteUserFromSharedAppleDevice method.
 */
export interface DeleteUserFromSharedAppleDeviceRequestBuilder extends BaseRequestBuilder<DeleteUserFromSharedAppleDeviceRequestBuilder> {
    /**
     * Delete user from shared Apple device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-manageddevice-deleteuserfromsharedappledevice?view=graph-rest-1.0|Find more info here}
     */
     post(body: DeleteUserFromSharedAppleDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Delete user from shared Apple device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeleteUserFromSharedAppleDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @param DeleteUserFromSharedAppleDevicePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDeleteUserFromSharedAppleDevicePostRequestBody(deleteUserFromSharedAppleDevicePostRequestBody: Partial<DeleteUserFromSharedAppleDevicePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { deleteUserFromSharedAppleDevicePostRequestBody.backingStoreEnabled = true; },
        "userPrincipalName": n => { deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param DeleteUserFromSharedAppleDevicePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDeleteUserFromSharedAppleDevicePostRequestBody(writer: SerializationWriter, deleteUserFromSharedAppleDevicePostRequestBody: Partial<DeleteUserFromSharedAppleDevicePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!deleteUserFromSharedAppleDevicePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("userPrincipalName", deleteUserFromSharedAppleDevicePostRequestBody.userPrincipalName);
    writer.writeAdditionalData(deleteUserFromSharedAppleDevicePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DeleteUserFromSharedAppleDeviceRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/deleteUserFromSharedAppleDevice";
/**
 * Metadata for all the requests in the request builder.
 */
export const DeleteUserFromSharedAppleDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DeleteUserFromSharedAppleDeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeleteUserFromSharedAppleDevicePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
