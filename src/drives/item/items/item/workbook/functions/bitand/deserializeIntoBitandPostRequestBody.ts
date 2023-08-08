import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitandPostRequestBody} from './bitandPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitandPostRequestBody(bitandPostRequestBody: BitandPostRequestBody | undefined = {} as BitandPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number1": n => { bitandPostRequestBody.number1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number2": n => { bitandPostRequestBody.number2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
