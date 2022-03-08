import {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceQuality();
}
