import {DeviceConfigurationUserActivityResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserActivityResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationUserActivityResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationUserActivityResponseMember1();
}
