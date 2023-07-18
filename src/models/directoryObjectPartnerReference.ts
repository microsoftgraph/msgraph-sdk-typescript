import {DirectoryObject} from './directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface DirectoryObjectPartnerReference extends DirectoryObject, Parsable {
    /**
     * Description of the object returned. Read-only.
     */
    description?: string | undefined;
    /**
     * Name of directory object being returned, like group or application. Read-only.
     */
    displayName?: string | undefined;
    /**
     * The tenant identifier for the partner tenant. Read-only.
     */
    externalPartnerTenantId?: Guid | undefined;
    /**
     * The type of the referenced object in the partner tenant. Read-only.
     */
    objectType?: string | undefined;
}
