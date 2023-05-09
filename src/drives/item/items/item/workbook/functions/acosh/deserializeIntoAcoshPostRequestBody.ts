import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcoshPostRequestBody} from './acoshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcoshPostRequestBody(acoshPostRequestBody: AcoshPostRequestBody | undefined = {} as AcoshPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acoshPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
