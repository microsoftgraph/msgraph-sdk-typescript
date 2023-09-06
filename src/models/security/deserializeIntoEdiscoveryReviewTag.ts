import { ChildSelectability } from './childSelectability';
import { createEdiscoveryReviewTagFromDiscriminatorValue } from './createEdiscoveryReviewTagFromDiscriminatorValue';
import { deserializeIntoTag } from './deserializeIntoTag';
import { type EdiscoveryReviewTag } from './ediscoveryReviewTag';
import { serializeEdiscoveryReviewTag } from './serializeEdiscoveryReviewTag';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewTag(ediscoveryReviewTag: EdiscoveryReviewTag | undefined = {} as EdiscoveryReviewTag) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTag(ediscoveryReviewTag),
        "childSelectability": n => { ediscoveryReviewTag.childSelectability = n.getEnumValue<ChildSelectability>(ChildSelectability); },
        "childTags": n => { ediscoveryReviewTag.childTags = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        "parent": n => { ediscoveryReviewTag.parent = n.getObjectValue<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
