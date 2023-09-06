import { deserializeIntoIosGeneralDeviceConfiguration } from './deserializeIntoIosGeneralDeviceConfiguration';
import { type IosGeneralDeviceConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosGeneralDeviceConfiguration;
}
