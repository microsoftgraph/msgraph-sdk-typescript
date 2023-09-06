import { type SynchronizationLinkedObjects } from './synchronizationLinkedObjects';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SynchronizationJobSubject extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Principals that you would like to provision.
     */
    links?: SynchronizationLinkedObjects | undefined;
    /**
     * The identifier of an object to which a synchronizationJob is to be applied. Can be one of the following: An onPremisesDistinguishedName for synchronization from Active Directory to Azure AD.The user ID for synchronization from Azure AD to a third-party.The Worker ID of the Workday worker for synchronization from Workday to either Active Directory or Azure AD.
     */
    objectId?: string | undefined;
    /**
     * The type of the object to which a synchronizationJob is to be applied. Can be one of the following: user for synchronizing between Active Directory and Azure AD.User for synchronizing a user between Azure AD and a third-party application. Worker for synchronization a user between Workday and either Active Directory or Azure AD.Group for synchronizing a group between Azure AD and a third-party application.
     */
    objectTypeName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
