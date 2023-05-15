import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {StandardizePostRequestBody} from './standardizePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStandardizePostRequestBody(standardizePostRequestBody: StandardizePostRequestBody | undefined = {} as StandardizePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mean": n => { standardizePostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { standardizePostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { standardizePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
