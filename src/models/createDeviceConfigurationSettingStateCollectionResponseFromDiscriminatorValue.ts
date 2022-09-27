import {DeviceConfigurationSettingStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationSettingStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationSettingStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationSettingStateCollectionResponse();
}
