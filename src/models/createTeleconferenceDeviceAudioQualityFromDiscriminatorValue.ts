import {TeleconferenceDeviceAudioQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceAudioQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceAudioQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceAudioQuality();
}
