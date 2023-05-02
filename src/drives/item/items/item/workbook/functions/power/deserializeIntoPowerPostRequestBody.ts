import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PowerPostRequestBody} from './powerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPowerPostRequestBody(powerPostRequestBody: PowerPostRequestBody | undefined = {} as PowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { powerPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "power": n => { powerPostRequestBody.power = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
