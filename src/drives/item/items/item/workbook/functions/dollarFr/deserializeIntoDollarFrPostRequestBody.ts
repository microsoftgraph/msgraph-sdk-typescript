import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DollarFrPostRequestBody} from './dollarFrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDollarFrPostRequestBody(dollarFrPostRequestBody: DollarFrPostRequestBody | undefined = {} as DollarFrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalDollar": n => { dollarFrPostRequestBody.decimalDollar = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "fraction": n => { dollarFrPostRequestBody.fraction = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
