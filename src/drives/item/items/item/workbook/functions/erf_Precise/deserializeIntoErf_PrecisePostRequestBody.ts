import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Erf_PrecisePostRequestBody} from './erf_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErf_PrecisePostRequestBody(erf_PrecisePostRequestBody: Erf_PrecisePostRequestBody | undefined = {} as Erf_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { erf_PrecisePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
