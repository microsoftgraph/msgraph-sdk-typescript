import { type Entity } from './entity';
import { type Identity } from './identity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembership extends Entity, Parsable {
    /**
     * Unique identifier for the administrative unit that the directory role is scoped to
     */
    administrativeUnitId?: string | undefined;
    /**
     * Unique identifier for the directory role that the member is in.
     */
    roleId?: string | undefined;
    /**
     * The roleMemberInfo property
     */
    roleMemberInfo?: Identity | undefined;
}
