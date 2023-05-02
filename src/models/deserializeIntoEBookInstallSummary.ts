import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EBookInstallSummary} from './eBookInstallSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEBookInstallSummary(eBookInstallSummary: EBookInstallSummary | undefined = {} as EBookInstallSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(eBookInstallSummary),
        "failedDeviceCount": n => { eBookInstallSummary.failedDeviceCount = n.getNumberValue(); },
        "failedUserCount": n => { eBookInstallSummary.failedUserCount = n.getNumberValue(); },
        "installedDeviceCount": n => { eBookInstallSummary.installedDeviceCount = n.getNumberValue(); },
        "installedUserCount": n => { eBookInstallSummary.installedUserCount = n.getNumberValue(); },
        "notInstalledDeviceCount": n => { eBookInstallSummary.notInstalledDeviceCount = n.getNumberValue(); },
        "notInstalledUserCount": n => { eBookInstallSummary.notInstalledUserCount = n.getNumberValue(); },
    }
}
