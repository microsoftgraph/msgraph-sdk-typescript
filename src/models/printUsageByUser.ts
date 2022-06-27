import {PrintUsage} from './printUsage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUser extends Partial<AdditionalDataHolder>, Partial<Parsable>, PrintUsage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The UPN of the user represented by these statistics. */
    userPrincipalName?: string | undefined;
}
