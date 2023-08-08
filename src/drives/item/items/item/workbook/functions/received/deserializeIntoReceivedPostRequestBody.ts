import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ReceivedPostRequestBody} from './receivedPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReceivedPostRequestBody(receivedPostRequestBody: ReceivedPostRequestBody | undefined = {} as ReceivedPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { receivedPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "discount": n => { receivedPostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "investment": n => { receivedPostRequestBody.investment = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { receivedPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { receivedPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
