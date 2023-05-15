import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PercentRank_IncPostRequestBody} from './percentRank_IncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPercentRank_IncPostRequestBody(percentRank_IncPostRequestBody: PercentRank_IncPostRequestBody | undefined = {} as PercentRank_IncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentRank_IncPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { percentRank_IncPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { percentRank_IncPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
