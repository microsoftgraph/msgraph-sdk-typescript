import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SinhPostRequestBody} from './sinhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSinhPostRequestBody(sinhPostRequestBody: SinhPostRequestBody | undefined = {} as SinhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sinhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
