import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IrrPostRequestBody} from './irrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIrrPostRequestBody(irrPostRequestBody: IrrPostRequestBody | undefined = {} as IrrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "guess": n => { irrPostRequestBody.guess = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { irrPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
