import { AuthenticationMethodModes } from '../../../../../../models/authenticationMethodModes';
import { type UpdateAllowedCombinationsPostRequestBody } from './updateAllowedCombinationsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateAllowedCombinationsPostRequestBody(updateAllowedCombinationsPostRequestBody: UpdateAllowedCombinationsPostRequestBody | undefined = {} as UpdateAllowedCombinationsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedCombinations": n => { updateAllowedCombinationsPostRequestBody.allowedCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
    }
}
