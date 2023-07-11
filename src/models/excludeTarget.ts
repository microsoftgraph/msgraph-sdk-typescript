import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExcludeTarget extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The object identifier of an Azure Active Directory user or group.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The targetType property
     */
    targetType?: AuthenticationMethodTargetType | undefined;
}
