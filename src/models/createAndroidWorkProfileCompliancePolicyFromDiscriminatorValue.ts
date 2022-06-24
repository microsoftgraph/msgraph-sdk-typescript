import {AndroidWorkProfileCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCompliancePolicyImpl();
}
