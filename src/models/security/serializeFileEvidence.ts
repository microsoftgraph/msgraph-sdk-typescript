import {DetectionStatus} from './detectionStatus';
import {FileDetails} from './fileDetails';
import {FileEvidence} from './fileEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeFileDetails} from './serializeFileDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileEvidence(fileEvidence: FileEvidence | undefined = {} as FileEvidence, writer: SerializationWriter) : void {
        serializeAlertEvidence(writer, fileEvidence)
        writer.writeEnumValue<DetectionStatus>("detectionStatus", fileEvidence.detectionStatus);
        writer.writeObjectValue<FileDetails>("fileDetails", fileEvidence.fileDetails, serializeFileDetails);
        writer.writeStringValue("mdeDeviceId", fileEvidence.mdeDeviceId);
}
