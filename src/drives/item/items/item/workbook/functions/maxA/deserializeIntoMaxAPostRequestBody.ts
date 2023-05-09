import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MaxAPostRequestBody} from './maxAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMaxAPostRequestBody(maxAPostRequestBody: MaxAPostRequestBody | undefined = {} as MaxAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { maxAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
