import { deserializeIntoIntelligenceProfileIndicator } from './deserializeIntoIntelligenceProfileIndicator';
import { type IntelligenceProfileIndicator } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileIndicatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileIndicator;
}
