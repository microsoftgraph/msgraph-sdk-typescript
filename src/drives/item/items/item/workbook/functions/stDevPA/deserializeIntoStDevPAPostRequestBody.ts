import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {StDevPAPostRequestBody} from './stDevPAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStDevPAPostRequestBody(stDevPAPostRequestBody: StDevPAPostRequestBody | undefined = {} as StDevPAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { stDevPAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
