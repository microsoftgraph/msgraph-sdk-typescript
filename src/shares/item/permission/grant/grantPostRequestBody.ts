import type {DriveRecipient} from '../../../../models/driveRecipient';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GrantPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The recipients property
     */
    recipients?: DriveRecipient[] | undefined;
    /**
     * The roles property
     */
    roles?: string[] | undefined;
}
