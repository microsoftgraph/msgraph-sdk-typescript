import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BesselYPostRequestBody} from './besselYPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBesselYPostRequestBody(besselYPostRequestBody: BesselYPostRequestBody | undefined = {} as BesselYPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "n": n => { besselYPostRequestBody.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { besselYPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
