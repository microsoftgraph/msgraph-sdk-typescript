import {DetailsInfo} from './detailsInfo';
import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedIdentity extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Details of the identity. */
    details?: DetailsInfo | undefined;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    identityType?: string | undefined;
}
