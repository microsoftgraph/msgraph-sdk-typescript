import { createDirectoryObjectFromDiscriminatorValue } from '../../../../../../models/createDirectoryObjectFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type DirectoryObject } from '../../../../../../models/directoryObject';
import { serializeDirectoryObject } from '../../../../../../models/serializeDirectoryObject';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
