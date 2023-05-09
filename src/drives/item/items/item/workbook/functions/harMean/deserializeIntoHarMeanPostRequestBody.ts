import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HarMeanPostRequestBody} from './harMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHarMeanPostRequestBody(harMeanPostRequestBody: HarMeanPostRequestBody | undefined = {} as HarMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { harMeanPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
