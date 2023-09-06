import { type MobileAppAssignmentSettings } from './mobileAppAssignmentSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentSettings(writer: SerializationWriter, mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {} as MobileAppAssignmentSettings) : void {
        writer.writeStringValue("@odata.type", mobileAppAssignmentSettings.odataType);
        writer.writeAdditionalData(mobileAppAssignmentSettings.additionalData);
}
