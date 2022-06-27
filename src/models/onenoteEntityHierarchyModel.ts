import {IdentitySet} from './identitySet';
import {OnenoteEntitySchemaObjectModel} from './onenoteEntitySchemaObjectModel';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityHierarchyModel extends Partial<AdditionalDataHolder>, OnenoteEntitySchemaObjectModel, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identity of the user, device, and application which created the item. Read-only. */
    createdBy?: IdentitySet | undefined;
    /** The name of the notebook. */
    displayName?: string | undefined;
    /** Identity of the user, device, and application which created the item. Read-only. */
    lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    lastModifiedDateTime?: Date | undefined;
}
