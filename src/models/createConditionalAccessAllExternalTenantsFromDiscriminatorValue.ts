import {deserializeIntoConditionalAccessAllExternalTenants} from './deserializeIntoConditionalAccessAllExternalTenants';
import {ConditionalAccessAllExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessAllExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessAllExternalTenants;
}
