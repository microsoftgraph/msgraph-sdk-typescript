import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LogNorm_InvPostRequestBody} from './logNorm_InvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLogNorm_InvPostRequestBody(logNorm_InvPostRequestBody: LogNorm_InvPostRequestBody | undefined = {} as LogNorm_InvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mean": n => { logNorm_InvPostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { logNorm_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { logNorm_InvPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
