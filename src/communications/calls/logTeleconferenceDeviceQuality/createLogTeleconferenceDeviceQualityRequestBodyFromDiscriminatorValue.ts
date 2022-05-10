import {LogTeleconferenceDeviceQualityRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogTeleconferenceDeviceQualityRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogTeleconferenceDeviceQualityRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogTeleconferenceDeviceQualityRequestBodyImpl();
}
