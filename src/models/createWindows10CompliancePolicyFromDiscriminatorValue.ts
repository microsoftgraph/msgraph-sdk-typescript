import {Windows10CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CompliancePolicy();
}
