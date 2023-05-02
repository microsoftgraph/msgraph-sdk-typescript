import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcothPostRequestBody} from './acothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcothPostRequestBody(acothPostRequestBody: AcothPostRequestBody | undefined = {} as AcothPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acothPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
