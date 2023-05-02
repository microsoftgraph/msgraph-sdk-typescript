import {ChildSelectability} from './childSelectability';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from './createEdiscoveryReviewTagFromDiscriminatorValue';
import {deserializeIntoTag} from './deserializeIntoTag';
import {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewTag(ediscoveryReviewTag: EdiscoveryReviewTag | undefined = {} as EdiscoveryReviewTag) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTag(ediscoveryReviewTag),
        "childSelectability": n => { ediscoveryReviewTag.childSelectability = n.getEnumValue<ChildSelectability>(ChildSelectability); },
        "childTags": n => { ediscoveryReviewTag.childTags = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        "parent": n => { ediscoveryReviewTag.parent = n.getObjectValue<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
