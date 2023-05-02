import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TimevaluePostRequestBody} from './timevaluePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimevaluePostRequestBody(timevaluePostRequestBody: TimevaluePostRequestBody | undefined = {} as TimevaluePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "timeText": n => { timevaluePostRequestBody.timeText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
