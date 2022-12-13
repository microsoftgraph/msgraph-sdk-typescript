import {DeviceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEvidence();
}
