import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MinAPostRequestBody} from './minAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMinAPostRequestBody(minAPostRequestBody: MinAPostRequestBody | undefined = {} as MinAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { minAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
