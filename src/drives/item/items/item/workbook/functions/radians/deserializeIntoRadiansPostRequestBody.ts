import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RadiansPostRequestBody} from './radiansPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRadiansPostRequestBody(radiansPostRequestBody: RadiansPostRequestBody | undefined = {} as RadiansPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "angle": n => { radiansPostRequestBody.angle = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
