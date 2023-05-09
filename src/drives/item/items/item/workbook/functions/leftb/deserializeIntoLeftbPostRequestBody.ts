import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LeftbPostRequestBody} from './leftbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLeftbPostRequestBody(leftbPostRequestBody: LeftbPostRequestBody | undefined = {} as LeftbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numBytes": n => { leftbPostRequestBody.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { leftbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
