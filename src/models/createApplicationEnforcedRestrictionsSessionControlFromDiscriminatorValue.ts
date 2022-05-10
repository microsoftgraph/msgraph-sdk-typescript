import {ApplicationEnforcedRestrictionsSessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationEnforcedRestrictionsSessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationEnforcedRestrictionsSessionControlImpl();
}
