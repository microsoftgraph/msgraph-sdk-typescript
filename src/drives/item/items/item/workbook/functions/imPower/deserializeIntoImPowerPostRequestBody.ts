import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImPowerPostRequestBody} from './imPowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImPowerPostRequestBody(imPowerPostRequestBody: ImPowerPostRequestBody | undefined = {} as ImPowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imPowerPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { imPowerPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
