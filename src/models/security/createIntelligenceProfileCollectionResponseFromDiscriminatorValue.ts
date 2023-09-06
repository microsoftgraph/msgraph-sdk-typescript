import { deserializeIntoIntelligenceProfileCollectionResponse } from './deserializeIntoIntelligenceProfileCollectionResponse';
import { type IntelligenceProfileCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileCollectionResponse;
}
