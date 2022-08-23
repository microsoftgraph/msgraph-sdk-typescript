import {IosGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosGeneralDeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosGeneralDeviceConfiguration();
}
