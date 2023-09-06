import { deserializeIntoSearchHit } from './deserializeIntoSearchHit';
import { type SearchHit } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchHitFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchHit;
}
