import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImProductPostRequestBody} from './imProductPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImProductPostRequestBody(imProductPostRequestBody: ImProductPostRequestBody | undefined = {} as ImProductPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { imProductPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
