import {ChildSelectability} from './childSelectability';
import {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {serializeTag} from './serializeTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewTag(writer: SerializationWriter, ediscoveryReviewTag: EdiscoveryReviewTag | undefined = {} as EdiscoveryReviewTag) : void {
        serializeTag(writer, ediscoveryReviewTag)
        writer.writeEnumValue<ChildSelectability>("childSelectability", ediscoveryReviewTag.childSelectability);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("childTags", ediscoveryReviewTag.childTags, serializeEdiscoveryReviewTag);
        writer.writeObjectValue<EdiscoveryReviewTag>("parent", ediscoveryReviewTag.parent, serializeEdiscoveryReviewTag);
}
