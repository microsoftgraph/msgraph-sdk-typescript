import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {StandardizePostRequestBody} from './standardizePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStandardizePostRequestBody(standardizePostRequestBody: StandardizePostRequestBody | undefined = {} as StandardizePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mean": n => { standardizePostRequestBody.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { standardizePostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { standardizePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
