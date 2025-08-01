/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFileEncryptionInfoFromDiscriminatorValue, serializeFileEncryptionInfo, type FileEncryptionInfo } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CommitPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The fileEncryptionInfo property
     */
    fileEncryptionInfo?: FileEncryptionInfo | null;
}
/**
 * Provides operations to call the commit method.
 */
export interface CommitRequestBuilder extends BaseRequestBuilder<CommitRequestBuilder> {
    /**
     * Commits a file of a given app.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CommitPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Commits a file of a given app.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CommitPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CommitPostRequestBody}
 */
// @ts-ignore
export function createCommitPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCommitPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param CommitPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCommitPostRequestBody(commitPostRequestBody: Partial<CommitPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { commitPostRequestBody.backingStoreEnabled = true; },
        "fileEncryptionInfo": n => { commitPostRequestBody.fileEncryptionInfo = n.getObjectValue<FileEncryptionInfo>(createFileEncryptionInfoFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param CommitPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCommitPostRequestBody(writer: SerializationWriter, commitPostRequestBody: Partial<CommitPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!commitPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<FileEncryptionInfo>("fileEncryptionInfo", commitPostRequestBody.fileEncryptionInfo, serializeFileEncryptionInfo);
    writer.writeAdditionalData(commitPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CommitRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.managedIOSLobApp/contentVersions/{mobileAppContent%2Did}/files/{mobileAppContentFile%2Did}/commit";
/**
 * Metadata for all the requests in the request builder.
 */
export const CommitRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CommitRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCommitPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
