import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SydPostRequestBody} from './sydPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSydPostRequestBody(sydPostRequestBody: SydPostRequestBody | undefined = {} as SydPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { sydPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { sydPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "per": n => { sydPostRequestBody.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { sydPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
