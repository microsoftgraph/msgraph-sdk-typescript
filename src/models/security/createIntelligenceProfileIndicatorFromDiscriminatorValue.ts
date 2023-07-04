import {deserializeIntoIntelligenceProfileIndicator} from './deserializeIntoIntelligenceProfileIndicator';
import {IntelligenceProfileIndicator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileIndicatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileIndicator;
}
