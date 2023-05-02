import {deserializeIntoSearchHit} from './deserializeIntoSearchHit';
import {SearchHit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchHit;
}
