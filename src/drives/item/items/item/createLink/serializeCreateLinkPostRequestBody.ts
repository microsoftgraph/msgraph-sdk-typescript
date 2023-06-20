import {CreateLinkPostRequestBody} from './createLinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateLinkPostRequestBody(createLinkPostRequestBody: CreateLinkPostRequestBody | undefined = {} as CreateLinkPostRequestBody, writer: SerializationWriter) : void {
        writer.writeDateValue("expirationDateTime", createLinkPostRequestBody.expirationDateTime);
        writer.writeStringValue("message", createLinkPostRequestBody.message);
        writer.writeStringValue("password", createLinkPostRequestBody.password);
        writer.writeBooleanValue("retainInheritedPermissions", createLinkPostRequestBody.retainInheritedPermissions);
        writer.writeStringValue("scope", createLinkPostRequestBody.scope);
        writer.writeStringValue("type", createLinkPostRequestBody.type);
        writer.writeAdditionalData(createLinkPostRequestBody.additionalData);
}
