import {AuthenticationMethodModes} from '../../../../models/authenticationMethodModes';
import {UpdateAllowedCombinationsPostRequestBody} from './updateAllowedCombinationsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateAllowedCombinationsPostRequestBody(writer: SerializationWriter, updateAllowedCombinationsPostRequestBody: UpdateAllowedCombinationsPostRequestBody | undefined = {} as UpdateAllowedCombinationsPostRequestBody) : void {
        if(updateAllowedCombinationsPostRequestBody.allowedCombinations)
        writer.writeEnumValue<AuthenticationMethodModes>("allowedCombinations", ...updateAllowedCombinationsPostRequestBody.allowedCombinations);
        writer.writeAdditionalData(updateAllowedCombinationsPostRequestBody.additionalData);
}
