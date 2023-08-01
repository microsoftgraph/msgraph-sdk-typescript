import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ErfC_PrecisePostRequestBody} from './erfC_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErfC_PrecisePostRequestBody(erfC_PrecisePostRequestBody: ErfC_PrecisePostRequestBody | undefined = {} as ErfC_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { erfC_PrecisePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
