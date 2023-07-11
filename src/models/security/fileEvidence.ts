import {AlertEvidence} from './alertEvidence';
import {DetectionStatus} from './detectionStatus';
import {FileDetails} from './fileDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileEvidence extends AlertEvidence, Parsable {
    /**
     * The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue.
     */
    detectionStatus?: DetectionStatus | undefined;
    /**
     * The file details.
     */
    fileDetails?: FileDetails | undefined;
    /**
     * A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     */
    mdeDeviceId?: string | undefined;
}
