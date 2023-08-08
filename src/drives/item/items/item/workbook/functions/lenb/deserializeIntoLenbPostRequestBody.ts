import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LenbPostRequestBody} from './lenbPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLenbPostRequestBody(lenbPostRequestBody: LenbPostRequestBody | undefined = {} as LenbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lenbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
