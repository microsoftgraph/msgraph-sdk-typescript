import type {GetAvailableExtensionPropertiesPostRequestBody} from './getAvailableExtensionPropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAvailableExtensionPropertiesPostRequestBody(writer: SerializationWriter, getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {} as GetAvailableExtensionPropertiesPostRequestBody) : void {
        writer.writeBooleanValue("isSyncedFromOnPremises", getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises);
        writer.writeAdditionalData(getAvailableExtensionPropertiesPostRequestBody.additionalData);
}
