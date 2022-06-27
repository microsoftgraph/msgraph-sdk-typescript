import {DirectoryObject} from './directoryObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Contract extends Partial<AdditionalDataHolder>, DirectoryObject, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below. */
    contractType?: string | undefined;
    /** The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource. */
    customerId?: string | undefined;
    /** A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes. */
    defaultDomainName?: string | undefined;
    /** A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes. */
    displayName?: string | undefined;
}
