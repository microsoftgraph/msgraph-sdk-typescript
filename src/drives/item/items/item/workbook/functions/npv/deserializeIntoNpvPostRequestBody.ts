import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NpvPostRequestBody} from './npvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNpvPostRequestBody(npvPostRequestBody: NpvPostRequestBody | undefined = {} as NpvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "rate": n => { npvPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { npvPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
