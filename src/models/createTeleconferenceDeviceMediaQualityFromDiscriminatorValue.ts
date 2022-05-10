import {TeleconferenceDeviceMediaQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceMediaQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceMediaQualityImpl();
}
