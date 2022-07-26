import {MacOSCustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCustomConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCustomConfiguration();
}
