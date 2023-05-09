import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ExpPostRequestBody} from './expPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExpPostRequestBody(expPostRequestBody: ExpPostRequestBody | undefined = {} as ExpPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { expPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
