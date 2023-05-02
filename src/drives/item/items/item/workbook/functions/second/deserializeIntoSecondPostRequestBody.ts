import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SecondPostRequestBody} from './secondPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecondPostRequestBody(secondPostRequestBody: SecondPostRequestBody | undefined = {} as SecondPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { secondPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
