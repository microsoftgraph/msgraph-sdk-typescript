import { type ValidatePermissionPostRequestBody } from './validatePermissionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeValidatePermissionPostRequestBody(writer: SerializationWriter, validatePermissionPostRequestBody: ValidatePermissionPostRequestBody | undefined = {} as ValidatePermissionPostRequestBody) : void {
        writer.writeStringValue("challengeToken", validatePermissionPostRequestBody.challengeToken);
        writer.writeStringValue("password", validatePermissionPostRequestBody.password);
        writer.writeAdditionalData(validatePermissionPostRequestBody.additionalData);
}
