import { type DirectoryRole } from '../../models/directoryRole';
import { serializeBaseDeltaFunctionResponse } from '../../models/serializeBaseDeltaFunctionResponse';
import { serializeDirectoryRole } from '../../models/serializeDirectoryRole';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<DirectoryRole>("value", deltaResponse.value, serializeDirectoryRole);
}
