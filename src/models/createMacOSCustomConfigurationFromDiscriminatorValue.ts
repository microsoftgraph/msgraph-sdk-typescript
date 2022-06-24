import {MacOSCustomConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCustomConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCustomConfigurationImpl();
}
