import {Entity} from '../entity';
import {IdentityType} from './identityType';

export interface Identity extends Entity{
    /** The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system. */
    type?:IdentityType | undefined;
}
