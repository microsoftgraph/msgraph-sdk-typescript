import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateInstallScheduleType(writer: SerializationWriter, windowsUpdateInstallScheduleType: WindowsUpdateInstallScheduleType | undefined = {} as WindowsUpdateInstallScheduleType) : void {
        writer.writeStringValue("@odata.type", windowsUpdateInstallScheduleType.odataType);
        writer.writeAdditionalData(windowsUpdateInstallScheduleType.additionalData);
}
