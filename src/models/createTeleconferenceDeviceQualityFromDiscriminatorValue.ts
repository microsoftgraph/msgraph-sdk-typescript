import {TeleconferenceDeviceQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceQualityImpl();
}
