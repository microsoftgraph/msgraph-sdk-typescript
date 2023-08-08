import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FixedPostRequestBody} from './fixedPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFixedPostRequestBody(fixedPostRequestBody: FixedPostRequestBody | undefined = {} as FixedPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimals": n => { fixedPostRequestBody.decimals = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "noCommas": n => { fixedPostRequestBody.noCommas = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { fixedPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
