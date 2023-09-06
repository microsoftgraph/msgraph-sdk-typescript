import { deserializeIntoMacOSCustomConfiguration } from './deserializeIntoMacOSCustomConfiguration';
import { type MacOSCustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSCustomConfiguration;
}
