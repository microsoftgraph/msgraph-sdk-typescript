import { deserializeIntoUnifiedGroupSource } from './deserializeIntoUnifiedGroupSource';
import { type UnifiedGroupSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedGroupSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedGroupSource;
}
