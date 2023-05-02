import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselKPostRequestBody} from './besselKPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBesselKPostRequestBody(besselKPostRequestBody: BesselKPostRequestBody | undefined = {} as BesselKPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "n": n => { besselKPostRequestBody.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { besselKPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
