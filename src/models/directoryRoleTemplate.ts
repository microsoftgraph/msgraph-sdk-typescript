import { type DirectoryObject } from './directoryObject';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplate extends DirectoryObject, Parsable {
    /**
     * The description to set for the directory role. Read-only.
     */
    description?: string | undefined;
    /**
     * The display name to set for the directory role. Read-only.
     */
    displayName?: string | undefined;
}
