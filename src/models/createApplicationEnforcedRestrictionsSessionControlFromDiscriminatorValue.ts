import {deserializeIntoApplicationEnforcedRestrictionsSessionControl} from './deserializeIntoApplicationEnforcedRestrictionsSessionControl';
import {ApplicationEnforcedRestrictionsSessionControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationEnforcedRestrictionsSessionControl;
}
