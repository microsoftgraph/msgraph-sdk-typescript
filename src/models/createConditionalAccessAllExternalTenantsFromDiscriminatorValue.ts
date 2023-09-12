import { deserializeIntoConditionalAccessAllExternalTenants } from './deserializeIntoConditionalAccessAllExternalTenants';
import { type ConditionalAccessAllExternalTenants } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessAllExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessAllExternalTenants;
}
