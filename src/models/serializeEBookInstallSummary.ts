import {EBookInstallSummary} from './eBookInstallSummary';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEBookInstallSummary(writer: SerializationWriter, eBookInstallSummary: EBookInstallSummary | undefined = {} as EBookInstallSummary) : void {
        serializeEntity(writer, eBookInstallSummary)
        writer.writeNumberValue("failedDeviceCount", eBookInstallSummary.failedDeviceCount);
        writer.writeNumberValue("failedUserCount", eBookInstallSummary.failedUserCount);
        writer.writeNumberValue("installedDeviceCount", eBookInstallSummary.installedDeviceCount);
        writer.writeNumberValue("installedUserCount", eBookInstallSummary.installedUserCount);
        writer.writeNumberValue("notInstalledDeviceCount", eBookInstallSummary.notInstalledDeviceCount);
        writer.writeNumberValue("notInstalledUserCount", eBookInstallSummary.notInstalledUserCount);
}
