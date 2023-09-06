import { deserializeIntoUsedInsight } from './deserializeIntoUsedInsight';
import { type UsedInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUsedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsedInsight;
}
