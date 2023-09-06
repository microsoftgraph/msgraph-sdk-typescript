import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DegreesPostRequestBody } from './degreesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDegreesPostRequestBody(degreesPostRequestBody: DegreesPostRequestBody | undefined = {} as DegreesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "angle": n => { degreesPostRequestBody.angle = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
