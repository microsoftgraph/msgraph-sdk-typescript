import { type ExternalDomainName } from './externalDomainName';
import { type SamlOrWsFedProvider } from './samlOrWsFedProvider';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedExternalDomainFederation extends Parsable, SamlOrWsFedProvider {
    /**
     * Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq).
     */
    domains?: ExternalDomainName[] | undefined;
}
