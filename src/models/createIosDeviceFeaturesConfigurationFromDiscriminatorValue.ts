import {deserializeIntoIosDeviceFeaturesConfiguration} from './deserializeIntoIosDeviceFeaturesConfiguration';
import {IosDeviceFeaturesConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosDeviceFeaturesConfiguration;
}
