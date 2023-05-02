import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitlshiftPostRequestBody} from './bitlshiftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlshiftPostRequestBody(bitlshiftPostRequestBody: BitlshiftPostRequestBody | undefined = {} as BitlshiftPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bitlshiftPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "shiftAmount": n => { bitlshiftPostRequestBody.shiftAmount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
