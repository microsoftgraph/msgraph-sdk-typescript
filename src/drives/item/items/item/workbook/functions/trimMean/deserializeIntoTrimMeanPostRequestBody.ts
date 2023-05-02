import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TrimMeanPostRequestBody} from './trimMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrimMeanPostRequestBody(trimMeanPostRequestBody: TrimMeanPostRequestBody | undefined = {} as TrimMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { trimMeanPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "percent": n => { trimMeanPostRequestBody.percent = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
