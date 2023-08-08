import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TrimPostRequestBody} from './trimPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrimPostRequestBody(trimPostRequestBody: TrimPostRequestBody | undefined = {} as TrimPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { trimPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
