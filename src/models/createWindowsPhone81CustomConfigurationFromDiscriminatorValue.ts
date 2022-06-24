import {WindowsPhone81CustomConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81CustomConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81CustomConfigurationImpl();
}
