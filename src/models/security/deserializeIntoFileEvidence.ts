import { createFileDetailsFromDiscriminatorValue } from './createFileDetailsFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { DetectionStatus } from './detectionStatus';
import { type FileDetails } from './fileDetails';
import { type FileEvidence } from './fileEvidence';
import { serializeFileDetails } from './serializeFileDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileEvidence(fileEvidence: FileEvidence | undefined = {} as FileEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(fileEvidence),
        "detectionStatus": n => { fileEvidence.detectionStatus = n.getEnumValue<DetectionStatus>(DetectionStatus); },
        "fileDetails": n => { fileEvidence.fileDetails = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
        "mdeDeviceId": n => { fileEvidence.mdeDeviceId = n.getStringValue(); },
    }
}
