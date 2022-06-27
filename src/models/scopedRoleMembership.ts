import {Entity} from './entity';
import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembership extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Unique identifier for the administrative unit that the directory role is scoped to */
    administrativeUnitId?: string | undefined;
    /** Unique identifier for the directory role that the member is in. */
    roleId?: string | undefined;
    /** The roleMemberInfo property */
    roleMemberInfo?: Identity | undefined;
}
