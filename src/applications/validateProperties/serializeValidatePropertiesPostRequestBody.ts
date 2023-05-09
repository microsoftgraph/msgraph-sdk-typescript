import {ValidatePropertiesPostRequestBody} from './validatePropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeValidatePropertiesPostRequestBody(writer: SerializationWriter, validatePropertiesPostRequestBody: ValidatePropertiesPostRequestBody | undefined = {} as ValidatePropertiesPostRequestBody) : void {
        writer.writeStringValue("displayName", validatePropertiesPostRequestBody.displayName);
        writer.writeStringValue("entityType", validatePropertiesPostRequestBody.entityType);
        writer.writeStringValue("mailNickname", validatePropertiesPostRequestBody.mailNickname);
        writer.writeStringValue("onBehalfOfUserId", validatePropertiesPostRequestBody.onBehalfOfUserId);
        writer.writeAdditionalData(validatePropertiesPostRequestBody.additionalData);
}
