import { AuthenticationMethodModes } from './authenticationMethodModes';
import { type UpdateAllowedCombinationsResult } from './updateAllowedCombinationsResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateAllowedCombinationsResult(updateAllowedCombinationsResult: UpdateAllowedCombinationsResult | undefined = {} as UpdateAllowedCombinationsResult) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalInformation": n => { updateAllowedCombinationsResult.additionalInformation = n.getStringValue(); },
        "conditionalAccessReferences": n => { updateAllowedCombinationsResult.conditionalAccessReferences = n.getCollectionOfPrimitiveValues<string>(); },
        "currentCombinations": n => { updateAllowedCombinationsResult.currentCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        "@odata.type": n => { updateAllowedCombinationsResult.odataType = n.getStringValue(); },
        "previousCombinations": n => { updateAllowedCombinationsResult.previousCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
    }
}
