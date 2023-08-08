import {createFileDetailsFromDiscriminatorValue} from './createFileDetailsFromDiscriminatorValue';
import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {DetectionStatus} from './detectionStatus';
import type {FileDetails} from './fileDetails';
import type {ProcessEvidence} from './processEvidence';
import {serializeFileDetails} from './serializeFileDetails';
import {serializeUserAccount} from './serializeUserAccount';
import type {UserAccount} from './userAccount';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProcessEvidence(processEvidence: ProcessEvidence | undefined = {} as ProcessEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(processEvidence),
        "detectionStatus": n => { processEvidence.detectionStatus = n.getEnumValue<DetectionStatus>(DetectionStatus); },
        "imageFile": n => { processEvidence.imageFile = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
        "mdeDeviceId": n => { processEvidence.mdeDeviceId = n.getStringValue(); },
        "parentProcessCreationDateTime": n => { processEvidence.parentProcessCreationDateTime = n.getDateValue(); },
        "parentProcessId": n => { processEvidence.parentProcessId = n.getNumberValue(); },
        "parentProcessImageFile": n => { processEvidence.parentProcessImageFile = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
        "processCommandLine": n => { processEvidence.processCommandLine = n.getStringValue(); },
        "processCreationDateTime": n => { processEvidence.processCreationDateTime = n.getDateValue(); },
        "processId": n => { processEvidence.processId = n.getNumberValue(); },
        "userAccount": n => { processEvidence.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
    }
}
