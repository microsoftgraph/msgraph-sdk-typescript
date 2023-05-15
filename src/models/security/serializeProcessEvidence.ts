import {DetectionStatus} from './detectionStatus';
import {FileDetails} from './fileDetails';
import {ProcessEvidence} from './processEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeFileDetails} from './serializeFileDetails';
import {serializeUserAccount} from './serializeUserAccount';
import {UserAccount} from './userAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProcessEvidence(writer: SerializationWriter, processEvidence: ProcessEvidence | undefined = {} as ProcessEvidence) : void {
        serializeAlertEvidence(writer, processEvidence)
        writer.writeEnumValue<DetectionStatus>("detectionStatus", processEvidence.detectionStatus);
        writer.writeObjectValue<FileDetails>("imageFile", processEvidence.imageFile, serializeFileDetails);
        writer.writeStringValue("mdeDeviceId", processEvidence.mdeDeviceId);
        writer.writeDateValue("parentProcessCreationDateTime", processEvidence.parentProcessCreationDateTime);
        writer.writeNumberValue("parentProcessId", processEvidence.parentProcessId);
        writer.writeObjectValue<FileDetails>("parentProcessImageFile", processEvidence.parentProcessImageFile, serializeFileDetails);
        writer.writeStringValue("processCommandLine", processEvidence.processCommandLine);
        writer.writeDateValue("processCreationDateTime", processEvidence.processCreationDateTime);
        writer.writeNumberValue("processId", processEvidence.processId);
        writer.writeObjectValue<UserAccount>("userAccount", processEvidence.userAccount, serializeUserAccount);
}
