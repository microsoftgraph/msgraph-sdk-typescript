import { type WindowsUpdateInstallScheduleType } from './windowsUpdateInstallScheduleType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateInstallScheduleType: WindowsUpdateInstallScheduleType | undefined = {} as WindowsUpdateInstallScheduleType) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsUpdateInstallScheduleType.odataType = n.getStringValue(); },
    }
}
