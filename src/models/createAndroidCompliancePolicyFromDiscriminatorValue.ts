import {AndroidCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidCompliancePolicyImpl();
}
