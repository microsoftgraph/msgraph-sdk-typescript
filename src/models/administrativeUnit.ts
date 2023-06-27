import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnit extends DirectoryObject, Parsable {
    /**
     * An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search.
     */
    description?: string | undefined;
    /**
     * Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     */
    displayName?: string | undefined;
    /**
     * The collection of open extensions defined for this administrative unit. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * Users and groups that are members of this administrative unit. Supports $expand.
     */
    members?: DirectoryObject[] | undefined;
    /**
     * Scoped-role members of this administrative unit.
     */
    scopedRoleMembers?: ScopedRoleMembership[] | undefined;
    /**
     * Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit.
     */
    visibility?: string | undefined;
}
