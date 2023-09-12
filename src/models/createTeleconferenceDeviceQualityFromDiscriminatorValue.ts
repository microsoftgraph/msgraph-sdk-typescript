import { deserializeIntoTeleconferenceDeviceQuality } from './deserializeIntoTeleconferenceDeviceQuality';
import { type TeleconferenceDeviceQuality } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceQuality;
}
