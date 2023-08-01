import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SmallPostRequestBody} from './smallPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSmallPostRequestBody(smallPostRequestBody: SmallPostRequestBody | undefined = {} as SmallPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { smallPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "k": n => { smallPostRequestBody.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
