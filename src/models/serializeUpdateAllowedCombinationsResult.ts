import {AuthenticationMethodModes} from './authenticationMethodModes';
import type {UpdateAllowedCombinationsResult} from './updateAllowedCombinationsResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateAllowedCombinationsResult(writer: SerializationWriter, updateAllowedCombinationsResult: UpdateAllowedCombinationsResult | undefined = {} as UpdateAllowedCombinationsResult) : void {
        writer.writeStringValue("additionalInformation", updateAllowedCombinationsResult.additionalInformation);
        writer.writeCollectionOfPrimitiveValues<string>("conditionalAccessReferences", updateAllowedCombinationsResult.conditionalAccessReferences);
        if(updateAllowedCombinationsResult.currentCombinations)
        writer.writeEnumValue<AuthenticationMethodModes>("currentCombinations", ...updateAllowedCombinationsResult.currentCombinations);
        writer.writeStringValue("@odata.type", updateAllowedCombinationsResult.odataType);
        if(updateAllowedCombinationsResult.previousCombinations)
        writer.writeEnumValue<AuthenticationMethodModes>("previousCombinations", ...updateAllowedCombinationsResult.previousCombinations);
        writer.writeAdditionalData(updateAllowedCombinationsResult.additionalData);
}
