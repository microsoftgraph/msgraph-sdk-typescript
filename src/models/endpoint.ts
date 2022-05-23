import {DirectoryObject} from './directoryObject';

export interface Endpoint extends DirectoryObject{
    /** Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.) Not nullable. Read-only. */
    capability?:string | undefined;
    /** Application id of the publishing underlying service. Not nullable. Read-only. */
    providerId?:string | undefined;
    /** Name of the publishing underlying service. Read-only. */
    providerName?:string | undefined;
    /** For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only. */
    providerResourceId?:string | undefined;
    /** URL of the published resource. Not nullable. Read-only. */
    uri?:string | undefined;
}
