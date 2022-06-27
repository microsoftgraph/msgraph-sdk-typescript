import {TeleconferenceDeviceAudioQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceAudioQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceAudioQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceAudioQualityImpl();
}
