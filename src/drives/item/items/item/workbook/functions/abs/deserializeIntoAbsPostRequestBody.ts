import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AbsPostRequestBody} from './absPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAbsPostRequestBody(absPostRequestBody: AbsPostRequestBody | undefined = {} as AbsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { absPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
