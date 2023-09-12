import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IpmtPostRequestBody } from './ipmtPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIpmtPostRequestBody(ipmtPostRequestBody: IpmtPostRequestBody | undefined = {} as IpmtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { ipmtPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { ipmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "per": n => { ipmtPostRequestBody.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { ipmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { ipmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { ipmtPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
