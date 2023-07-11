import {ChildSelectability} from './childSelectability';
import {Tag} from './tag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewTag extends Parsable, Tag {
    /**
     * Indicates whether a single or multiple child tags can be associated with a document. Possible values are: One, Many.  This value controls whether the UX presents the tags as checkboxes or a radio button group.
     */
    childSelectability?: ChildSelectability | undefined;
    /**
     * Returns the tags that are a child of a tag.
     */
    childTags?: EdiscoveryReviewTag[] | undefined;
    /**
     * Returns the parent tag of the specified tag.
     */
    parent?: EdiscoveryReviewTag | undefined;
}
