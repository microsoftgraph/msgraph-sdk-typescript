import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MidbPostRequestBody} from './midbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMidbPostRequestBody(midbPostRequestBody: MidbPostRequestBody | undefined = {} as MidbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numBytes": n => { midbPostRequestBody.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { midbPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { midbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
