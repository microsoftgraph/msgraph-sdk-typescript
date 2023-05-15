import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AverageIfsPostRequestBody} from './averageIfsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageIfsPostRequestBody(averageIfsPostRequestBody: AverageIfsPostRequestBody | undefined = {} as AverageIfsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "averageRange": n => { averageIfsPostRequestBody.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { averageIfsPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
