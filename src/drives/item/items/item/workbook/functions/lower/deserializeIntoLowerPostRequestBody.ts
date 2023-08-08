import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LowerPostRequestBody} from './lowerPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLowerPostRequestBody(lowerPostRequestBody: LowerPostRequestBody | undefined = {} as LowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lowerPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
