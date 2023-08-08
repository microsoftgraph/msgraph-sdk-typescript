import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CleanPostRequestBody} from './cleanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCleanPostRequestBody(cleanPostRequestBody: CleanPostRequestBody | undefined = {} as CleanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { cleanPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
