import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSumPostRequestBody} from './imSumPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSumPostRequestBody(imSumPostRequestBody: ImSumPostRequestBody | undefined = {} as ImSumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { imSumPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
