import { deserializeIntoCompliance } from './deserializeIntoCompliance';
import { type Compliance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createComplianceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCompliance;
}
