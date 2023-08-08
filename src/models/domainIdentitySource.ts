import type {IdentitySource} from './identitySource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainIdentitySource extends IdentitySource, Parsable {
    /**
     * The name of the identity source, typically also the domain name. Read only.
     */
    displayName?: string | undefined;
    /**
     * The domain name. Read only.
     */
    domainName?: string | undefined;
}
