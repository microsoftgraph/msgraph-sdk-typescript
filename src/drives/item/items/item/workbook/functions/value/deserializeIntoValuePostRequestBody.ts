import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ValuePostRequestBody} from './valuePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoValuePostRequestBody(valuePostRequestBody: ValuePostRequestBody | undefined = {} as ValuePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { valuePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
