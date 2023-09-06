import { AuthenticationMethodModes } from './authenticationMethodModes';
import { type UpdateAllowedCombinationsResult } from './updateAllowedCombinationsResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpdateAllowedCombinationsResult(writer: SerializationWriter, updateAllowedCombinationsResult: UpdateAllowedCombinationsResult | undefined = {} as UpdateAllowedCombinationsResult) : void {
        writer.writeStringValue("additionalInformation", updateAllowedCombinationsResult.additionalInformation);
        writer.writeCollectionOfPrimitiveValues<string>("conditionalAccessReferences", updateAllowedCombinationsResult.conditionalAccessReferences);
        writer.writeCollectionOfObjectValues<AuthenticationMethodModes>("currentCombinations", updateAllowedCombinationsResult.currentCombinations, object);
        writer.writeStringValue("@odata.type", updateAllowedCombinationsResult.odataType);
        writer.writeCollectionOfObjectValues<AuthenticationMethodModes>("previousCombinations", updateAllowedCombinationsResult.previousCombinations, object);
        writer.writeAdditionalData(updateAllowedCombinationsResult.additionalData);
}
