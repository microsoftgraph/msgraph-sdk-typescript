import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSinhPostRequestBody} from './imSinhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSinhPostRequestBody(imSinhPostRequestBody: ImSinhPostRequestBody | undefined = {} as ImSinhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSinhPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
