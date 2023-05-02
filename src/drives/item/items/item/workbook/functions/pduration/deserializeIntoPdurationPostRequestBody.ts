import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PdurationPostRequestBody} from './pdurationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPdurationPostRequestBody(pdurationPostRequestBody: PdurationPostRequestBody | undefined = {} as PdurationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { pdurationPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { pdurationPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { pdurationPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
