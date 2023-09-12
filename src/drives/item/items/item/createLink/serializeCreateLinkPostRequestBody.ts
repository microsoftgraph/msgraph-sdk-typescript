import { type CreateLinkPostRequestBody } from './createLinkPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateLinkPostRequestBody(writer: SerializationWriter, createLinkPostRequestBody: CreateLinkPostRequestBody | undefined = {} as CreateLinkPostRequestBody) : void {
        writer.writeDateValue("expirationDateTime", createLinkPostRequestBody.expirationDateTime);
        writer.writeStringValue("message", createLinkPostRequestBody.message);
        writer.writeStringValue("password", createLinkPostRequestBody.password);
        writer.writeBooleanValue("retainInheritedPermissions", createLinkPostRequestBody.retainInheritedPermissions);
        writer.writeStringValue("scope", createLinkPostRequestBody.scope);
        writer.writeStringValue("type", createLinkPostRequestBody.type);
        writer.writeAdditionalData(createLinkPostRequestBody.additionalData);
}
