import {IosDeviceFeaturesConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosDeviceFeaturesConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosDeviceFeaturesConfiguration();
}
