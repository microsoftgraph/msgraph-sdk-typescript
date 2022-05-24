import {Entity} from './entity';

export interface IdentityProviderBase extends Entity{
    /** The display name of the identity provider. */
    displayName?:string | undefined;
}
