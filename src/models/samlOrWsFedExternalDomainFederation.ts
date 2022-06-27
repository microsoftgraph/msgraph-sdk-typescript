import {ExternalDomainName} from './externalDomainName';
import {SamlOrWsFedProvider} from './samlOrWsFedProvider';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedExternalDomainFederation extends Partial<AdditionalDataHolder>, Partial<Parsable>, SamlOrWsFedProvider {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq). */
    domains?: ExternalDomainName[] | undefined;
}
