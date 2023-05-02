import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ReptPostRequestBody} from './reptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReptPostRequestBody(reptPostRequestBody: ReptPostRequestBody | undefined = {} as ReptPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numberTimes": n => { reptPostRequestBody.numberTimes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { reptPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
