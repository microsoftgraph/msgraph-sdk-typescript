import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ErfPostRequestBody} from './erfPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErfPostRequestBody(erfPostRequestBody: ErfPostRequestBody | undefined = {} as ErfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lowerLimit": n => { erfPostRequestBody.lowerLimit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "upperLimit": n => { erfPostRequestBody.upperLimit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
