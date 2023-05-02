import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MidPostRequestBody} from './midPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMidPostRequestBody(midPostRequestBody: MidPostRequestBody | undefined = {} as MidPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numChars": n => { midPostRequestBody.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { midPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { midPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
