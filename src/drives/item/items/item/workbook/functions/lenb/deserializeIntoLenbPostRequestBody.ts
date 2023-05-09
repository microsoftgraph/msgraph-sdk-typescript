import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LenbPostRequestBody} from './lenbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLenbPostRequestBody(lenbPostRequestBody: LenbPostRequestBody | undefined = {} as LenbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lenbPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
