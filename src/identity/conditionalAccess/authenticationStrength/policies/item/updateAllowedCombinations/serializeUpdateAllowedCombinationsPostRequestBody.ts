import { AuthenticationMethodModes } from '../../../../../../models/authenticationMethodModes';
import { type UpdateAllowedCombinationsPostRequestBody } from './updateAllowedCombinationsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpdateAllowedCombinationsPostRequestBody(writer: SerializationWriter, updateAllowedCombinationsPostRequestBody: UpdateAllowedCombinationsPostRequestBody | undefined = {} as UpdateAllowedCombinationsPostRequestBody) : void {
        if(updateAllowedCombinationsPostRequestBody.allowedCombinations)
        writer.writeEnumValue<AuthenticationMethodModes[]>("allowedCombinations", ...updateAllowedCombinationsPostRequestBody.allowedCombinations);
        writer.writeAdditionalData(updateAllowedCombinationsPostRequestBody.additionalData);
}
