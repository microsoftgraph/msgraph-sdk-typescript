import { AuthenticationMethodModes } from './authenticationMethodModes';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UpdateAllowedCombinationsResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Information about why the updateAllowedCombinations action was successful or failed.
     */
    additionalInformation?: string | undefined;
    /**
     * References to existing Conditional Access policies that use this authentication strength.
     */
    conditionalAccessReferences?: string[] | undefined;
    /**
     * The list of current authentication method combinations allowed by the authentication strength.
     */
    currentCombinations?: AuthenticationMethodModes[][] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The list of former authentication method combinations allowed by the authentication strength before they were updated through the updateAllowedCombinations action.
     */
    previousCombinations?: AuthenticationMethodModes[][] | undefined;
}
