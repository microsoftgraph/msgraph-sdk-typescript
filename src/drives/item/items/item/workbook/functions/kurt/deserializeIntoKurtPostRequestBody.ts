import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {KurtPostRequestBody} from './kurtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKurtPostRequestBody(kurtPostRequestBody: KurtPostRequestBody | undefined = {} as KurtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { kurtPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
