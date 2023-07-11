import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppScope extends Entity, Parsable {
    /**
     * Provides the display name of the app-specific resource represented by the app scope. Provided for display purposes since appScopeId is often an immutable, non-human-readable id. Read-only.
     */
    displayName?: string | undefined;
    /**
     * Describes the type of app-specific resource represented by the app scope. Provided for display purposes, so a user interface can convey to the user the kind of app specific resource represented by the app scope. Read-only.
     */
    type?: string | undefined;
}
