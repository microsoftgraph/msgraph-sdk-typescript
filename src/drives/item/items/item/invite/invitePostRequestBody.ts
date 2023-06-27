import {DriveRecipient} from '../../../../../models/driveRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InvitePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The expirationDateTime property
     */
    expirationDateTime?: string | undefined;
    /**
     * The message property
     */
    message?: string | undefined;
    /**
     * The password property
     */
    password?: string | undefined;
    /**
     * The recipients property
     */
    recipients?: DriveRecipient[] | undefined;
    /**
     * The requireSignIn property
     */
    requireSignIn?: boolean | undefined;
    /**
     * The retainInheritedPermissions property
     */
    retainInheritedPermissions?: boolean | undefined;
    /**
     * The roles property
     */
    roles?: string[] | undefined;
    /**
     * The sendInvitation property
     */
    sendInvitation?: boolean | undefined;
}
