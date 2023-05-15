import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {UnicodePostRequestBody} from './unicodePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnicodePostRequestBody(unicodePostRequestBody: UnicodePostRequestBody | undefined = {} as UnicodePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { unicodePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
