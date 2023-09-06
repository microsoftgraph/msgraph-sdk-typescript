import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FvschedulePostRequestBody } from './fvschedulePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFvschedulePostRequestBody(fvschedulePostRequestBody: FvschedulePostRequestBody | undefined = {} as FvschedulePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "principal": n => { fvschedulePostRequestBody.principal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "schedule": n => { fvschedulePostRequestBody.schedule = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
