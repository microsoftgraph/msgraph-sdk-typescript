import { type Contact } from './contact';
import { type Entity } from './entity';
import { type MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { type SingleValueLegacyExtendedProperty } from './singleValueLegacyExtendedProperty';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ContactFolder extends Entity, Parsable {
    /**
     * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     */
    childFolders?: ContactFolder[] | undefined;
    /**
     * The contacts in the folder. Navigation property. Read-only. Nullable.
     */
    contacts?: Contact[] | undefined;
    /**
     * The folder's display name.
     */
    displayName?: string | undefined;
    /**
     * The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
     */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * The ID of the folder's parent folder.
     */
    parentFolderId?: string | undefined;
    /**
     * The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
     */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
}
