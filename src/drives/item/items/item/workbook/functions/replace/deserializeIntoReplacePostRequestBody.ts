import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ReplacePostRequestBody} from './replacePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplacePostRequestBody(replacePostRequestBody: ReplacePostRequestBody | undefined = {} as ReplacePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newText": n => { replacePostRequestBody.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numChars": n => { replacePostRequestBody.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "oldText": n => { replacePostRequestBody.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { replacePostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
