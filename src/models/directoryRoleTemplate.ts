import {DirectoryObject} from './directoryObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplate extends Partial<AdditionalDataHolder>, DirectoryObject, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The description to set for the directory role. Read-only. */
    description?: string | undefined;
    /** The display name to set for the directory role. Read-only. */
    displayName?: string | undefined;
}
