import type {ValidatePropertiesPostRequestBody} from './validatePropertiesPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeValidatePropertiesPostRequestBody(writer: SerializationWriter, validatePropertiesPostRequestBody: ValidatePropertiesPostRequestBody | undefined = {} as ValidatePropertiesPostRequestBody) : void {
        writer.writeStringValue("displayName", validatePropertiesPostRequestBody.displayName);
        writer.writeStringValue("entityType", validatePropertiesPostRequestBody.entityType);
        writer.writeStringValue("mailNickname", validatePropertiesPostRequestBody.mailNickname);
        writer.writeGuidValue("onBehalfOfUserId", validatePropertiesPostRequestBody.onBehalfOfUserId);
        writer.writeAdditionalData(validatePropertiesPostRequestBody.additionalData);
}
