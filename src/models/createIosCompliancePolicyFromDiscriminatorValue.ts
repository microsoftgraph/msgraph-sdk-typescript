import {IosCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCompliancePolicy();
}
