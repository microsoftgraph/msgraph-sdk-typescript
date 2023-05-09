import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ArabicPostRequestBody} from './arabicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArabicPostRequestBody(arabicPostRequestBody: ArabicPostRequestBody | undefined = {} as ArabicPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { arabicPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
