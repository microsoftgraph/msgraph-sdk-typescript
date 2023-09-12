import { deserializeIntoRunSummary } from './deserializeIntoRunSummary';
import { type RunSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRunSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunSummary;
}
