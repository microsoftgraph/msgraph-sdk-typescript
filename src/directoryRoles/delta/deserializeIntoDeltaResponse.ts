import {createDirectoryRoleFromDiscriminatorValue} from '../../models/createDirectoryRoleFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import type {DirectoryRole} from '../../models/directoryRole';
import {serializeDirectoryRole} from '../../models/serializeDirectoryRole';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<DirectoryRole>(createDirectoryRoleFromDiscriminatorValue); },
    }
}
