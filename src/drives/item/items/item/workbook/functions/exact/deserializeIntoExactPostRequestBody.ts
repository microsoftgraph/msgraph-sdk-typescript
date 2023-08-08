import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ExactPostRequestBody} from './exactPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExactPostRequestBody(exactPostRequestBody: ExactPostRequestBody | undefined = {} as ExactPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text1": n => { exactPostRequestBody.text1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text2": n => { exactPostRequestBody.text2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
