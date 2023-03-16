import {ConditionalAccessAllExternalTenants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessAllExternalTenantsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessAllExternalTenants {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessAllExternalTenants();
}
