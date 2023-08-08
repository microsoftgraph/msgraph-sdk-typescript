import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ReplaceBPostRequestBody} from './replaceBPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplaceBPostRequestBody(replaceBPostRequestBody: ReplaceBPostRequestBody | undefined = {} as ReplaceBPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newText": n => { replaceBPostRequestBody.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numBytes": n => { replaceBPostRequestBody.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "oldText": n => { replaceBPostRequestBody.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { replaceBPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
