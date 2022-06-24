import {IosCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCompliancePolicyImpl();
}
