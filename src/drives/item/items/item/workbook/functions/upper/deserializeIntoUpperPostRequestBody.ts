import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {UpperPostRequestBody} from './upperPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpperPostRequestBody(upperPostRequestBody: UpperPostRequestBody | undefined = {} as UpperPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { upperPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
