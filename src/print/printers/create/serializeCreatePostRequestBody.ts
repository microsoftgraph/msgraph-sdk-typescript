import type {PrintCertificateSigningRequest} from '../../../models/printCertificateSigningRequest';
import {serializePrintCertificateSigningRequest} from '../../../models/serializePrintCertificateSigningRequest';
import type {CreatePostRequestBody} from './createPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreatePostRequestBody(writer: SerializationWriter, createPostRequestBody: CreatePostRequestBody | undefined = {} as CreatePostRequestBody) : void {
        writer.writeObjectValue<PrintCertificateSigningRequest>("certificateSigningRequest", createPostRequestBody.certificateSigningRequest, serializePrintCertificateSigningRequest);
        writer.writeStringValue("connectorId", createPostRequestBody.connectorId);
        writer.writeStringValue("displayName", createPostRequestBody.displayName);
        writer.writeBooleanValue("hasPhysicalDevice", createPostRequestBody.hasPhysicalDevice);
        writer.writeStringValue("manufacturer", createPostRequestBody.manufacturer);
        writer.writeStringValue("model", createPostRequestBody.model);
        writer.writeStringValue("physicalDeviceId", createPostRequestBody.physicalDeviceId);
        writer.writeAdditionalData(createPostRequestBody.additionalData);
}
