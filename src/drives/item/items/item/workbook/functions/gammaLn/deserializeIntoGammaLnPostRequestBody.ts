import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GammaLnPostRequestBody} from './gammaLnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGammaLnPostRequestBody(gammaLnPostRequestBody: GammaLnPostRequestBody | undefined = {} as GammaLnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gammaLnPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
