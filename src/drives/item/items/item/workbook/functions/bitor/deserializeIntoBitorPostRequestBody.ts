import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitorPostRequestBody} from './bitorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitorPostRequestBody(bitorPostRequestBody: BitorPostRequestBody | undefined = {} as BitorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number1": n => { bitorPostRequestBody.number1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number2": n => { bitorPostRequestBody.number2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
