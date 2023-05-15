import {deserializeIntoConditionalAccessEnumeratedExternalTenants} from './deserializeIntoConditionalAccessEnumeratedExternalTenants';
import {ConditionalAccessEnumeratedExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessEnumeratedExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessEnumeratedExternalTenants;
}
