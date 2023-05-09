import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {StDev_PPostRequestBody} from './stDev_PPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStDev_PPostRequestBody(stDev_PPostRequestBody: StDev_PPostRequestBody | undefined = {} as StDev_PPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { stDev_PPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
