import { deserializeIntoIosDeviceFeaturesConfiguration } from './deserializeIntoIosDeviceFeaturesConfiguration';
import { type IosDeviceFeaturesConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosDeviceFeaturesConfiguration;
}
