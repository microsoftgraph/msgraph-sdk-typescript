import { deserializeIntoConfiguration } from './deserializeIntoConfiguration';
import { type Configuration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfiguration;
}
