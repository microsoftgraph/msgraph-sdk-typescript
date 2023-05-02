import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../models/serializeJson';
import {SetPositionPostRequestBody} from './setPositionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPositionPostRequestBody(setPositionPostRequestBody: SetPositionPostRequestBody | undefined = {} as SetPositionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endCell": n => { setPositionPostRequestBody.endCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startCell": n => { setPositionPostRequestBody.startCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
