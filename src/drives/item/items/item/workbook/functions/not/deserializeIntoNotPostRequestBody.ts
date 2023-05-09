import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NotPostRequestBody} from './notPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotPostRequestBody(notPostRequestBody: NotPostRequestBody | undefined = {} as NotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "logical": n => { notPostRequestBody.logical = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
