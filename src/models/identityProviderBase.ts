import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBase extends Entity, Partial<Parsable> {
    /** The display name of the identity provider. */
    displayName?: string | undefined;
}
