import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {Process} from './process';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {serializeFileHash} from './serializeFileHash';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProcess(process: Process | undefined = {} as Process) : Record<string, (node: ParseNode) => void> {
    return {
        "accountName": n => { process.accountName = n.getStringValue(); },
        "commandLine": n => { process.commandLine = n.getStringValue(); },
        "createdDateTime": n => { process.createdDateTime = n.getDateValue(); },
        "fileHash": n => { process.fileHash = n.getObjectValue<FileHash>(createFileHashFromDiscriminatorValue); },
        "integrityLevel": n => { process.integrityLevel = n.getEnumValue<ProcessIntegrityLevel>(ProcessIntegrityLevel); },
        "isElevated": n => { process.isElevated = n.getBooleanValue(); },
        "name": n => { process.name = n.getStringValue(); },
        "@odata.type": n => { process.odataType = n.getStringValue(); },
        "parentProcessCreatedDateTime": n => { process.parentProcessCreatedDateTime = n.getDateValue(); },
        "parentProcessId": n => { process.parentProcessId = n.getNumberValue(); },
        "parentProcessName": n => { process.parentProcessName = n.getStringValue(); },
        "path": n => { process.path = n.getStringValue(); },
        "processId": n => { process.processId = n.getNumberValue(); },
    }
}
