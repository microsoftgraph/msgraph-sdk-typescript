import {AuthenticationMethodModes} from '../../../../models/authenticationMethodModes';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateAllowedCombinationsPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The allowedCombinations property
     */
    allowedCombinations?: AuthenticationMethodModes[] | undefined;
}
