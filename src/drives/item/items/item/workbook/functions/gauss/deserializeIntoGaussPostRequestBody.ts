import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GaussPostRequestBody} from './gaussPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGaussPostRequestBody(gaussPostRequestBody: GaussPostRequestBody | undefined = {} as GaussPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gaussPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
