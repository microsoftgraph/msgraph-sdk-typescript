import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LeftPostRequestBody} from './leftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLeftPostRequestBody(leftPostRequestBody: LeftPostRequestBody | undefined = {} as LeftPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numChars": n => { leftPostRequestBody.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { leftPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
