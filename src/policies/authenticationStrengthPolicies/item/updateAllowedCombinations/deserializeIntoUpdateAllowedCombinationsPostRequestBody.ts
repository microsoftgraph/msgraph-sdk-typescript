import {AuthenticationMethodModes} from '../../../../models/authenticationMethodModes';
import {UpdateAllowedCombinationsPostRequestBody} from './updateAllowedCombinationsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateAllowedCombinationsPostRequestBody(updateAllowedCombinationsPostRequestBody: UpdateAllowedCombinationsPostRequestBody | undefined = {} as UpdateAllowedCombinationsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedCombinations": n => { updateAllowedCombinationsPostRequestBody.allowedCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
    }
}
