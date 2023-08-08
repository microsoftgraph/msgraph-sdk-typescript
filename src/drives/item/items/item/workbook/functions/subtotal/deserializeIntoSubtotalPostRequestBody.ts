import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SubtotalPostRequestBody} from './subtotalPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubtotalPostRequestBody(subtotalPostRequestBody: SubtotalPostRequestBody | undefined = {} as SubtotalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "functionNum": n => { subtotalPostRequestBody.functionNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { subtotalPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
