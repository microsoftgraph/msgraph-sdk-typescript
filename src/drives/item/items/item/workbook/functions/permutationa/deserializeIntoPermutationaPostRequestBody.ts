import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PermutationaPostRequestBody} from './permutationaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermutationaPostRequestBody(permutationaPostRequestBody: PermutationaPostRequestBody | undefined = {} as PermutationaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { permutationaPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberChosen": n => { permutationaPostRequestBody.numberChosen = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
