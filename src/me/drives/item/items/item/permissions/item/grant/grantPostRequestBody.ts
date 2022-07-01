import {DriveRecipient} from '../../../../../../../../models/driveRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GrantPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The recipients property */
    recipients?: DriveRecipient[] | undefined;
    /** The roles property */
    roles?: string[] | undefined;
}
