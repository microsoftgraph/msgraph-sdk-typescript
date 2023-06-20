import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentSettings(mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {} as MobileAppAssignmentSettings, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", mobileAppAssignmentSettings.odataType);
        writer.writeAdditionalData(mobileAppAssignmentSettings.additionalData);
}
