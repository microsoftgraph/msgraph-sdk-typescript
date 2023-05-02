import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DecimalPostRequestBody} from './decimalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDecimalPostRequestBody(decimalPostRequestBody: DecimalPostRequestBody | undefined = {} as DecimalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { decimalPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "radix": n => { decimalPostRequestBody.radix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
