import {IdentitySource} from './identitySource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalDomainFederation extends IdentitySource, Parsable {
    /**
     * The name of the identity source, typically also the domain name. Read only.
     */
    displayName?: string | undefined;
    /**
     * The domain name. Read only.
     */
    domainName?: string | undefined;
    /**
     * The issuerURI of the incoming federation. Read only.
     */
    issuerUri?: string | undefined;
}
