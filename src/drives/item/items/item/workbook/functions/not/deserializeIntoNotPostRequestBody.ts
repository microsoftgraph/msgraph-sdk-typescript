import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NotPostRequestBody} from './notPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotPostRequestBody(notPostRequestBody: NotPostRequestBody | undefined = {} as NotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "logical": n => { notPostRequestBody.logical = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
