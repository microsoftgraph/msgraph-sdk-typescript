import { deserializeIntoDeviceEvidence } from './deserializeIntoDeviceEvidence';
import { type DeviceEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEvidence;
}
