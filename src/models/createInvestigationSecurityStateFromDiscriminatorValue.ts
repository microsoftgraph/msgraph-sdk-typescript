import { deserializeIntoInvestigationSecurityState } from './deserializeIntoInvestigationSecurityState';
import { type InvestigationSecurityState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInvestigationSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvestigationSecurityState;
}
