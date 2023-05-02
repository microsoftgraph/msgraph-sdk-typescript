import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RomanPostRequestBody} from './romanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRomanPostRequestBody(romanPostRequestBody: RomanPostRequestBody | undefined = {} as RomanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "form": n => { romanPostRequestBody.form = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { romanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
