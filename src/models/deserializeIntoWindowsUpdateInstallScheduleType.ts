import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateInstallScheduleType: WindowsUpdateInstallScheduleType | undefined = {} as WindowsUpdateInstallScheduleType) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsUpdateInstallScheduleType.odataType = n.getStringValue(); },
    }
}
