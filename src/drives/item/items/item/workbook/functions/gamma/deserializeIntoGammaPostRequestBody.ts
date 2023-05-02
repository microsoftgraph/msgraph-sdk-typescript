import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GammaPostRequestBody} from './gammaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGammaPostRequestBody(gammaPostRequestBody: GammaPostRequestBody | undefined = {} as GammaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gammaPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
