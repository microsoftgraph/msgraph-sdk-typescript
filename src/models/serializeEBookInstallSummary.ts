import { type EBookInstallSummary } from './eBookInstallSummary';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEBookInstallSummary(writer: SerializationWriter, eBookInstallSummary: EBookInstallSummary | undefined = {} as EBookInstallSummary) : void {
        serializeEntity(writer, eBookInstallSummary)
        writer.writeNumberValue("failedDeviceCount", eBookInstallSummary.failedDeviceCount);
        writer.writeNumberValue("failedUserCount", eBookInstallSummary.failedUserCount);
        writer.writeNumberValue("installedDeviceCount", eBookInstallSummary.installedDeviceCount);
        writer.writeNumberValue("installedUserCount", eBookInstallSummary.installedUserCount);
        writer.writeNumberValue("notInstalledDeviceCount", eBookInstallSummary.notInstalledDeviceCount);
        writer.writeNumberValue("notInstalledUserCount", eBookInstallSummary.notInstalledUserCount);
}
