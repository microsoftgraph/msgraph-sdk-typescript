import {DirectoryObject} from './directoryObject';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryRole extends DirectoryObject, Parsable {
    /**
     * The description for the directory role. Read-only. Supports $filter (eq), $search, $select.
     */
    description?: string | undefined;
    /**
     * The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.
     */
    displayName?: string | undefined;
    /**
     * Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     */
    members?: DirectoryObject[] | undefined;
    /**
     * The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.
     */
    roleTemplateId?: string | undefined;
    /**
     * Members of this directory role that are scoped to administrative units. Read-only. Nullable.
     */
    scopedMembers?: ScopedRoleMembership[] | undefined;
}
