import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DbcsPostRequestBody} from './dbcsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDbcsPostRequestBody(dbcsPostRequestBody: DbcsPostRequestBody | undefined = {} as DbcsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { dbcsPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
