import {FileHash} from './fileHash';
import {Process} from './process';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {serializeFileHash} from './serializeFileHash';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProcess(writer: SerializationWriter, process: Process | undefined = {} as Process) : void {
        writer.writeStringValue("accountName", process.accountName);
        writer.writeStringValue("commandLine", process.commandLine);
        writer.writeDateValue("createdDateTime", process.createdDateTime);
        writer.writeObjectValue<FileHash>("fileHash", process.fileHash, serializeFileHash);
        writer.writeEnumValue<ProcessIntegrityLevel>("integrityLevel", process.integrityLevel);
        writer.writeBooleanValue("isElevated", process.isElevated);
        writer.writeStringValue("name", process.name);
        writer.writeStringValue("@odata.type", process.odataType);
        writer.writeDateValue("parentProcessCreatedDateTime", process.parentProcessCreatedDateTime);
        writer.writeNumberValue("parentProcessId", process.parentProcessId);
        writer.writeStringValue("parentProcessName", process.parentProcessName);
        writer.writeStringValue("path", process.path);
        writer.writeNumberValue("processId", process.processId);
        writer.writeAdditionalData(process.additionalData);
}
