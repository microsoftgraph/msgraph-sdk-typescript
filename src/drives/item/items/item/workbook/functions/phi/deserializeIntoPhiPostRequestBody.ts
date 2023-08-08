import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PhiPostRequestBody} from './phiPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhiPostRequestBody(phiPostRequestBody: PhiPostRequestBody | undefined = {} as PhiPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { phiPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
