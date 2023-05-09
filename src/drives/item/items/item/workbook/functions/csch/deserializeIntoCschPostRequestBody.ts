import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CschPostRequestBody} from './cschPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCschPostRequestBody(cschPostRequestBody: CschPostRequestBody | undefined = {} as CschPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cschPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
