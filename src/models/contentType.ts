import {ColumnDefinition} from './columnDefinition';
import {ColumnLink} from './columnLink';
import {ContentTypeOrder} from './contentTypeOrder';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {Entity} from './entity';
import {ItemReference} from './itemReference';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentType extends Entity, Parsable {
    /**
     * List of canonical URLs for hub sites with which this content type is associated to. This will contain all hub sites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.
     */
    associatedHubsUrls?: string[] | undefined;
    /**
     * Parent contentType from which this content type is derived.
     */
    base?: ContentType | undefined;
    /**
     * The collection of content types that are ancestors of this content type.
     */
    baseTypes?: ContentType[] | undefined;
    /**
     * The collection of columns that are required by this content type.
     */
    columnLinks?: ColumnLink[] | undefined;
    /**
     * Column order information in a content type.
     */
    columnPositions?: ColumnDefinition[] | undefined;
    /**
     * The collection of column definitions for this contentType.
     */
    columns?: ColumnDefinition[] | undefined;
    /**
     * The descriptive text for the item.
     */
    description?: string | undefined;
    /**
     * Document Set metadata.
     */
    documentSet?: DocumentSet | undefined;
    /**
     * Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.
     */
    documentTemplate?: DocumentSetContent | undefined;
    /**
     * The name of the group this content type belongs to. Helps organize related content types.
     */
    group?: string | undefined;
    /**
     * Indicates whether the content type is hidden in the list's 'New' menu.
     */
    hidden?: boolean | undefined;
    /**
     * If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     */
    inheritedFrom?: ItemReference | undefined;
    /**
     * Specifies if a content type is a built-in content type.
     */
    isBuiltIn?: boolean | undefined;
    /**
     * The name of the content type.
     */
    name?: string | undefined;
    /**
     * Specifies the order in which the content type appears in the selection UI.
     */
    order?: ContentTypeOrder | undefined;
    /**
     * The unique identifier of the content type.
     */
    parentId?: string | undefined;
    /**
     * If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.
     */
    propagateChanges?: boolean | undefined;
    /**
     * If true, the content type can't be modified unless this value is first set to false.
     */
    readOnly?: boolean | undefined;
    /**
     * If true, the content type can't be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     */
    sealed?: boolean | undefined;
}
