import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SumPostRequestBody} from './sumPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSumPostRequestBody(sumPostRequestBody: SumPostRequestBody | undefined = {} as SumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { sumPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
