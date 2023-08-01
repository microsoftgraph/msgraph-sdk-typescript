import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitxorPostRequestBody} from './bitxorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitxorPostRequestBody(bitxorPostRequestBody: BitxorPostRequestBody | undefined = {} as BitxorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number1": n => { bitxorPostRequestBody.number1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number2": n => { bitxorPostRequestBody.number2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
