import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PvPostRequestBody} from './pvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPvPostRequestBody(pvPostRequestBody: PvPostRequestBody | undefined = {} as PvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { pvPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { pvPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pmt": n => { pvPostRequestBody.pmt = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { pvPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { pvPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
