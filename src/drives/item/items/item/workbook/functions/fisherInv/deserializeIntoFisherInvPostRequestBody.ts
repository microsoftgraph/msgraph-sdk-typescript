import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FisherInvPostRequestBody } from './fisherInvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFisherInvPostRequestBody(fisherInvPostRequestBody: FisherInvPostRequestBody | undefined = {} as FisherInvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "y": n => { fisherInvPostRequestBody.y = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
