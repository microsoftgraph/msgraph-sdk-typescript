import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CscPostRequestBody} from './cscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCscPostRequestBody(cscPostRequestBody: CscPostRequestBody | undefined = {} as CscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cscPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
