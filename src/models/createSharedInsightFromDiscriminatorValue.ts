import { deserializeIntoSharedInsight } from './deserializeIntoSharedInsight';
import { type SharedInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedInsight;
}
