import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BesselJPostRequestBody} from './besselJPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBesselJPostRequestBody(besselJPostRequestBody: BesselJPostRequestBody | undefined = {} as BesselJPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "n": n => { besselJPostRequestBody.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { besselJPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
