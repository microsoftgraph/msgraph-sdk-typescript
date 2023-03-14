import {ConditionalAccessEnumeratedExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessEnumeratedExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessEnumeratedExternalTenants {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessEnumeratedExternalTenants();
}
