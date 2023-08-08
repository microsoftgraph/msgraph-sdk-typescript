import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBase extends Entity, Parsable {
    /**
     * The display name of the identity provider.
     */
    displayName?: string | undefined;
}
