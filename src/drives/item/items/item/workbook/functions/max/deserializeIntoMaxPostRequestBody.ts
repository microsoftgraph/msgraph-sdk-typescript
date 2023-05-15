import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MaxPostRequestBody} from './maxPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMaxPostRequestBody(maxPostRequestBody: MaxPostRequestBody | undefined = {} as MaxPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { maxPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
