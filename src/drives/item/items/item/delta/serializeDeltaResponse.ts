import { type DriveItem } from '../../../../../models/driveItem';
import { serializeBaseDeltaFunctionResponse } from '../../../../../models/serializeBaseDeltaFunctionResponse';
import { serializeDriveItem } from '../../../../../models/serializeDriveItem';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<DriveItem>("value", deltaResponse.value, serializeDriveItem);
}
