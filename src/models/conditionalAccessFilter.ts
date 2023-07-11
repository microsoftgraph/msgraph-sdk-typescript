import {FilterMode} from './filterMode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessFilter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mode property
     */
    mode?: FilterMode | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Rule syntax is similar to that used for membership rules for groups in Azure Active Directory (Azure AD). For details, see rules with multiple expressions
     */
    rule?: string | undefined;
}
