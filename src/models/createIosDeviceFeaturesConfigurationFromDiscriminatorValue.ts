import {IosDeviceFeaturesConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosDeviceFeaturesConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosDeviceFeaturesConfigurationImpl();
}
