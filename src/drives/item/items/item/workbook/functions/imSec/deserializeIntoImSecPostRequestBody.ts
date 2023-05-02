import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSecPostRequestBody} from './imSecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSecPostRequestBody(imSecPostRequestBody: ImSecPostRequestBody | undefined = {} as ImSecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSecPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
