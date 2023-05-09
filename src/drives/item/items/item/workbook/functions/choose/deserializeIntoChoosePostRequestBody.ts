import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ChoosePostRequestBody} from './choosePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChoosePostRequestBody(choosePostRequestBody: ChoosePostRequestBody | undefined = {} as ChoosePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "indexNum": n => { choosePostRequestBody.indexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { choosePostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
