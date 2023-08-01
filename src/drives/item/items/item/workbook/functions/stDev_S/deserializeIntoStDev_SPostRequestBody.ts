import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {StDev_SPostRequestBody} from './stDev_SPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStDev_SPostRequestBody(stDev_SPostRequestBody: StDev_SPostRequestBody | undefined = {} as StDev_SPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { stDev_SPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
