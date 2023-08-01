import type {ContactFolder} from '../../../../models/contactFolder';
import {createContactFolderFromDiscriminatorValue} from '../../../../models/createContactFolderFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {serializeContactFolder} from '../../../../models/serializeContactFolder';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); },
    }
}
