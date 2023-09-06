import { deserializeIntoConditionalAccessEnumeratedExternalTenants } from './deserializeIntoConditionalAccessEnumeratedExternalTenants';
import { type ConditionalAccessEnumeratedExternalTenants } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessEnumeratedExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessEnumeratedExternalTenants;
}
