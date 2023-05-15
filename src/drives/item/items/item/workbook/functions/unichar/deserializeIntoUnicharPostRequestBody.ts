import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {UnicharPostRequestBody} from './unicharPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnicharPostRequestBody(unicharPostRequestBody: UnicharPostRequestBody | undefined = {} as UnicharPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { unicharPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
