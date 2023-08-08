import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CountBlankPostRequestBody} from './countBlankPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountBlankPostRequestBody(countBlankPostRequestBody: CountBlankPostRequestBody | undefined = {} as CountBlankPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "range": n => { countBlankPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
