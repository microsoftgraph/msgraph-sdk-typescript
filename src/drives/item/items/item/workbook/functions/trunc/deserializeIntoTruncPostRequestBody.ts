import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TruncPostRequestBody} from './truncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTruncPostRequestBody(truncPostRequestBody: TruncPostRequestBody | undefined = {} as TruncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { truncPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numDigits": n => { truncPostRequestBody.numDigits = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
