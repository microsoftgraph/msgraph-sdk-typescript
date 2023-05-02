import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LogNorm_DistPostRequestBody} from './logNorm_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLogNorm_DistPostRequestBody(logNorm_DistPostRequestBody: LogNorm_DistPostRequestBody | undefined = {} as LogNorm_DistPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { logNorm_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "mean": n => { logNorm_DistPostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { logNorm_DistPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { logNorm_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
