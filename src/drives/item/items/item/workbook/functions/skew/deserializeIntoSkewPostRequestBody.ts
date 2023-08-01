import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SkewPostRequestBody} from './skewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkewPostRequestBody(skewPostRequestBody: SkewPostRequestBody | undefined = {} as SkewPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { skewPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
