import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TextPostRequestBody} from './textPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTextPostRequestBody(textPostRequestBody: TextPostRequestBody | undefined = {} as TextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "formatText": n => { textPostRequestBody.formatText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "value": n => { textPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
