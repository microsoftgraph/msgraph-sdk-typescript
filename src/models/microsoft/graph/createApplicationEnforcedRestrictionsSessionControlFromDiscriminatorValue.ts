import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationEnforcedRestrictionsSessionControl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationEnforcedRestrictionsSessionControl();
}
