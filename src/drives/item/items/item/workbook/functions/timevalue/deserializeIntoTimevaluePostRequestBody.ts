import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TimevaluePostRequestBody} from './timevaluePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimevaluePostRequestBody(timevaluePostRequestBody: TimevaluePostRequestBody | undefined = {} as TimevaluePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "timeText": n => { timevaluePostRequestBody.timeText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
