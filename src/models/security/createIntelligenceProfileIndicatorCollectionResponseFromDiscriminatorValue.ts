import { deserializeIntoIntelligenceProfileIndicatorCollectionResponse } from './deserializeIntoIntelligenceProfileIndicatorCollectionResponse';
import { type IntelligenceProfileIndicatorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileIndicatorCollectionResponse;
}
