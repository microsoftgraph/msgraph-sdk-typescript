import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SinhPostRequestBody} from './sinhPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSinhPostRequestBody(sinhPostRequestBody: SinhPostRequestBody | undefined = {} as SinhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sinhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
