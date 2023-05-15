import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DbcsPostRequestBody} from './dbcsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDbcsPostRequestBody(dbcsPostRequestBody: DbcsPostRequestBody | undefined = {} as DbcsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { dbcsPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
