import { deserializeIntoWorkforceIntegration } from './deserializeIntoWorkforceIntegration';
import { type WorkforceIntegration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkforceIntegration;
}
