import type {Contact} from '../../../../../../../models/contact';
import {createContactFromDiscriminatorValue} from '../../../../../../../models/createContactFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {serializeContact} from '../../../../../../../models/serializeContact';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
    }
}
