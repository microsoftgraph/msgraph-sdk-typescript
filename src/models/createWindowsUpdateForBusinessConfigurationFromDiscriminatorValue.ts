import {WindowsUpdateForBusinessConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateForBusinessConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateForBusinessConfigurationImpl();
}
