import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CleanPostRequestBody} from './cleanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCleanPostRequestBody(cleanPostRequestBody: CleanPostRequestBody | undefined = {} as CleanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { cleanPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
