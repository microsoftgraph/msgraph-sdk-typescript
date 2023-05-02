import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CothPostRequestBody} from './cothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCothPostRequestBody(cothPostRequestBody: CothPostRequestBody | undefined = {} as CothPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cothPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
