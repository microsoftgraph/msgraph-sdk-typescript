import {Windows10CompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CompliancePolicyImpl();
}
