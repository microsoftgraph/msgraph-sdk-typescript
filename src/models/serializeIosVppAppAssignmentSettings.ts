import {IosVppAppAssignmentSettings} from './iosVppAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppAppAssignmentSettings(iosVppAppAssignmentSettings: IosVppAppAssignmentSettings | undefined = {} as IosVppAppAssignmentSettings, writer: SerializationWriter) : void {
        serializeMobileAppAssignmentSettings(writer, iosVppAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceLicensing", iosVppAppAssignmentSettings.useDeviceLicensing);
        writer.writeStringValue("vpnConfigurationId", iosVppAppAssignmentSettings.vpnConfigurationId);
}
