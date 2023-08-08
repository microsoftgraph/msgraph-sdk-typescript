import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DecimalPostRequestBody} from './decimalPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDecimalPostRequestBody(decimalPostRequestBody: DecimalPostRequestBody | undefined = {} as DecimalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { decimalPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "radix": n => { decimalPostRequestBody.radix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
