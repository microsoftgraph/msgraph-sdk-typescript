import { deserializeIntoServiceHealth } from './deserializeIntoServiceHealth';
import { type ServiceHealth } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHealthFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealth;
}
