import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointIdentity extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The sign in name of the SharePoint identity. */
    loginName?: string | undefined;
}
