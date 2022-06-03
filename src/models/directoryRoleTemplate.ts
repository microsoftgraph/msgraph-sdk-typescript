import {DirectoryObject} from './directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplate extends DirectoryObject, Partial<Parsable> {
    /** The description to set for the directory role. Read-only. */
    description?: string | undefined;
    /** The display name to set for the directory role. Read-only. */
    displayName?: string | undefined;
}
