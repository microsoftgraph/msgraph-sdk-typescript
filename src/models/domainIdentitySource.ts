import {IdentitySource} from './identitySource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainIdentitySource extends Partial<AdditionalDataHolder>, IdentitySource, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the identity source, typically also the domain name. Read only. */
    displayName?: string | undefined;
    /** The domain name. Read only. */
    domainName?: string | undefined;
}
