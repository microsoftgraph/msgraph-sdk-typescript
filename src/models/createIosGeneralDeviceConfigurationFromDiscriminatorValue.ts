import {deserializeIntoIosGeneralDeviceConfiguration} from './deserializeIntoIosGeneralDeviceConfiguration';
import {IosGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosGeneralDeviceConfiguration;
}
