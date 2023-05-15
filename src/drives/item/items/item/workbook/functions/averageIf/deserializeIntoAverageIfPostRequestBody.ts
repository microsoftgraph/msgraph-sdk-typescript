import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageIfPostRequestBody} from './averageIfPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageIfPostRequestBody(averageIfPostRequestBody: AverageIfPostRequestBody | undefined = {} as AverageIfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "averageRange": n => { averageIfPostRequestBody.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "criteria": n => { averageIfPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "range": n => { averageIfPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
