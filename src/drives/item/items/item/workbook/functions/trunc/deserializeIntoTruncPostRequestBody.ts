import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TruncPostRequestBody} from './truncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTruncPostRequestBody(truncPostRequestBody: TruncPostRequestBody | undefined = {} as TruncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { truncPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numDigits": n => { truncPostRequestBody.numDigits = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
