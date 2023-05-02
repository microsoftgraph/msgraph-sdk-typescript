import {deserializeIntoMacOSCustomConfiguration} from './deserializeIntoMacOSCustomConfiguration';
import {MacOSCustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSCustomConfiguration;
}
