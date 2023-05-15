import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DollarPostRequestBody} from './dollarPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDollarPostRequestBody(dollarPostRequestBody: DollarPostRequestBody | undefined = {} as DollarPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimals": n => { dollarPostRequestBody.decimals = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { dollarPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
