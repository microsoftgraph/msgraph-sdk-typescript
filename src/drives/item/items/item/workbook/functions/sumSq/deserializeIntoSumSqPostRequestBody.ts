import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SumSqPostRequestBody} from './sumSqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSumSqPostRequestBody(sumSqPostRequestBody: SumSqPostRequestBody | undefined = {} as SumSqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { sumSqPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
