import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SumPostRequestBody} from './sumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSumPostRequestBody(sumPostRequestBody: SumPostRequestBody | undefined = {} as SumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { sumPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
