import {AlertEvidence} from './alertEvidence';
import {DetectionStatus} from './detectionStatus';
import {FileDetails} from './fileDetails';
import {UserAccount} from './userAccount';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProcessEvidence extends AlertEvidence, Parsable {
    /**
     * The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue.
     */
    detectionStatus?: DetectionStatus | undefined;
    /**
     * Image file details.
     */
    imageFile?: FileDetails | undefined;
    /**
     * A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     */
    mdeDeviceId?: string | undefined;
    /**
     * Date and time when the parent of the process was created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    parentProcessCreationDateTime?: Date | undefined;
    /**
     * Process ID (PID) of the parent process that spawned the process.
     */
    parentProcessId?: number | undefined;
    /**
     * Parent process image file details.
     */
    parentProcessImageFile?: FileDetails | undefined;
    /**
     * Command line used to create the new process.
     */
    processCommandLine?: string | undefined;
    /**
     * Date and time when the process was created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    processCreationDateTime?: Date | undefined;
    /**
     * Process ID (PID) of the newly created process.
     */
    processId?: number | undefined;
    /**
     * User details of the user that ran the process.
     */
    userAccount?: UserAccount | undefined;
}
