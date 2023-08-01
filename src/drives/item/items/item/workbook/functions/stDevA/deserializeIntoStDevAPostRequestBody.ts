import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {StDevAPostRequestBody} from './stDevAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStDevAPostRequestBody(stDevAPostRequestBody: StDevAPostRequestBody | undefined = {} as StDevAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { stDevAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
