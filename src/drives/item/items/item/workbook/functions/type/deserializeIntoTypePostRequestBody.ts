import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TypePostRequestBody} from './typePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTypePostRequestBody(typePostRequestBody: TypePostRequestBody | undefined = {} as TypePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { typePostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
