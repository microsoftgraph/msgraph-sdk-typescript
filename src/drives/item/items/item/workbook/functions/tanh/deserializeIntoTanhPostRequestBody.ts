import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TanhPostRequestBody} from './tanhPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTanhPostRequestBody(tanhPostRequestBody: TanhPostRequestBody | undefined = {} as TanhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { tanhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
