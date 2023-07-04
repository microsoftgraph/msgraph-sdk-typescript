import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserAccount extends AdditionalDataHolder, Parsable {
    /**
     * The displayed name of the user account.
     */
    accountName?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The user object identifier in Azure Active Directory (Azure AD).
     */
    azureAdUserId?: string | undefined;
    /**
     * The user display name in Azure AD.
     */
    displayName?: string | undefined;
    /**
     * The name of the Active Directory domain of which the user is a member.
     */
    domainName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The user principal name of the account in Azure AD.
     */
    userPrincipalName?: string | undefined;
    /**
     * The local security identifier of the user account.
     */
    userSid?: string | undefined;
}
