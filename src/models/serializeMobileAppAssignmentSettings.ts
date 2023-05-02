import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentSettings(writer: SerializationWriter, mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {} as MobileAppAssignmentSettings) : void {
        writer.writeStringValue("@odata.type", mobileAppAssignmentSettings.odataType);
        writer.writeAdditionalData(mobileAppAssignmentSettings.additionalData);
}
