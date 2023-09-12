import { deserializeIntoSharedPCConfiguration } from './deserializeIntoSharedPCConfiguration';
import { type SharedPCConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedPCConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedPCConfiguration;
}
