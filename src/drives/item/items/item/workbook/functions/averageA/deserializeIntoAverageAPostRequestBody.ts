import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageAPostRequestBody} from './averageAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageAPostRequestBody(averageAPostRequestBody: AverageAPostRequestBody | undefined = {} as AverageAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { averageAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
