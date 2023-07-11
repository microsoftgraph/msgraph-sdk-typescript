import {DelegatedAdminAccessContainerType} from './delegatedAdminAccessContainerType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminAccessContainer extends AdditionalDataHolder, Parsable {
    /**
     * The identifier of the access container (for example, a security group). For 'securityGroup' access containers, this must be a valid ID of an Azure AD security group in the Microsoft partner's tenant.
     */
    accessContainerId?: string | undefined;
    /**
     * The accessContainerType property
     */
    accessContainerType?: DelegatedAdminAccessContainerType | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
