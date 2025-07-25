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
 * @returns {WipePostRequestBody}
 */
// @ts-ignore
export function createWipePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWipePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param WipePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWipePostRequestBody(wipePostRequestBody: Partial<WipePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { wipePostRequestBody.backingStoreEnabled = true; },
        "keepEnrollmentData": n => { wipePostRequestBody.keepEnrollmentData = n.getBooleanValue(); },
        "keepUserData": n => { wipePostRequestBody.keepUserData = n.getBooleanValue(); },
        "macOsUnlockCode": n => { wipePostRequestBody.macOsUnlockCode = n.getStringValue(); },
        "persistEsimDataPlan": n => { wipePostRequestBody.persistEsimDataPlan = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param WipePostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWipePostRequestBody(writer: SerializationWriter, wipePostRequestBody: Partial<WipePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!wipePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("keepEnrollmentData", wipePostRequestBody.keepEnrollmentData);
    writer.writeBooleanValue("keepUserData", wipePostRequestBody.keepUserData);
    writer.writeStringValue("macOsUnlockCode", wipePostRequestBody.macOsUnlockCode);
    writer.writeBooleanValue("persistEsimDataPlan", wipePostRequestBody.persistEsimDataPlan);
    writer.writeAdditionalData(wipePostRequestBody.additionalData);
}
export interface WipePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The keepEnrollmentData property
     */
    keepEnrollmentData?: boolean | null;
    /**
     * The keepUserData property
     */
    keepUserData?: boolean | null;
    /**
     * The macOsUnlockCode property
     */
    macOsUnlockCode?: string | null;
    /**
     * The persistEsimDataPlan property
     */
    persistEsimDataPlan?: boolean | null;
}
/**
 * Provides operations to call the wipe method.
 */
export interface WipeRequestBuilder extends BaseRequestBuilder<WipeRequestBuilder> {
    /**
     * Wipe a device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-manageddevice-wipe?view=graph-rest-1.0|Find more info here}
     */
     post(body: WipePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Wipe a device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WipePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WipeRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/wipe";
/**
 * Metadata for all the requests in the request builder.
 */
export const WipeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: WipeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWipePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
