import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSumPostRequestBody} from './imSumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSumPostRequestBody(imSumPostRequestBody: ImSumPostRequestBody | undefined = {} as ImSumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { imSumPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
