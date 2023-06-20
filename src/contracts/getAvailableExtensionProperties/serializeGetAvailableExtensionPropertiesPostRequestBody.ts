import {GetAvailableExtensionPropertiesPostRequestBody} from './getAvailableExtensionPropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAvailableExtensionPropertiesPostRequestBody(getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {} as GetAvailableExtensionPropertiesPostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isSyncedFromOnPremises", getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises);
        writer.writeAdditionalData(getAvailableExtensionPropertiesPostRequestBody.additionalData);
}
