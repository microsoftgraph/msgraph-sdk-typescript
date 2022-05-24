import {Entity} from './entity';

export interface AppScope extends Entity{
    /** Provides the display name of the app-specific resource represented by the app scope. Provided for display purposes since appScopeId is often an immutable, non-human-readable id. This property is read only. */
    displayName?:string | undefined;
    /** Describes the type of app-specific resource represented by the app scope. Provided for display purposes, so a user interface can convey to the user the kind of app specific resource represented by the app scope. This property is read only. */
    type?:string | undefined;
}
