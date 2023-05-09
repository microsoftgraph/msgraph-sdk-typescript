import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AveragePostRequestBody} from './averagePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAveragePostRequestBody(averagePostRequestBody: AveragePostRequestBody | undefined = {} as AveragePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { averagePostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
