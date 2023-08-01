import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImPowerPostRequestBody} from './imPowerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImPowerPostRequestBody(imPowerPostRequestBody: ImPowerPostRequestBody | undefined = {} as ImPowerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imPowerPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { imPowerPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
