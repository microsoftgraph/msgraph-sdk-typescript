import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PermutPostRequestBody} from './permutPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermutPostRequestBody(permutPostRequestBody: PermutPostRequestBody | undefined = {} as PermutPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { permutPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberChosen": n => { permutPostRequestBody.numberChosen = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
