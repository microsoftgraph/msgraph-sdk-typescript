import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RadiansPostRequestBody } from './radiansPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRadiansPostRequestBody(radiansPostRequestBody: RadiansPostRequestBody | undefined = {} as RadiansPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "angle": n => { radiansPostRequestBody.angle = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
