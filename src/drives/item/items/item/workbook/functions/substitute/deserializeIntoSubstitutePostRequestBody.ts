import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SubstitutePostRequestBody} from './substitutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubstitutePostRequestBody(substitutePostRequestBody: SubstitutePostRequestBody | undefined = {} as SubstitutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "instanceNum": n => { substitutePostRequestBody.instanceNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "newText": n => { substitutePostRequestBody.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "oldText": n => { substitutePostRequestBody.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { substitutePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
