import {WindowsPhone81GeneralConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81GeneralConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81GeneralConfigurationImpl();
}
