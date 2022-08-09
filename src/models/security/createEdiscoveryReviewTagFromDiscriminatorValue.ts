import {EdiscoveryReviewTag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewTagFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryReviewTag {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryReviewTag();
}
