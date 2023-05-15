import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PmtPostRequestBody} from './pmtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPmtPostRequestBody(pmtPostRequestBody: PmtPostRequestBody | undefined = {} as PmtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { pmtPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { pmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { pmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { pmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { pmtPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
