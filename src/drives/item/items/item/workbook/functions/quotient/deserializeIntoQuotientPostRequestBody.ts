import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {QuotientPostRequestBody} from './quotientPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuotientPostRequestBody(quotientPostRequestBody: QuotientPostRequestBody | undefined = {} as QuotientPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "denominator": n => { quotientPostRequestBody.denominator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numerator": n => { quotientPostRequestBody.numerator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
