import {deserializeIntoTeleconferenceDeviceQuality} from './deserializeIntoTeleconferenceDeviceQuality';
import {TeleconferenceDeviceQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeleconferenceDeviceQuality;
}
