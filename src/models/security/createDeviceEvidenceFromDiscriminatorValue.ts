import {deserializeIntoDeviceEvidence} from './deserializeIntoDeviceEvidence';
import {DeviceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEvidence;
}
