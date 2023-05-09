import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LowerPostRequestBody} from './lowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLowerPostRequestBody(lowerPostRequestBody: LowerPostRequestBody | undefined = {} as LowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lowerPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
