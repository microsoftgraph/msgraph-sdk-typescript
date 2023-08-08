import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RomanPostRequestBody} from './romanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRomanPostRequestBody(romanPostRequestBody: RomanPostRequestBody | undefined = {} as RomanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "form": n => { romanPostRequestBody.form = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { romanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
