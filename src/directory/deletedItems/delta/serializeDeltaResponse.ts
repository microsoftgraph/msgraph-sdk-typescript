import {DirectoryObject} from '../../../models/directoryObject';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import {serializeDirectoryObject} from '../../../models/serializeDirectoryObject';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<DirectoryObject>("value", deltaResponse.value, serializeDirectoryObject);
}
