import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AsinhPostRequestBody} from './asinhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAsinhPostRequestBody(asinhPostRequestBody: AsinhPostRequestBody | undefined = {} as AsinhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { asinhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
