import {DirectoryObject} from './directoryObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionGrant extends Partial<AdditionalDataHolder>, DirectoryObject, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** ID of the service principal of the Azure AD app that has been granted access. Read-only. */
    clientAppId?: string | undefined;
    /** ID of the Azure AD app that has been granted access. Read-only. */
    clientId?: string | undefined;
    /** The name of the resource-specific permission. Read-only. */
    permission?: string | undefined;
    /** The type of permission. Possible values are: Application, Delegated. Read-only. */
    permissionType?: string | undefined;
    /** ID of the Azure AD app that is hosting the resource. Read-only. */
    resourceAppId?: string | undefined;
}
